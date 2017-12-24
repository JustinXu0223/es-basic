"use strict";

/** 尾调用
 */
// 情况一 调用函数g后 还有返回操作
function f(x) {
    var y = g(x);
    return y;
}
// 情况二 调用函数g 还有其他操作
function f(x) {
    return g(x) + 1;
}
// 情况三 调用函数g不是最后一步
function f(x) {
    g(x);

    // 等同于
    g(x);
    return undefined;
}

function f() {
    var m = 1;
    var n = 2;
    return g(m + n);
}
f();
// 等同于
function f() {
    return g(3);
}
f();
// 等同于
g(3);

//# sourceMappingURL=06-function-tailCall-compiled.js.map