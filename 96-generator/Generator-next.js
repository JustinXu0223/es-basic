function* gen(x) {
  const y = yield x + 2;
  return y;
}

const g = gen(1);
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }
