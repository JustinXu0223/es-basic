'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = Object.assign({}, { a: 'b' }, _defineProperty({}, Symbol('c'), 'd'));
console.log(a);
// { a: 'b' }

var target = { a: { b: 'c', d: 'e' } };
var source = { a: { b: 'hello' } };
var c = Object.assign({}, target, source);
console.log(c);
// { a: { b: 'hello' } }
// 解决方案,对应结构嵌套
var c2 = Object.assign({}, source, {
	a: {
		b: target.a.b,
		d: target.a.d
	}
});
console.log(c2);
// { a: { b: 'c', d: 'e' } }

//# sourceMappingURL=02-object-assign-01-compiled.js.map