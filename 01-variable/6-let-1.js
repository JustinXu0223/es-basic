function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();

{{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}}}};