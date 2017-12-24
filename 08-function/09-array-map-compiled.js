'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
var arr = [].concat(_toConsumableArray(map.keys()));
console.log(arr); // [ 1, 2, 3 ]

var go = /*#__PURE__*/regeneratorRuntime.mark(function go() {
    return regeneratorRuntime.wrap(function go$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, go, this);
});
var arr1 = [].concat(_toConsumableArray(go()));
console.log(arr1); // [1, 2, 3]

//# sourceMappingURL=09-array-map-compiled.js.map