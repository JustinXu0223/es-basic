'use strict';

// const source1 = { b: 2 };
// const source2 = { c: 3, b: '第二个' };
// const target= Object.assign({}, source1, source2);
// console.log(target);
// { b: '第二个', c: 3 }

var c = Object.assign({ b: 'c' }, Object.defineProperty({}, 'invisible', {
	enumerable: false,
	value: 'hello'
}));
console.log(c);
// { b: 'c' }

//# sourceMappingURL=02-object-assign-compiled.js.map