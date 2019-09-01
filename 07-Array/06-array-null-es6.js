
const arr = [1, , 3];
console.log(Array.from(arr)); // [ 1, undefined, 3 ]
console.log([...arr]); // [ 1, undefined, 3 ]

for (const value of arr) {
  console.log(value); // 1, undefined, 3
}
