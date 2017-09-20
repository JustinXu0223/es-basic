const thunkify = require('thunkify');
const f = (a, b, callback) =>{
	let sum = a + b;
	callback.call(this,null,sum);
	sum++;
	callback.call(this,null,sum);
}


f(1,2,function(err,data){
	console.error(data);
})

const ft = thunkify(f);
ft(1, 2)((err,data)=>{
	console.log(data);
});
//3