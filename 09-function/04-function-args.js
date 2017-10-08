function foo() {
    setTimeout( () => {
        console.log("args:", arguments);
    },100);
}

foo(1,2,3,4);
// args: { '0': 1, '1': 2, '2': 3, '3': 4 }

const func = (...args) => console.log(args);

func(1,2,3,4); // [ 1, 2, 3, 4 ]

(function() {
    (function(){ console.log(this.x)}).bind({ x: 'inner' })()
}).call({ x: 'outer' }); // inner
// ['outer']

(function() {
    (() => console.error(this.x)).bind({ x: 'inner' })()
}).call({ x: 'outer' }); // outer
