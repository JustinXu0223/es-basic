"use strict";

/**
 * 数值和布尔值的解构赋值
 */
var _ = 123,
    s1 = _.toString;

console.log(s1 === Number.prototype.toString); // true

var _true = true,
    s2 = _true.toString;

console.log(s2 === Boolean.prototype.toString); // true

//# sourceMappingURL=4-boolean-1-compiled.js.map