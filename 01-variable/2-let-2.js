var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError: tmp is not defined
}
console.log(tmp);