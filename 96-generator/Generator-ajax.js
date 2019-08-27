const fetch = require('node-fetch');

function* gen() {
  const url = 'https://api.github.com/users/github';
  const result = yield fetch(url);
  console.log(result.avatar_url);
}

const g = gen();
const result = g.next();

result.value.then(data => data.json()).then((data) => {
  g.next(data);
});
