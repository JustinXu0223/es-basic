const lib = require('./01-require-lib');

const { number } = lib;
const { incCounter } = lib;

console.log(number); // 3
incCounter();
console.log(number); // 3
