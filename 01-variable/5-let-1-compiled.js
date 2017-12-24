"use strict";

var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = "hello world";
    }
}f(); // undefined

//# sourceMappingURL=5-let-1-compiled.js.map