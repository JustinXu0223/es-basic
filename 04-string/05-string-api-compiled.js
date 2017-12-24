"use strict";

var x = 1;
var y = 2;
console.error(x + " + " + y + " = " + (x + y)); // "1 + 2 = 3"
console.error(x + " + " + y * 2 + " = " + (x + y * 2)); // "1 + 4 = 5"

var obj = { x: 1, y: 2 };
console.error("" + (obj.x + obj.y)); // 3

var fn = function fn() {
  return "Hello World";
};
console.log("foo " + fn() + " bar"); // foo Hello World bar

//# sourceMappingURL=05-string-api-compiled.js.map