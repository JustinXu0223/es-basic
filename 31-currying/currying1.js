function currying(fn, i = 0, ...argList) {
  return function (...args) {
    console.log(fn.length)
    console.log(args)
    argList.push(...args)
    if (i < fn.length) {
      return currying(fn, i + 1, ...argList)
    }
    console.log('@argList:', argList)
    return fn.apply(null, argList)
  }
}

function sum(a, b, c, d) {// 函数可处理的参数个数为3
  return a + b + c + d;
}

var add = currying(sum);

const a = add(2, 10)(3, 4)(1, 4)(123)()
console.log(a)
