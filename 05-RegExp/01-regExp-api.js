// 实例化对象
/*var reg = new RegExp('xyz','i');

// 直接量
reg = /xyz/i;*/

var reg = new RegExp(/xyz/i);

if(reg.test('yxyzyz')){
    console.log('成功');
}else {
    console.log('失败');
}

console.log(new RegExp(/abc/ig, 'i').flags); //i
