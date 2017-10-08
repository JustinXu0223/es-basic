let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
let arr = [...map.keys()];
console.log(arr);  // [ 1, 2, 3 ]

var go = function*(){
    yield 1;
    yield 2;
    yield 3;
};
const arr1 = [...go()];
console.log(arr1); // [1, 2, 3]