/* const foo = {};
foo.prop = 123;
// 123
foo = {}; // TypeError: "foo" is read-only */

// const foo = Object.freeze({});
// // 常规模式时，下面一行不起作用；// 严格模式时，该行会报错
// foo.prop = 123;

var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key]);
    }
  });
};
