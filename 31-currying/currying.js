function add(...args1) {
  function fn (...args2) {
    args1.push(...args2)
    return fn
  }
  fn.toString = function () {
    return args1.reduce((x,y) => x+y)
  }
  return fn
}
const a = add(2, 10)(3, 4)().toString()
console.log(a)
