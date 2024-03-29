/**
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 
 */
var maxProfit = function (prices) {
  var profit = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += (prices[i + 1] - prices[i]);
    }
  }
  return profit;
}
const res = maxProfit([7,1, 5, 3, 6, 4]);
console.log(res);