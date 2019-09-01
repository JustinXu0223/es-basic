/**
 * @component setTimeout2
 * @description
 * @time 2018/9/28
 * @author JUSTIN XU
 */
setTimeout(() => {
  console.log(1);
}, 0);
new Promise(((resolve, reject) => {
  console.log(2);
  for (let a = 0; a < 10000; a++) {
    a === 9999 && resolve();
  }
  console.log(3);
})).then(() => {
  console.log(4);
});

console.log(5);
