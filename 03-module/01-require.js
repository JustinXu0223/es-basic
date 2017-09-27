const lib = require('./01-require-lib');
const number = lib.number;
const incCounter = lib.incCounter;

console.log(number); // 3
incCounter();
console.log(number); // 3