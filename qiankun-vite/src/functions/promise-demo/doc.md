## 手写promise
### promise 接受一个函数 有三种状态 两个回调

```
pending 状态 表示等待状态, promise对象的默认状态, 
resolve 状态 表示成功状态, 当调用了resolve函数时,状态变成成功状态
reject 状态 表示失败状态, 当调用了reject函数时,状态变成失败状态
```

```
const resolve = value => {
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

const reject = reason => {
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
```