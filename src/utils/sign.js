/*
 * @component sign.js
 * @description 签名
 * @time 2019/8/19
 * @author chat
 */
import CryptoJS from 'crypto-js';
// INIT
const APP_KEY = '1p72smk2xwou7dytya';

const APP_SECRET = 'mdeldqauyg4tj39z';
const APP_SECRET_KEY = CryptoJS.enc.Utf8.parse(APP_SECRET);

const letterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandom(num = 11) {
  return Array.from(Array(num)).map(() => letterList[getRandomInt(61)]).join('');
}

function getSecretHeader() {
  return { 'X-APPKEY': APP_KEY, 'X-PEIV': getRandom(16) };
  // return { 'X-APPKEY': APP_KEY, 'X-PEIV': '0oDHJfm6kvqt4Pcf' };
}

function getSecretMap() {
  const map = {
    appKey: APP_KEY,
    nonce_str: getRandom(11),
    timestamp: parseInt(String(+new Date() / 1000), 10),
    // timestamp: 1566207709.111111,
  };
  const result = Object.keys(map).sort().reduce((prev, curr) => {
    prev[curr] = map[curr];
    return prev;
  }, {});
  return {
    map,
    stringSignTemp: JSON.stringify(result),
  };
}

export function encode(iv) {
  const { map, stringSignTemp } = getSecretMap();
  console.log('@stringSignTemp:', stringSignTemp);
  const aesRes = CryptoJS.AES.encrypt(stringSignTemp, APP_SECRET_KEY, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return {
    ...map,
    sign: CryptoJS.HmacSHA256(CryptoJS.SHA256(stringSignTemp), APP_SECRET_KEY).toString(),
    data: encodeURIComponent(aesRes.toString()),
  };
}

export function decode(word, iv) {
  const decrypt = CryptoJS.AES.decrypt(decodeURIComponent(word), APP_SECRET_KEY, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

const header = getSecretHeader();
const result = encode(header['X-PEIV']);

export function print() {
  console.log('@header:', header);
  console.log('@result:', result);
  console.log('@decode:', decode(result.data, header['X-PEIV']));
}
