const a= [1,2,3,4];
const b= [5,6];
const c= Object.assign(a, b);
console.log(a); // [ 5, 6, 3, 4 ]
console.log(a===c); // true

const DEFAULTS = {
	logLevel: 0,
	outputFormat: 'html'
};
function processContent(options) {
	let options = Object.assign({}, DEFAULTS, options);
}
