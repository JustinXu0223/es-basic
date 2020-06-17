function currying(fn, len = fn.length - 1, ...rest) {
  return function (...args) {
    // console.log('@args:', args)
    // console.log('@len:', len)
    rest.push(...args)
    // console.log('@rest:', rest)
    if (len > 0) {
      return currying(fn, len - 1, ...rest)
    }
    return fn(...rest);
  }
}
const sum = (...args) => args.reduce((x, y) => x + y, 0);
/*function sum(a, b, c, d) {// 函数可处理的参数个数为3
  return a + b + c + d;
}
console.log(sum.length)*/


console.log(currying(sum, 1)(2, 10)(3, 4))
console.log(currying(sum, 2)(2, 10)(3, 4)(1))
console.log(currying(sum, 3)(2)(10)(3)(4))
console.log(currying(sum, 4)(2)(10)(3)(4)(1))
// console.log(currying(sum, 3)(2, 10)(3, 4)(1, 4)(123))
