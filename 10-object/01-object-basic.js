const foo = 'bar';
let baz = {foo};
// console.log(baz); // {foo: "bar"}

var obj = {
    name: 'test1',
    method() {
        window.setTimeout(function () {
            console.log(this.name);
        }, 1000)
    }
};
// 等同于
var obj1 = {
    name: 'test2',
    method() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
};
obj.method();
obj1.method();
