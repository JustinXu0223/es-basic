/**
 * 判断年份是否为润年
 * @param {Number} year
 */
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * 获取某一年份的某一月份的天数
 * @param {Number} year
 * @param {Number} month
 */
function getMonthDays(year, month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}

// 计算周的范围结束
function getWeekNumber(y, m, d) {
  const now = new Date(y, m - 1, d);
  const year = now.getFullYear();
  const month = now.getMonth();
  let days = now.getDate();
  // 那一天是那一年中的第多少天
  for (let i = 0; i < month; i++) {
    days += getMonthDays(year, i);
  }
  // 那一年第一天是星期几
  const yearFirstDay = new Date(year, 0, 1).getDay() || 7;
  let week = null;
  if (yearFirstDay === 1) {
    week = Math.ceil(days / 7);
  } else {
    days -= ((7 - yearFirstDay) + 1);
    week = Math.ceil(days / 7) + 1;
  }
  return week;
}

function formatDateNow(value) {
  const { birthDate, birthMonth, birthYear } = value;
  if (!(birthDate && birthMonth)) return '';
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  if (month === birthMonth && date === birthDate) return '今日';
  const week = getWeekNumber(year, month, date);
  const birthWeek = getWeekNumber(year, birthMonth, birthDate);
  // console.log("year:", year, " month:", month, " date:", date, " birthMonth:", birthMonth, " birthDate:", birthDate, " week:", week, " birthWeek:", birthWeek)
  if (week === birthWeek) return '本周';
  if (month === birthMonth) return '本月';
  if (!birthYear) return `${birthMonth}-${birthDate}`;
  return `${birthYear}-${birthMonth}-${birthDate}`;
}


// console.log(formatDateNow({
//   birthDate: 17,
//   birthMonth: 8,
//   birthYear: 2017,
// }));

console.log(getWeekNumber(2018, 8, 31));
