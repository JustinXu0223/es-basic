// const currying = fn =>
//   (arg, args = [arg]) =>
//     (!fn.length || args.length === fn.length ? fn(...args) : newArg => currying(fn)(newArg, [...args, newArg]));

function currying(fn) {
  return function (arg, args = [arg]) {
    console.log('@arg:', arg)
    console.log('@args:', args)
    if (!fn.length || args.length === fn.length) {
      return fn(...args);
    }
    return function (newArg) {
      console.log('@newArg:', newArg)
      return currying(fn)(newArg, [...args, newArg])
    }
  }
}
// const sum = (...args) => args.reduce((prev, curr) => prev + curr, 0);
function sum(a, b, c, d) {// 函数可处理的参数个数为3
  return a + b + c + d;
}

var add = currying(sum);

// const a = add(2, 10)(3, 4)(1, 4)(123)()
const a = add(2)(34)(1)(123)  // 只能单参数
console.log(a)
