const arr = [1, 2, 3];

console.log(arr.includes(3, 3)); // false
console.log(arr.includes(3)); // true
console.log(arr.includes(3, -1)); // true

console.error([NaN].indexOf(NaN)); // -1
console.error([NaN].includes(NaN)); // true
