'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 用途
 * 1. 函数参数的定义
 */

// 参数是一组有次序的值
var f1 = function f1(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        x = _ref2[0],
        y = _ref2[1],
        z = _ref2[2];

    console.log(x + ';' + y + ';' + z);
};
f1([1, 2, 3]); // 1;2;3

// 参数是一组无次序的值
var f2 = function f2(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        z = _ref3.z;

    console.log(x + ';' + y + ';' + z);
};
f2({ z: 3, y: 2, x: 1 }); // 1;2;3

//# sourceMappingURL=7-use-3-compiled.js.map