/*
 * @Author: liF
 * @Date: 2023-01-12 16:54:28
 * @LastEditors: liF
 * @LastEditTime: 2023-01-12 17:46:05
 */
const Status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

class MYPromise {
  _status;
  status;
  value;
  reason;
  constructor(fn) {
    this.status = Status.PENDING;
    this.value = null;
    this.reason = null;
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject.call(this, error);
    }
  }
  isFunc(e) {
    return typeof e === 'function';
  }
  resolve(v) {
    if (this.status === Status.PENDING) {
      if(v instanceof MYPromise) {
        if(v === this) {
          this.throw('不能返回自身');
        }
        queueMicrotask(() => {
         v.then((value) => {
          this.resolve(value);
         }, (reason) => {
          this.reject(reason);
         }) 
        })
      } else {
        this.value = v;
        this.status = Status.FULFILLED;
        this.FULFILLED_CALLBACK_LIST.forEach(callback => {
          callback(this.value);
        })
      }
    }
  }
  reject(reason) {
    if(this.status === Status.PENDING) {
      if(reason instanceof MYPromise) {
        if(reason === this) {
          this.throw('不能返回自身');
        }
        queueMicrotask(() => {
          reason.then((value) => {
            this.resolve(value);
          }, (reason2) => {
            this.reject(reason2);
          })
        })
      } else {
        this.reason = reason;
        this.status = Status.REJECTED;
        // 要先执行then函数，收集onRejected 回调函数，如果有回调函数，执行回调，没有的话，抛出异常
        queueMicrotask(() => {
          this.throw(reason);
        })
      }
    }
  }
  throw(reason) {
    if (!this.REJECTED_CALLBACK_LIST?.length) {
      throw (reason);
    } else {
      this.REJECTED_CALLBACK_LIST.forEach(callback => {
        callback(reason);
      })
      this.REJECTED_CALLBACK_LIST = [];
    }
  }
  // 储存成功和失败回调函数的数组
  FULFILLED_CALLBACK_LIST = [];
  REJECTED_CALLBACK_LIST = [];
  then(onFulfilled, onRejected) {
    const fulfillFn = this.isFunc(onFulfilled) ? onFulfilled : (value) => value;
    const rejectFn = this.isFunc(onRejected) ? onRejected : (reason) => { throw reason; };
    const fulfillFnWithTryCatch = (resolve, reject) => {
      queueMicrotask(() => {
        try {
          let x = fulfillFn(this.value);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      })
    }
    const rejectFnWithTryCatch = (resolve, reject) => {
      queueMicrotask(() => {
        try {
          let x = rejectFn(this.reason);
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
          fulfillFnWithTryCatch(res, rej);
        })
        return promise2;
      }

      case Status.REJECTED: {
        const promise2 = new MYPromise((res, rej) => {
          this.REJECTED_CALLBACK_LIST.push(() => {
            rejectFnWithTryCatch(res, rej);
          })
        })
        return promise2;
      }

      // 构造函数为异步，或者 then 返回的 实例
      case Status.PENDING: {
        const promise2 = new MYPromise((res, rej) => {
          this.FULFILLED_CALLBACK_LIST.push(() => {
            fulfillFnWithTryCatch(res, rej);
          })
          this.REJECTED_CALLBACK_LIST.push(() => {
            rejectFnWithTryCatch(res, rej);
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