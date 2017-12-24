'use strict';

/*** 箭头
 */
// 基本用法 箭头返回有括号返回必加return
var func = function func() {
  return 5;
};

// 等同于上面返回5
var func1 = function func1() {
  return 5;
};

// 当一个参数时候,形参括号可省略
var func2 = function func2(x) {
  return x * 2;
};

// 如果箭头函数返回的是对象,可以用括号包含对象的方式解决
var func3 = function func3(x) {
  return { x: x * 2, y: '测试' };
};

// 当箭头函数的代码块部分多于一条语句,必须使用大括号
var func4 = function func4(x) {
  x++;return x * 2;
};

// 箭头函数配合变量解构使用
var func5 = function func5(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return 'name:' + name + ',age: ' + age;
};

// 箭头函数配合rest参数
var func6 = function func6() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums;
};

console.log(func()); // 5
console.log(func1()); // 5
console.log(func2(3)); // 6
console.log(func3(3)); // { x: 6, y: '测试' }
console.log(func4(3)); // 8
console.log(func5({ name: '张三', age: '18' })); // name:张三,age: 18
console.log(func6(1, 2, 3, 4, 5)); // // [1,2,3,4,5]

//# sourceMappingURL=02-function-arrows-compiled.js.map