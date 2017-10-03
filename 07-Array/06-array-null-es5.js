console.log(0 in Array(3)); // false
console.log(0 in [undefined,undefined]); // true

// forEach方法
[,'a'].forEach((x,i) => console.warn(i)); // 1
// filter方法
console.log(['a',,'b'].filter(x => true)); // ['a','b']
// every方法
console.log([,'a'].every(x => x==='a')); // true
// some方法
console.log([,'a'].some(x => x !== 'a')); // false
// map方法
console.log([,'a'].map(x => 1)); // [,1]
// join方法
console.log([,'a',undefined,null].join('#')); // "#a##"
// toString方法
console.log([,'a',undefined,null].toString()); // ",a,,"