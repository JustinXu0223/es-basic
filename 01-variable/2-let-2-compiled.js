'use strict';

var tmp = 123;
if (true) {
    _tmp = 'abc'; // ReferenceError: tmp is not defined
    var _tmp = void 0;
}

//# sourceMappingURL=2-let-2-compiled.js.map