'use strict';

console.log(0 in Array(3)); // false
console.log(0 in [undefined, undefined]); // true

// forEach方法
[, 'a'].forEach(function (x, i) {
  return console.warn(i);
}); // 1
// filter方法
console.log(['a',, 'b'].filter(function (x) {
  return true;
})); // ['a','b']
// every方法
console.log([, 'a'].every(function (x) {
  return x === 'a';
})); // true
// some方法
console.log([, 'a'].some(function (x) {
  return x !== 'a';
})); // false
// map方法
console.log([, 'a'].map(function (x) {
  return 1;
})); // [,1]
// join方法
console.log([, 'a', undefined, null].join('#')); // "#a##"
// toString方法
console.log([, 'a', undefined, null].toString()); // ",a,,"

//# sourceMappingURL=06-array-null-es5-compiled.js.map