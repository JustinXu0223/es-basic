/**
 * 数值和布尔值的解构赋值
 */
const {toString: s1} = 123;
console.log(s1 === Number.prototype.toString); // true

const {toString: s2} = true;
console.log(s2 === Boolean.prototype.toString); // true
