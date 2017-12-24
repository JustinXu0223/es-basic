'use strict';

/**
 * 数组解构
 */

var _ref = [],
    foo1 = _ref[0];
var _ref2 = [1],
    bar = _ref2[0],
    foo2 = _ref2[1];


console.log(foo1); // undefined
console.log(bar); // 1
console.log(foo2); // undefined

var _ref3,
    foo3 = _ref3 === undefined ? '默认值' : _ref3,
    _ref4 = null,
    foo4 = _ref4 === undefined ? '不生效默认值' : _ref4;

console.log(foo3); // 默认值
console.log(foo4); // null

//# sourceMappingURL=1-array-2-compiled.js.map