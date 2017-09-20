function* f(i) {
	i++;
	yield i;
	i++;
	console.log('中间');
	yield i;
	return 'finish';
}
 for(let v of f(1)){
  console.log(v);
 }
// const g = f(1);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
function* helloWorldGenerator() {
	yield 'hello';
	yield 'hello2';
	return 'world';
}
/*function* gen(x){
	const y = yield x + 2;
	return y;
}
var g = gen(1);*/
// console.log(g.next()) // { value: 3, done: false }
// console.log(g.next()) // { value: undefined, done: true }
/*
for(let v of helloWorldGenerator()){
	console.log(v);
}*/


