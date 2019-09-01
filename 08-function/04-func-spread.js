console.log(...[1, 2, 3]);
// 1 2 3
const a = [2, 3, 4];
console.log(1, ...a, 5);
// 1 2 3 4 5

// ES5的写法
function func(x, y, z) {
  console.log(`${x}-${y}-${z}`);
}
const args = [0, 1, 2];
// null undefined指向window
func.apply(null, args); // 0-1-2

// ES6的写法
const func1 = (x, y, z) => {
  console.log(`${x}-${y}-${z};`);
};
const args1 = [0, 1, 2];
func1(...args1); // 0-1-2;
