'use strict';

/*** 默认值
* */

/*var func = function(a,b){
    var a = a || '默认a';
    if (typeof b === 'undefined') b = '默认b';
    console.log(a+' and '+b);
};*/
var func = function func() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '默认a';
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '默认b';

    console.log(a + ' and ' + b);
};

func(); // 默认a and 默认b
func('赋值a'); // 赋值a and 默认b
func('赋值a', null); // 赋值a and null
func(null, '赋值b'); // null and 赋值b

//# sourceMappingURL=01-func-basic-compiled.js.map