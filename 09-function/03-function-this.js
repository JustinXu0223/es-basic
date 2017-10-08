const name = '韩梅梅';

let obj = {
    name: '张三',
    func: function(){
        //setTimeout(function(){
            console.log(this.name);
        //},1000);
    }
};
//obj.func.call({name: '哈哈'});
function func ({name, age}) {
    this.name = name;
    this.age = age;
    this.print = function(){
        setTimeout(() => {
            console.log(`${this.name},${this.age}`);
        },1000);
    }
}

const fn = new func({name:'张三',age: 18});
fn.print(); // 张三,18
fn.print.call({name:'李四',age: 28}); // 李四,28

function foo() {
    setTimeout(() => {
        console.log("id:", this.id);
    },100);
}
foo.call( { id: 42 } );
