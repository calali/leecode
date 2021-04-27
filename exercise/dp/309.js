// // 309. 最佳买卖股票时机含冷冻期
// // 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

const { max } = require("lodash");

// // 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// // 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// // 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// // 示例:

// // 输入: [1,2,3,0,2]
// // 输出: 3 
// // 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]


dp[i]表示当前的最大利润。每天对股票的状态是持有或不持有。

dp[i][0]表示当前不持有股票。当天不持有股票，可能性1当天股票卖了dp[i][0] =dp[i-1][1] + price[i]，可能性2昨天就没有股票dp[i][0] =dp[i-1][0]

dp[i][1]表示当前持有股票。当天持有股票，可能是昨天就有dp[i][1] =dp[i-1][1]，可能是今天买的dp[i][1] =dp[i-2][0] - price[i]

// 初始化dp[i][0]是0，p[i][1]是0
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
 var maxProfit = function(prices) {
    const len = prices.length
    const dp = new Array(len)
    for (let i = 0; i < len; i++) {
        dp[i] = [0,0]
    }
    //第一天买入后持有股票的最大利润是买入的成本
    dp[0][1]=-prices[0];

    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][1] + prices[i],dp[i-1][0])
        dp[i][1] = Math.max(((i -2) >=0 ? dp[i-2][0] : 0) - prices[i],dp[i-1][1])
    }

    return Math.max(...dp[len - 1])
};

console.log(maxProfit([1,2,3,0,2]));