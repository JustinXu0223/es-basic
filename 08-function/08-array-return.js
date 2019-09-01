const dateFields = [2017, 10, 1];
const d = new Date(...dateFields);
console.log(d);

const str = 'hello';
// ES5 的处理方式
const chars = str.split('');
console.log(chars);// [ 'h', 'e', 'l', 'l', 'o' ]

// ES6 的处理方式
const b = [...str];
console.log(b); // [ "h", "e", "l", "l", "o" ]
