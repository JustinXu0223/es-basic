'use strict';

function foo() {
    var _arguments = arguments;

    setTimeout(function () {
        console.log("args:", _arguments);
    }, 100);
}

foo(1, 2, 3, 4);
// args: { '0': 1, '1': 2, '2': 3, '3': 4 }

var func = function func() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return console.log(args);
};

func(1, 2, 3, 4); // [ 1, 2, 3, 4 ]

(function () {
    (function () {
        console.log(this.x);
    }).bind({ x: 'inner' })();
}).call({ x: 'outer' }); // inner
// ['outer']

(function () {
    var _this = this;

    (function () {
        return console.error(_this.x);
    }).bind({ x: 'inner' })();
}).call({ x: 'outer' }); // outer

//# sourceMappingURL=04-function-args-compiled.js.map