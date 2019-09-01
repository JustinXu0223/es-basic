/**
 * 用途
 * 1. 遍历map
 */
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (const [key, value] of map) {
  console.log(`${key} is ${value}`);
}
// first is hello
// second is world
