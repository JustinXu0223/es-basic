const foo = 'bar';
let baz = {foo};
console.log(baz); // {foo: "bar"}

var obj = {
    method() {
        return "Hello!";
    }
};
// 等同于
var obj = {
    method: ()=> {
        return "Hello!";
    }
};
