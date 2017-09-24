function func(arg) {
    let arg; // SyntaxError: Identifier 'arg' has already been declared
}
function func(arg) {
    {
        let arg; // 不报错
    }
}