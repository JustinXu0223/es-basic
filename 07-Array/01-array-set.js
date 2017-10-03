//
const arr = ['张三','张三','三张三']
let set = new Set(arr); // set 自带去重
// Set { '张三', '三张三' }
console.log(set);
console.error(Array.from(set)); // [ '张三', '三张三' ]

// 字符串 具有length
let str = 'hello';
console.log(str);
console.warn(Array.from(str)); // [ 'h', 'e', 'l', 'l', 'o' ]
