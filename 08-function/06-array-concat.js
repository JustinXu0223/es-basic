var arr1 = ['a', 'b'];
var arr2 = ['c'];

// ES5
var newArr = arr1.concat(arr2);
console.log(newArr); // [ 'a', 'b', 'c' ]

// ES6

const newArr1 = [...arr1, ...arr2];
console.log(newArr1); // [ 'a', 'b', 'c' ]