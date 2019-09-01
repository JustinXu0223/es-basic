function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
    if (arguments.length === 1) {
      console.log('this is one params');
      return false;
    }
    if (arguments.length === 2) {
      console.log('this is two params');
      return false;
    }
    if (arguments.length === 3) {
      console.log('this is three params');
      return false;
    }
  }, 100);
}

foo(1, 2, 3);
// args: { '0': 1, '1': 2, '2': 3, '3': 4 }

const func = (...args) => console.log(args);

func(1, 2, 3, 4); // [ 1, 2, 3, 4 ]

(function () {
  (function () { console.log(this.x); }).bind({ x: 'inner' })();
}).call({ x: 'outer' }); // inner
// ['outer']

(function () {
  (() => console.error(this.x)).bind({ x: 'inner' })();
}).call({ x: 'outer' }); // outer
