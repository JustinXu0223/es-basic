"use strict";

// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

// ES6的写法
var arr3 = [0, 1, 2];
var arr4 = [3, 4, 5];
arr3.push.apply(arr3, arr4);
console.log(arr3); // [ 0, 1, 2, 3, 4, 5 ]

// ES5
var data = new (Date.bind.apply(Date, [null, 2017, 10, 1]))();
console.log(data); // 2017-10-31T16:00:00.000Z

// ES6
var data1 = new (Function.prototype.bind.apply(Date, [null].concat([2017, 10, 1])))();
console.log(data1); // 2017-10-31T16:00:00.000Z

//# sourceMappingURL=05-func-link-compiled.js.map