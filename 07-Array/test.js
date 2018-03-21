function fn({config= []}) {
    this.config = [{
        name: 2,
        state: true,
        output: 'Y',
    }, {
        name: 3,
        state: true,
        output: 'A',
    }, {
        name: 5,
        state: true,
        output: 'S',
    }, {
        name: 7,
        state: true,
        output: 'B',
    }];

    this.config = [...this.config, ...config];
    let hash = {};
    this.config = this.config.reduceRight((item, next) => {
        hash[next.name] ? '' : hash[next.name] = true && item.push(next);
        return item
    }, []);
}
fn.prototype.print = function(num) {
    if (typeof num !== "number") throw Error('must be number');
    let arr = [];
    for (let value of this.config) {
        if (num % value['name'] === 0) {
            if (!value.state) continue;
            arr.push(value.output);
        }
    }
    if (arr.length === 1) return arr.join('');
    if (arr.length > 1) return arr.join(' ');
    return num;
}

var test = new fn({
    config: [{
        name: 5,
        state: false,
        output: 'B',
    }]
});

for (let a = 0; a < 16; a++) {
    console.log(test.print(a))
}


