"use strict";

/*** length 属性
 */
console.log(function (a, b) {}.length); // 2
console.log(function () {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
}.length); // 0
console.log(function (a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
}.length); // 2
console.log(function () {}.length); // 0

//# sourceMappingURL=01-func-length-compiled.js.map