/**
 * 用途
 * 1. 返回多个值
 */

// 返回一个数组
const Array = () => [1, 2, 3];

const [a, b, c] = Array();
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 返回一个对象
const Obj = () => ({ foo: 11, bar: 12 });
const { bar, foo } = Obj();

console.log(foo); // 11
console.log(bar); // 12
