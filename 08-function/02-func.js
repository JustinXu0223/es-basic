const x = 1;
const f = (x, y = x) => {
  console.log(y);
};

f(2); // 2

const func = (y = x) => {
  let x = 2;
  console.log(y);
};
func(); // 1

const foo = 'outer';
function bar(func = x => foo) {
  let foo = 'inner';
  console.log(func()); // outer
}
bar();
