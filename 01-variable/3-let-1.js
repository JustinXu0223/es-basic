function f1() {
    let a = 10;
    var a = 11; // SyntaxError: Identifier 'a' has already been declared
}
// 报错
function f2() {
    let a = 10;
    let a = 1;
}