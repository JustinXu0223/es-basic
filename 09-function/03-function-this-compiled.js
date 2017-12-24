'use strict';

var name = '韩梅梅';

var obj = {
    name: '张三',
    func: function func() {
        //setTimeout(function(){
        console.log(this.name);
        //},1000);
    }
};
//obj.func.call({name: '哈哈'});
function func(_ref) {
    var name = _ref.name,
        age = _ref.age;

    this.name = name;
    this.age = age;
    this.print = function () {
        var _this = this;

        setTimeout(function () {
            console.log(_this.name + ',' + _this.age);
        }, 1000);
    };
}

var fn = new func({ name: '张三', age: 18 });
fn.print(); // 张三,18
fn.print.call({ name: '李四', age: 28 }); // 李四,28

function foo() {
    var _this2 = this;

    setTimeout(function () {
        console.log("id:", _this2.id);
    }, 100);
}
foo.call({ id: 42 });

//# sourceMappingURL=03-function-this-compiled.js.map