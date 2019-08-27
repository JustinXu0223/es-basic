const thunkify = require('thunkify');
const fs = require('fs');

const read = thunkify(fs.readFile);

read('package.json', 'utf8')((err, str) => {
  console.log(err);
  console.error(str);
});
