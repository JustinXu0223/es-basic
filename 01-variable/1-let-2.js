// var a = [];
// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         a[i] = function () {
//             console.log(i);
//         }
//     })(i);
//
// }
// a[3]();
// a[6]();
// var a = '0';
// var b = 0;
// console.log(a === b);

var a = {
  zh: `<p>积分获取：</p><p>以BTC收益为基准，0.0001 BTC= 1 积分；</p><p>其他币种以每日发放收益当时价格折算成BTC兑换积分，<br/>如: 2018-07-13 10:00:00 发放Litecoin收益5 LTC<br/>当时币价 1 LTC ＝ 0.0123 BTC<br/>5 LTC ＝ 0.0615 BTC ＝ 615 Points<br/>(基准价数据引用自多家主流交易所) ;</p><p>持续挖矿30天，第31日积分加送前30天总积分的5%。</p><p>积分的发放和使用方法：<br/>积分随收益每日发送至矿工账户<br/>使用积分需要将积分提取至主账户</p><p>积分有什么用途？<br/>敬请期待</p><p>最终解释权归BTCC Pool 所有</p>`,
  en: `<p>Points earned:<p><p>Based on BTC income, 0.0001 BTC = 1 point;<br/> Other currencies will be issued at its current price. Convert to BTC to redeem points,<p><p>For example:<br/>2018-07-13 10:00:00 issue an income of 5 Litecoin <br/>Price at the time: 1 LTC ＝ 0.0123 BTC<br/>5 LTC ＝ 0.0615 BTC ＝ 615 Points<br/>(Base price data is quoted from a number of major exchanges)<br/>If you mine continuously for 30 days, miners will be awarded an extra 5% of the total points accrued over those days on the 31st day</p><p>How to distribute and use points:<br/>Points are sent daily to the miner's account in accordance with his/her earnings<br/>You must first withdraw points to your main account before using them<br/> What is the purpose of these points?<br/>Stay tuned for more info!</p><p>BTCC Pool have the right to the final interpretation of the rules</p>`,
}

console.log(JSON.stringify(a));
{"zh":"<p>积分获取：</p><p>以BTC收益为基准，0.0001 BTC= 1 积分；</p><p>其他币种以每日发放收益当时价格折算成BTC兑换积分，<br/>如: 2018-07-13 10:00:00 发放Litecoin收益5 LTC<br/>当时币价 1 LTC ＝ 0.0123 BTC<br/>5 LTC ＝ 0.0615 BTC ＝ 615 Points<br/>(基准价数据引用自多家主流交易所) ;</p><p>持续挖矿30天，第31日积分加送前30天总积分的5%。</p><p>积分的发放和使用方法：<br/>积分随收益每日发送至矿工账户<br/>使用积分需要将积分提取至主账户</p><p>积分有什么用途？<br/>敬请期待</p><p>最终解释权归BTCC Pool 所有</p>","en":"<p>Points earned:<p><p>Based on BTC income, 0.0001 BTC = 1 point;<br/> Other currencies will be issued at its current price. Convert to BTC to redeem points,<p><p>For example:<br/>2018-07-13 10:00:00 issue an income of 5 Litecoin <br/>Price at the time: 1 LTC ＝ 0.0123 BTC<br/>5 LTC ＝ 0.0615 BTC ＝ 615 Points<br/>(Base price data is quoted from a number of major exchanges)<br/>If you mine continuously for 30 days, miners will be awarded an extra 5% of the total points accrued over those days on the 31st day</p><p>How to distribute and use points:<br/>Points are sent daily to the miner's account in accordance with his/her earnings<br/>You must first withdraw points to your main account before using them<br/> What is the purpose of these points?<br/>Stay tuned for more info!</p><p>BTCC Pool have the right to the final interpretation of the rules</p>"}
