const x = 1;
const f = m => m * 2;

console.log(f(x + 5));

// 等同于

const thunk = () => x + 5;

const fn = thunk => thunk() * 2;

console.log(fn(thunk));
