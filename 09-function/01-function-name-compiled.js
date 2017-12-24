"use strict";

function foo() {}
console.log(foo.name); // "foo"

var func1 = function func1() {};
// 只看ES6的情况
console.log(func1.name); // "func1"

// 构造函数实例
var name = new Function().name;
console.log(name); // anonymous

var name1 = foo.bind({}).name;
console.log(name1); // "bound foo"

var name2 = function () {}.bind({}).name;
console.log(name2); // "bound "

//# sourceMappingURL=01-function-name-compiled.js.map