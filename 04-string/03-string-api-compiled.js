'use strict';

console.warn('x'.repeat(3)); // "xxx"
console.warn('Hello'.repeat(2)); // "HelloHello"
console.warn('na'.repeat(0)); // ""

console.warn('na'.repeat(2.9)); // "nana";
console.warn('na'.repeat(-2.9)); // RangeError: Invalid count value;
console.warn('na'.repeat(Infinity)); // RangeError: Invalid count value;
console.warn('na'.repeat(-0.9)); // "";
console.warn('ha'.repeat('2')); // haha;

//# sourceMappingURL=03-string-api-compiled.js.map