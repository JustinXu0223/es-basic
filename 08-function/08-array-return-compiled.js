"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var dateFields = [2017, 10, 1];
var d = new (Function.prototype.bind.apply(Date, [null].concat(dateFields)))();
console.log(d);

var str = "hello";
// ES5 的处理方式
var chars = str.split("");
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

// ES6 的处理方式
var b = [].concat(_toConsumableArray(str));
console.log(b); // [ "h", "e", "l", "l", "o" ]

//# sourceMappingURL=08-array-return-compiled.js.map