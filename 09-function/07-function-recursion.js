/*** 尾递归
* */

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

function factorials(n, total) {
    if (n === 1) return total;
    return factorials(n - 1, n* total);
}

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}
function foo(n) {
    return tailFactorial(n, 1);
}
console.log(factorials(5,1)); // 120

console.log(foo(5)); // 120