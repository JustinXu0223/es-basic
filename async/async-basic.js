const fs = require('fs');

const readFile =  (fileName) =>{
	return new Promise(function (resolve, reject){
		fs.readFile(fileName, function(error, data){
			if (error) reject(error);
			resolve(data);
		});
	});
};

const asyncReadFile = async function() {
	const basic = await readFile('1.txt','utf8');
	const package = await readFile('2.txt','utf8');
	console.log(basic.toString());
	console.log(package.toString());
}

const g = asyncReadFile();

