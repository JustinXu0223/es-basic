function* gen(x){
	let y = yield x + 2;
	return y;
}

let g = gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }


