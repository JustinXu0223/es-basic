// ES5的写法
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

// ES6的写法
const arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
arr3.push(...arr4);
console.log(arr3); // [ 0, 1, 2, 3, 4, 5 ]

// ES5
const data = new (Date.bind.apply(Date, [null, 2017, 10, 1]))();
console.log(data); // 2017-10-31T16:00:00.000Z

// ES6
const data1 = new Date(...[2017, 10, 1]);
console.log(data1); // 2017-10-31T16:00:00.000Z
