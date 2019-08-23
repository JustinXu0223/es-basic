/*
 * @component sign.js
 * @description 签名
 * @time 2019/8/19
 * @author chat
 */
import CryptoJS from 'crypto-js';
// INIT
const APP_KEY = 'k49cv8esobmpvdx67u';
const APP_SECRET = '7xs15slglcernpuuj9l8xtaxfdr99hxo';

// 将slice(0, 16)复杂化
function getAppRealSecret() {
  return APP_SECRET.split('').reverse().reduceRight((prev, curr, index) => {
    if (APP_SECRET.length - index > 16) return prev;
    prev += curr;
    return prev;
  }, '');
}

console.log('@APP_REAL_SECRET:', getAppRealSecret());
const APP_DATA_SECRET_KEY = CryptoJS.enc.Utf8.parse(getAppRealSecret());
const APP_SIGN_SECRET_KEY = CryptoJS.enc.Utf8.parse(APP_SECRET);

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
    // nonce_str: 'FMSDz5AD7Ra',
    // timestamp: 1566553818,
  };
  const result = Object.keys(map).sort().reduce((prev, curr) => {
    prev[curr] = map[curr];
    return prev;
  }, {});
  return {
    map,
    stringDataTemp: JSON.stringify(result),
    stringSignTemp: `${Object.keys(result).map(key => `${key}=${result[key]}`).join('&')}&key=${APP_SECRET}`,
  };
}

export function encodeData(iv) {
  const { stringDataTemp } = getSecretMap();
  const aesRes = CryptoJS.AES.encrypt(stringDataTemp, APP_DATA_SECRET_KEY, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return aesRes.toString();
}

export function encodeSign() {
  const { stringSignTemp } = getSecretMap();
  console.log('@stringSignTemp:', stringSignTemp);
  return CryptoJS.HmacSHA256(stringSignTemp, APP_SIGN_SECRET_KEY).toString().toUpperCase();
}

export function encode(iv) {
  const { map } = getSecretMap();
  return {
    ...map,
    sign: encodeSign(),
    data: encodeData(iv),
  };
}

export function decodeData(word, iv) {
  const decrypt = CryptoJS.AES.decrypt(decodeURIComponent(word), APP_DATA_SECRET_KEY, {
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
  // console.log('@result:', result.data);
  // console.log('@decode:', decodeData(result.data, header['X-PEIV']));
  console.log('@result:', result.sign);
}
