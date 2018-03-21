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

let hash = {};
let config = [{
    name: 2,
    state: true,
    output: 'Y',
}, {
    name: 3,
    state: true,
    output: 'A',
}, {
    name: 5,
    state: true,
    output: 'S',
}, {
    name: 7,
    state: true,
    output: 'B',
}];

config = [...config, {
    name: 3,
    state: false,
    output: 'A',
}]
const newArr = config.reduceRight((item, next) => {
    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
    return item
}, []);

console.log(JSON.stringify(newArr));
