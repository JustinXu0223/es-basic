'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nodeList = document.querySelectorAll('p');
var arr = [].concat(_toConsumableArray(nodeList));
console.log(nodeList);
console.log('------------');
console.log(arr);

//# sourceMappingURL=test-compiled.js.map