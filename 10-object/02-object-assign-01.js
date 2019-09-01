
const a = Object.assign({}, { a: 'b' }, { [Symbol('c')]: 'd' });
console.log(a);
// { a: 'b' }

const target = { a: { b: 'c', d: 'e' } };
const source = { a: { b: 'hello' } };
const c = Object.assign({}, target, source);
console.log(c);
// { a: { b: 'hello' } }
// 解决方案,对应结构嵌套
const c2 = Object.assign({}, source, {
  a: {
    b: target.a.b,
    d: target.a.d,
  },
});
console.log(c2);
// { a: { b: 'c', d: 'e' } }
