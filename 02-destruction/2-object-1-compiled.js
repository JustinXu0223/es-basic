"use strict";

/**
 * 对象解构.
 */
var _foo$test$bar = { foo: "aaa", test: 'haha', bar: "bbb" },
    bar = _foo$test$bar.bar,
    foo = _foo$test$bar.foo,
    test2 = _foo$test$bar.test2,
    test = _foo$test$bar.test;

console.log(bar); // "bbb"
console.log(foo); // "aaa"
console.log(test2); // undefined
console.log(test); // "haha"

//# sourceMappingURL=2-object-1-compiled.js.map