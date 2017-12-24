'use strict';

/**
 * 对象解构.
 */
var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var _node$loc$start = node.loc.start,
    line = _node$loc$start.line,
    c = _node$loc$start.column,
    _node$loc$start$test = _node$loc$start.test,
    test = _node$loc$start$test === undefined ? '默认值' : _node$loc$start$test;

console.log(line); // 1
console.log(c); // 5
console.log(test); // '默认值'
console.log(loc); // error: loc is undefined
console.log(start); // error: start is undefined

var _baz = { baz: 'baz' },
    bar = _baz.foo.bar;

//# sourceMappingURL=2-object-3-compiled.js.map