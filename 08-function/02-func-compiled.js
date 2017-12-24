'use strict';

var x = 1;
var f = function f(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    console.log(y);
};

f(2); // 2

var func = function func() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
    return function () {
        var x = 2;
        console.log(y);
    }();
};
func(); //1

var foo = 'outer';
function bar() {
    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
        return foo;
    };

    var foo = 'inner';
    console.log(func()); // outer
}
bar();

//# sourceMappingURL=02-func-compiled.js.map