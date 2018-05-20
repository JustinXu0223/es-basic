
const obj = {
    a: 'ss',
    b: 'bb',
    c: 'cc',
}
// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.error(key, obj[key])
//     }
// }
// delete obj.a
// delete obj.b
// console.log(obj, JSON.stringify(obj) === '{}') // { c: 'cc' } false
// delete obj.c
// console.log(obj, JSON.stringify(obj) === '{}') // {} true

delete obj.a
delete obj.b
console.log(obj, Object.keys(obj)) // { c: 'cc' } [ 'c' ]
delete obj.c
console.log(obj, Object.keys(obj)) // {} []
// Object.getOwnPropertyNames(obj).forEach((value, index) => {
//     console.log(value, index)
//     // a 0
//     // b 1
//     // c 2
// })
