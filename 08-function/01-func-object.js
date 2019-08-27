/** * 与解构配合
* */

const fetch = (url, { body = '', method = 'GET', headers = {} } = {}) => {
  console.log(method);
};
// GET
fetch('http://example.com', {});
// POST
fetch('http://example.com', { method: 'POST' });
// TypeError: Cannot match against 'undefined' or 'null'.
fetch('http://example.com');
