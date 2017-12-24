"use strict";

var _console, _console2;

(_console = console).log.apply(_console, [1, 2, 3]);
// 1 2 3
var a = [2, 3, 4];
(_console2 = console).log.apply(_console2, [1].concat(a, [5]));
// 1 2 3 4 5

// ES5的写法
function func(x, y, z) {
    console.log(x + "-" + y + "-" + z);
}
var args = [0, 1, 2];
// null undefined指向window
func.apply(null, args); // 0-1-2

// ES6的写法
var func1 = function func1(x, y, z) {
    console.log(x + "-" + y + "-" + z + ";");
};
var args1 = [0, 1, 2];
func1.apply(undefined, args1); // 0-1-2;

//# sourceMappingURL=04-func-spread-compiled.js.map