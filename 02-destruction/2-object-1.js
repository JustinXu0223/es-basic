/**
 * 对象解构.
 */
const { bar, foo, test2, test } = { foo: "aaa", test: 'haha',bar: "bbb" };
console.log(bar);// "bbb"
console.log(foo);// "aaa"
console.log(test2);// undefined
console.log(test);// "haha"