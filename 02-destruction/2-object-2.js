/**
 * 对象解构.
 */

const obj = { first: 'hello', last: 'world' };
const { first: f, last: l } = obj;
console.log(first); // ReferenceError: first is not defined
console.log(f); // hello
