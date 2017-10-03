let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5 使用数组原型的slice方法返回新数组
//const newArr = Array.prototype.slice.call(arrayLike);

// ES6 直接通过from
const newArr = Array.from(arrayLike);
console.error(newArr);

let arr = [1, 2, 3];
let arr1 = Array.from([1, 2, 3]);
console.log(Array.isArray(arr1)); // true
console.log(arr === arr1); // false
console.log(arr1); // // [1, 2, 3])

