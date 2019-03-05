/**
 * @component setTimeout.js
 * @description 定时器
 * @time 2018/9/28
 * @author JUSTIN XU
 */
for(var a = 0; a < 5; a ++) {
  setTimeout(function () {
    console.log(new Date, a);
  }, 1000)
}
console.log(new Date, a);
// 2018-09-28T02:15:35.748Z 5
// 2018-09-28T02:15:36.752Z 5
// 2018-09-28T02:15:36.752Z 5
// 2018-09-28T02:15:36.752Z 5
// 2018-09-28T02:15:36.752Z 5
// 2018-09-28T02:15:36.752Z 5
