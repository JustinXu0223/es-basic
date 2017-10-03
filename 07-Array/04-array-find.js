const a = [1, 4, -5, 10].find( n => n < 0);
console.log(a); // -5

const b = [1, 4, -5, 10].find( (value,index,arr) => index == 2);
console.log(b); // -5

const c = [1, 4, -5, 10].findIndex( n => n < 0);
console.log(c); // 2（下标）