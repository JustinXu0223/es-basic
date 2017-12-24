"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 用途
 * 1. 返回多个值
 */

// 返回一个数组
var Array = function Array() {
  return [1, 2, 3];
};

var _Array = Array(),
    _Array2 = _slicedToArray(_Array, 3),
    a = _Array2[0],
    b = _Array2[1],
    c = _Array2[2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 返回一个对象
var Obj = function Obj() {
  return { foo: 11, bar: 12 };
};

var _Obj = Obj(),
    bar = _Obj.bar,
    foo = _Obj.foo;

console.log(foo); // 11
console.log(bar); // 12

//# sourceMappingURL=7-use-2-compiled.js.map