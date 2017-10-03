// of 方法
console.log(Array.of(1,2)); // [ 1, 2 ]
console.log(Array.of(1,2,3)); // [ 1, 2, 3 ]

// Array 构造缺陷
console.log(Array()); // []
console.log(Array(2)); // [ ,  ]
console.log(Array(2,3)); // [ 2, 3 ]
console.log(Array(3,11,8)); // [ 3, 11, 8 ]
