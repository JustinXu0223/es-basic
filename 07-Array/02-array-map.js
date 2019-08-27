const arrayLike = {
  0: '1',
  1: '2',
  2: '3',
  length: 3,
};
console.log(Array.from(arrayLike, x => x * x));
// [1, 4, 9]

// 等同于
console.log(Array.from(arrayLike).map(x => x * x));
// [1, 4, 9]
console.log(Array.from([1, 2, 3], x => x * x));
// [1, 4, 9]
