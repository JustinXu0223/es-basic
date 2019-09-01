/**
 * 对象解构.
 */
const node = {
  loc: {
    start: {
      line: 1,
      column: 5,
    },
  },
};
const { loc: { start: { line, column: c, test = '默认值' } } } = node;
console.log(line); // 1
console.log(c); // 5
console.log(test); // '默认值'
console.log(loc); // error: loc is undefined
console.log(start); // error: start is undefined

const { foo: { bar } } = { baz: 'baz' };
