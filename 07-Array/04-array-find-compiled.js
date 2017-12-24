"use strict";

var a = [1, 4, -5, 10].find(function (n) {
  return n < 0;
});
console.log(a); // -5

var b = [1, 4, -5, 10].find(function (value, index, arr) {
  return index == 2;
});
console.log(b); // -5

var c = [1, 4, -5, 10].findIndex(function (n) {
  return n < 0;
});
console.log(c); // 2（下标）

//# sourceMappingURL=04-array-find-compiled.js.map