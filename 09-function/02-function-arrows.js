/** * 箭头
 */
// 基本用法 箭头返回有括号返回必加return
const func = () => 5;

// 等同于上面返回5
const func1 = () => 5;

// 当一个参数时候,形参括号可省略
const func2 = x => x * 2;

// 如果箭头函数返回的是对象,可以用括号包含对象的方式解决
const func3 = x => ({ x: x * 2, y: '测试' });

// 当箭头函数的代码块部分多于一条语句,必须使用大括号
const func4 = (x) => { x++; return x * 2; };

// 箭头函数配合变量解构使用
const func5 = ({ name, age }) => `name:${name},age: ${age}`;

// 箭头函数配合rest参数
const func6 = (...nums) => nums;

console.log(func()); // 5
console.log(func1()); // 5
console.log(func2(3)); // 6
console.log(func3(3)); // { x: 6, y: '测试' }
console.log(func4(3)); // 8
console.log(func5({ name: '张三', age: '18' })); // name:张三,age: 18
console.log(func6(1, 2, 3, 4, 5)); // // [1,2,3,4,5]
