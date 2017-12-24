'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*const foo = {};
foo.prop = 123;
// 123
foo = {}; // TypeError: "foo" is read-only*/

//const foo = Object.freeze({});
//// 常规模式时，下面一行不起作用；// 严格模式时，该行会报错
//foo.prop = 123;

var constantize = function constantize(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(function (key, value) {
        if (_typeof(obj[key]) === 'object') {
            constantize(obj[key]);
        }
    });
};

//# sourceMappingURL=8-const-1-compiled.js.map