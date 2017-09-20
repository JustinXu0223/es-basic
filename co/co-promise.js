const fs = require('fs');

const readFile = (fileName) =>{
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err) reject(err);
			resolve(data);
		})
	})
}

const gen = function* () {
	const basic = yield readFile('1.txt','utf8');
	console.log(basic.toString());
	const package = yield readFile('2.txt','utf8');
	console.log(package.toString());
};

// 手动执行
/*const g = gen();
g.next().value.then((data) => {
	g.next(data).value.then((data) => {
		g.next(data);
	});
});*/

const run = gen => {
	const g = gen();
	
	function next (data) {
		const result = g.next(data);
		if(result.done) return result.value;
		
		result.value.then(data => {
			next(data);
		})
	}
	next();
};

run(gen);