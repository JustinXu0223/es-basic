/**
 * 数组解构
 */

const [foo1] = [];
const [bar, foo2] = [1];

console.log(foo1); // undefined
console.log(bar);  // 1
console.log(foo2); // undefined

const [foo3 = '默认值',foo4 = '不生效默认值'] = [,null];

console.log(foo3); // 默认值
console.log(foo4); // null


