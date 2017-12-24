'use strict';

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5 使用数组原型的slice方法返回新数组
//const newArr = Array.prototype.slice.call(arrayLike);

// ES6 直接通过from
var newArr = Array.from(arrayLike);
console.error(newArr);

var arr = [1, 2, 3];
var arr1 = Array.from([1, 2, 3]);
console.log(Array.isArray(arr1)); // true
console.log(arr === arr1); // false
console.log(arr1); // // [1, 2, 3])

//# sourceMappingURL=01-array-from-compiled.js.map