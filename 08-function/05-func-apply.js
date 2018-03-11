function Student(name) {
    if (!name) return;
    this.name = name;
}
Student.prototype = {
    name : '我是张胜男',
    age: 15
}
var a = new Student();
console.error(a.toString());