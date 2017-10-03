let arr = [3, 2, 4];

// 遍历keys
for(let key of arr.keys()){
    console.log(key); // 0 1 2
}

// 遍历键值对
for(let [key, value] of arr.entries()){
    console.log(`${key}--${value}`);
    /*** 0--3
     *   1--2
     *   2--4
    * */
}

/*** 这里有个问题,出现 TypeError: arr.values is not a function
* */
//for(let value of arr.values()){}

// 所以采用默认遍历,
for(let value of arr){
    console.log(value); // 3 2 4
}