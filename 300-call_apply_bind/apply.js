/**
 * @component apply.js
 * @description apply 原理解析
 * @time 2018/6/14
 * @author JUSTIN XU
 */
function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

// call 和 apply 区别
Function.prototype.es3Apply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    // 获取参数
    const args = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push(`arr[${i}]`);
    }
    // 执行函数
    result = eval(`context.fn(${args})`);
  }
  delete context.fn;
  return result;
};

console.log(add.es3Apply(obj, [1, 'abc', '2'])); // 4abc
// console.log(add.apply(obj, [1, 2]));


Function.prototype.es6Apply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    if (!(arr instanceof Array)) throw new Error('params must be array');
    result = context.fn(...arr);
  }
  delete context.fn;
  return result;
};

console.error(add.es6Apply(obj, [1, 2]));
