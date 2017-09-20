const thunkify = require('thunkify');
const fs = require('fs');
const readFile = thunkify(fs.readFile);
const co = require('co');

const gen = function* () {
	const basic = yield readFile('1.txt','utf8');
	console.log(basic.toString());
	const package = yield readFile('2.txt','utf8');
	console.log(package.toString());
}

co(gen).then(function (){
	console.log('Generator 函数执行完成');
})