function foo() {}
console.log(foo.name); // "foo"

const func1 = () => {};
// 只看ES6的情况
console.log(func1.name); // "func1"

// 构造函数实例
const { name } = new Function();
console.log(name); // anonymous

const name1 = foo.bind({}).name;
console.log(name1); // "bound foo"

const name2 = (function () {}).bind({}).name;
console.log(name2); // "bound "
