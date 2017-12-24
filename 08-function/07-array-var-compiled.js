"use strict";

var first = 1,
    rest = [2, 3, 4, 5];

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

var _ref = [],
    first1 = _ref[0],
    rest1 = _ref.slice(1);

console.log(first1); // undefined
console.log(rest1); // []

var _ref2 = ["foo"],
    first2 = _ref2[0],
    rest2 = _ref2.slice(1);

console.log(first2); // "foo"
console.log(rest2); // []

//# sourceMappingURL=07-array-var-compiled.js.map