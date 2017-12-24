'use strict';

var arr1 = ['a', 'b'];
var arr2 = ['c'];

// ES5
var newArr = arr1.concat(arr2);
console.log(newArr); // [ 'a', 'b', 'c' ]

// ES6

var newArr1 = [].concat(arr1, arr2);
console.log(newArr1); // [ 'a', 'b', 'c' ]

//# sourceMappingURL=06-array-concat-compiled.js.map