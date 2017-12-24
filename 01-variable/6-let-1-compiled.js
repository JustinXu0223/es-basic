'use strict';

function f1() {
    var n = 5;
    if (true) {
        var _n = 10;
    }
    console.log(n); // 5
}
f1();

{
    {
        {
            {
                var insane = 'Hello World';
                {
                    var _insane = 'Hello World';
                }
            }
        }
    }
};

//# sourceMappingURL=6-let-1-compiled.js.map