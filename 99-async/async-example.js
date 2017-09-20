const fetch = require('node-fetch');

// 测试async
async function sendApply() {
	const result = await fetch('https://api.github.com/users/github');
	return result;
}

sendApply().then(result => result.json())
	.then(data =>{
		console.log(data['avatar_url']);
		// https://avatars1.githubusercontent.com/u/9919?v=4
	});