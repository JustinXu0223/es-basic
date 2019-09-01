/**
 * 函数参数的解构赋值
 */

function add([x, y]) {
  return x + y;
}
console.log(add([1, 2])); // 3

function move({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}
move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
