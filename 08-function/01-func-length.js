/*** length 属性
 */
console.log((function(a,b){}).length); // 2
console.log((function(a = 5){}).length); // 0
console.log((function(a, b, c = 5){}).length); // 2
console.log((function(...args){}).length); // 0
