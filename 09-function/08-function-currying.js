/** * 柯里化
* */

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}
const func = currying(tailFactorial, 1);

console.log(func(5)); // 120

function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
console.log(factorial(5)); // 120
