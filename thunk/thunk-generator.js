const thunkify = require('thunkify');
const fs = require('fs');
const readFile = thunkify(fs.readFile);

const gen = function* () {
	const basic = yield readFile('thunk-basic.js','utf8');
	console.log(basic.toString());
	const package = yield readFile('package.json','utf8');
	console.log(package.toString());
}

/*
const g = gen();
const doNext = g.next();

doNext.value((err,data)=>{
	if(err) throw err;
	const doNext2 = g.next(data);
	doNext2.value((err,data)=>{
		if(err) throw err;
		g.next(data);
	})
});
*/

const run = fn => {
	const gen = fn();
	
	const next = (err, data) => {
		const result = gen.next(data);
		if (result.done) return;
		result.value(next);
	};
	next();
};

run(gen);

