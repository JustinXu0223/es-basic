const x = 1;
const y = 2;
console.error(`${x} + ${y} = ${x + y}`); // "1 + 2 = 3"
console.error(`${x} + ${y * 2} = ${x + y * 2}`); // "1 + 4 = 5"

const obj = {x: 1, y: 2};
console.error(`${obj.x + obj.y}`);// 3

const fn = () => "Hello World";
console.log(`foo ${fn()} bar`);// foo Hello World bar
