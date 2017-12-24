'use strict';

/*** 与解构配合
* */

var fetch = function fetch(url) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$body = _ref.body,
        body = _ref$body === undefined ? '' : _ref$body,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'GET' : _ref$method,
        _ref$headers = _ref.headers,
        headers = _ref$headers === undefined ? {} : _ref$headers;

    console.log(method);
};
// GET
fetch('http://example.com', {});
// POST
fetch('http://example.com', { method: 'POST' });
// TypeError: Cannot match against 'undefined' or 'null'.
fetch('http://example.com');

//# sourceMappingURL=01-func-object-compiled.js.map