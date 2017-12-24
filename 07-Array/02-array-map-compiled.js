'use strict';

var arrayLike = {
    '0': '1',
    '1': '2',
    '2': '3',
    length: 3
};
console.log(Array.from(arrayLike, function (x) {
    return x * x;
}));
// [1, 4, 9]

// 等同于
console.log(Array.from(arrayLike).map(function (x) {
    return x * x;
}));
// [1, 4, 9]
console.log(Array.from([1, 2, 3], function (x) {
    return x * x;
}));
// [1, 4, 9]

//# sourceMappingURL=02-array-map-compiled.js.map