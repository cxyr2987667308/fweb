/*
 * @Author: liF
 * @Date: 2023-01-12 16:54:28
 * @LastEditors: liF
 * @LastEditTime: 2023-01-16 16:29:21
 */
const Status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

class MYPromise {
  constructor(executor) {
    this.status = Status.PENDING;
    this.value = null;
    this.reason = null;
    this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];

    let toThrow = reason => {
      if(!this.onRejectedCallbacks?.length){
        throw(reason);
      } else {
        this.onRejectedCallbacks.forEach(callback => {
          callback(reason);
        })
        this.onRejectedCallbacks = [];
      }
    }

    let resolve = value => {
      if(this.status === Status.PENDING) {
        if(value instanceof MYPromise){
          if(v === this){
            toThrow('不能返回自身');
          }
          queueMicrotask(() => {
            value.then(v => {
              resolve(v);
            })
          }, (v) => {
            reject(v);
          })
        } else {
          this.value = value;
          this.status = Status.FULFILLED;
          this.onResolveCallbacks.forEach(callback => {
            callback(this.value);
          })
        }
      }
    }

    let reject = reason => {
      if(this.status === Status.PENDING){
        if(reason instanceof MYPromise){
          if(reason === this){
            toThrow('不能返回自身');
          }
          queueMicrotask(() => {
            reason.then((v) => {
              resolve(v);
            }, (v) => {
              reject(v);
            })
          })
        } else {
          this.reason = reason;
          this.status = Status.REJECTED;
          // 要先执行then函数，收集onRejected 回调函数，如果有回调函数，执行回调，没有的话，抛出异常
          queueMicrotask(() => {
            toThrow(reason);
          })
        }
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    const detalCallback = (promise2, result, resolve, reject) => {
      queueMicrotask(() => {
        try {
          let x = promise2(result);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      })
    }
    switch(this.status) {
      // 构造函数是同步
      case Status.FULFILLED: {
        const promise2 = new MYPromise((res, rej) => {
          detalCallback(onFulfilled, this.value, res, rej);
        })
        return promise2;
      }

      case Status.REJECTED: {
        const promise2 = new MYPromise((res, rej) => {
          this.onRejectedCallbacks.push(() => {
            detalCallback(onRejected, this.reason, res, rej);
          })
        })
        return promise2;
      }

      // 构造函数为异步，或者 then 返回的 实例
      case Status.PENDING: {
        const promise2 = new MYPromise((res, rej) => {
          this.onResolveCallbacks.push(() => {
            detalCallback(onFulfilled, this.value, res, rej);
          })
          this.onRejectedCallbacks.push(() => {
            detalCallback(onRejected, this.reason, res, rej);
          })
        })
        return promise2;
      }
    }
  } 
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve (value) {
    if (value instanceof MYPromise) return value;
    return new MYPromise((res, rej) => {
      res(value);
    })
  }

  static reject(reason) {
    return new MYPromise((resolve, reject) => {
      reject(reason);
    })
  }

  static all(promiseList) {
    let result = [];
    return new MYPromise((resOfAll, rejOfAll) => {
      if (promiseList?.length === 0) {
        resOfAll();
      } else {
        for(let index = 0; index < promiseList.length; index++) {
          const element = promiseList[index];
          MYPromise.resolve(element).then(res => {
            result.push(res);
            if (result.length === promiseList?.length) {
              resOfAll(result);
            }
          }, rej => {
            rejOfAll(rej);
          })
        }
      }
    })
  }
}

export default MYPromise;