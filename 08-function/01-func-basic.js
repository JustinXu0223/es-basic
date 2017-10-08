/*** 默认值
* */

/*var func = function(a,b){
    var a = a || '默认a';
    if (typeof b === 'undefined') b = '默认b';
    console.log(a+' and '+b);
};*/
const func = (a = '默认a',b = '默认b') =>{
    console.log(a+' and '+b);
};

func(); // 默认a and 默认b
func('赋值a'); // 赋值a and 默认b
func('赋值a',null); // 赋值a and null
func(null,'赋值b'); // null and 赋值b