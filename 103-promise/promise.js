
// Status
const PENDING = 'PROMISE/PENDING';
const RESOLVED = 'PROMISE/RESOLVED';
const REJECTED = 'PROMISE/REJECTED';

function MyPromise(fn) {
  // init variable
  this.currentState = PENDING;
  this.value = undefined;
  // 用于保存 then 中的回调，只有当 promise
  // 状态为 pending 时才会缓存，并且每个实例至多缓存一个
  this.resolveCallbackList = [];
  this.rejectCallbackList = [];

  this.resolve = (value) => {
    if (value instanceof MyPromise) {
      // 如果 value 是个 Promise，递归执行
      return value.then(this.resolve, this.resolve);
    }

    // 异步执行，使用保证执行顺序
    setTimeout(() => {
      if (this.currentState !== PENDING) return;

      this.currentState = RESOLVED;
      this.value = value;
      this.resolveCallbackList.forEach(cb => cb());
    });
  };

  this.reject = (value) => {
    // 异步执行，使用保证执行顺序
    setTimeout(() => {
      if (this.currentState !== PENDING) return;

      this.currentState = REJECTED;
      this.value = value;
      this.rejectCallbackList.forEach(cb => cb());
    });
  };

  // 用于解决以下问题
  // new Promise(() => throw Error('error))
  try {
    fn(this.resolve, this.reject);
  } catch (e) {
    this.reject(e);
  }
}

function isObject(x) {
  return x !== null && (typeof x === 'object' || typeof x === 'function');
}

function resolutionProcedure(promise, x, resolve, reject) {
  // 规范 2.3.1，x 不能和 promise 相同，避免循环引用
  if (promise === x) {
    return reject(new TypeError('Error'));
  }

  // 规范 2.3.2
  // 如果 x 为 Promise，状态为 pending 需要继续等待否则执行
  if (x instanceof MyPromise) {
    if (x.currentState === PENDING) {
      x.then((value) => {
        resolutionProcedure(promise, value, resolve, reject);
      }, reject);
    }
  } else {
    x.then(resolve, reject);
  }

  // 规范 2.3.3.3.3
  // reject 或者 resolve 其中一个执行过得话，忽略其他的
  let called = false;
  // 规范 2.3.3，判断 x 是否为对象或者函数
  if (isObject(x)) {
    try {
      const { then } = x;
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return;
          called = true;
          resolutionProcedure(promise, y, resolve, reject);
        }, (e) => {
          if (called) return;
          called = true;
          reject(e);
        });
        return;
      }
      // 规范 2.3.3.4
      resolve(x);
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
    return;
  }
  // 规范 2.3.4，x 为基本类型
  resolve(x);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  let promise;
  // 规范 2.2.onResolved 和 onRejected 都为可选参数
  // 如果类型不是函数需要忽略，同时也实现了透传
  // Promise.resolve(4).then().then((value) => console.log(value))
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : (r) => { throw r; };

  // Handle success
  if (this.currentState === RESOLVED) {
    promise = new MyPromise((resolve, reject) => {
      // 规范 2.2.4，保证 onFulfilled，onRejected 异步执行
      // 所以用了 setTimeout 包裹下
      setTimeout(() => {
        try {
          const x = onResolved(this.value);
          resolutionProcedure(promise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  // Handle failure
  if (this.currentState === REJECTED) {
    promise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(this.value);
          resolutionProcedure(promise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  // Handle pending
  if (this.currentState === PENDING) {
    promise = new MyPromise((resolve, reject) => {
      this.resolveCallbackList.push(() => {
        try {
          const x = onResolved(this.value);
          resolutionProcedure(promise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      this.rejectCallbackList.push(() => {
        try {
          const x = onRejected(this.value);
          resolutionProcedure(promise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  return promise;
};

new MyPromise((resolve) => {
  resolve(3);
}).then(value => console.log(value));
