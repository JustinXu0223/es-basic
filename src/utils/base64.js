/*
 * @component base64
 * @description
 * @time 2019/8/19
 * @author chat
 */
import { Base64 } from 'js-base64';

const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const bList = '0123456789'.split('');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getSuffix(num = 2) {
  // return Array.form(Array(num)).map((v, i) => {
  //   if (i % 2 === 0) return aList[getRandomInt(51)];
  //   return bList[getRandomInt(10)];
  // });
  const list = [];
  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      list.push(aList[getRandomInt(51)]);
    } else {
      list.push(bList[getRandomInt(10)]);
    }
  }
  return list.join('');
}

const list = [0, 1, 3, 2, 1];

export function encode(data, arr = list) {
  try {
    let res = data;
    arr.forEach((item) => {
      if (!item) {
        res = Base64.encode(JSON.stringify(data));
      } else {
        res = Base64.encode(`${getSuffix(item)}${res}`);
      }
      console.log(res);
    });
    return res;
  } catch (e) {
    return '';
  }
}

export function decode(data, arr = list.reverse()) {
  try {
    let res = data;
    arr.forEach((item) => {
      if (!item) {
        res = JSON.parse(Base64.decode(res));
      } else {
        res = Base64.decode(res).slice(item);
      }
      console.log(res);
    });
    return res || {};
  } catch (e) {
    return {};
  }
}
