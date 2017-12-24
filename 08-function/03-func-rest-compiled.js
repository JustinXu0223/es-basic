"use strict";

var arr = [14, 3, 77];

// ES5的写法
console.log(Math.max.apply(null, arr)); // 77
console.log(Math.min.apply(null, arr)); // 3
// ES6的写法
console.log(Math.max.apply(Math, arr)); // 77
console.log(Math.min.apply(Math, arr)); // 3

//# sourceMappingURL=03-func-rest-compiled.js.map