/**
 * @component call.js
 * @description call 原理解析
 * @time 2018/6/14
 * @author JUSTIN XU
 */

function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

// console.error(add.call(obj, 3, 4)); // 10
// add.call(o, 5, 7)使add函数中的this指向o对象，
// 并且执行了add函数。依据上例把o对象改造成如下：

const o = {
  a: 1,
  b: 2,
  add(c, d) {
    return this.a + this.b + c + d;
  },
};

// console.log(o.add(3, 4));

// 给o对象添加一个add属性，这个时候 this 就指向了 o，
// o.add(5,7)得到的结果和add.call(o, 5, 6)相同。
// 但是给对象o添加了一个额外的add属性，这个属性我们是不需要的，所以可以使用delete删除它。

// 所以我们使用js实现call方法的步骤可以分为：

// 1. 将函数设为对象的属性
// o.fn = bar
// 2. 执行该函数
// o.fn()
// 3. 删除该函数
// delete o.fn

// ES3 call 实现
Function.prototype.es3Call = function (context) {
  const content = context || window;
  content.fn = this;
  // var arr = Array.prototype.slice.call(arguments, 1);
  // console.log(JSON.stringify(arr));
  const args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`);
  }
  const result = eval(`content.fn(${args})`);
  delete content.fn;
  return result;
};

// console.error(add.es3Call(obj, 3, 4));
// console.log(add.es3Call({ a: 3, b: 9 }, {xx: 1}, 4)); // 12[object Object]4

// ES6 call 实现
Function.prototype.es6Call = function (context) {
  var context = context || window;
  context.fn = this;
  const args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`);
  }
  const result = context.fn(...args);
  return result;
};

console.error(add.es6Call(obj, 3, 4));
console.log(add.es3Call({ a: 3, b: 9 }, { xx: 1 }, 4)); // 12[object Object]4
