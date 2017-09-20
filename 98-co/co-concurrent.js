const thunkify = require('thunkify');
const fs = require('fs');
const readFile = thunkify(fs.readFile);
const co = require('co');

// 数组的写法
co(function* () {
	const res = yield [
		readFile('1.txt','utf8'),
		Promise.resolve(1),
		readFile('2.txt','utf8'),
		Promise.resolve(2),
	];
	console.log(res); // => [ '测试数据1', 1, '测试数据2', 2 ]
}).catch(onerror);

// 对象的写法
co(function* () {
	const res = yield {
		1: Promise.resolve(1),
		'readFile1': readFile('1.txt','utf8'),
		4: Promise.resolve(1),
		'readFile2': readFile('2.txt','utf8'),
	};
	console.log(res);  // => { '1': 1, '4': 1, readFile1: '测试数据1', readFile2: '测试数据2' }
}).catch(onerror);

function onerror(err) {
	console.error(err.stack);
}