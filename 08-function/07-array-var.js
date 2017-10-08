const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

const [first1, ...rest1] = [];
console.log(first1); // undefined
console.log(rest1); // []

const [first2, ...rest2] = ["foo"];
console.log(first2);// "foo"
console.log(rest2); // []