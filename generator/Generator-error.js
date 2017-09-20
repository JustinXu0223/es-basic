function* gen(x){
	try {
		var y = yield x + 2;
	} catch (e){
		console.log(e);
	}
	return y;
}

var g = gen(1);
console.log(g.next());
g.throw('出错了');// 出错了
