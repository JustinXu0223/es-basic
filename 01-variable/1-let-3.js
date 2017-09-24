var a =[];

for(let i =0; i<10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[3](); // 3
a[6](); // 6
