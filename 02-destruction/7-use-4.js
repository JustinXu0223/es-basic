/**
 * 用途
 * 1. 解析Json
 */
const jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
const { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, OK, [867, 5309]



