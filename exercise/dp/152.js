// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 以每个当前值为连续子数组的结束。
// 则当前的最大值是：当前数>=0时，上一个连续子数组*当前值
// <0时，



// 示例 1:

// 输入: [2, 3, -2, 4]
// 输出: 6
// 解释: 子数组[2, 3] 有最大乘积 6。
// 示例 2:

// 输入: [-2, 0, -1]
// 输出: 0
// 解释: 结果不能为 2, 因为[-2, -1] 不是子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const len = nums.length
  let dp = new Array(len)
  for (let index = 0; index < len; index++) {
    dp[index] = {
      min:1,
      max:1
    }
  }
  dp[0].max = nums[0]
  dp[0].min = nums[0]

  for (let index = 1; index <len; index++) {
    const max = Math.max(dp[index-1].max * nums[index],nums[index])
    const min = Math.min(dp[index-1].min * nums[index], nums[index])
    console.log(index, max,min);
    dp[index].max = max

    dp[index].max = min
    console.log(dp);
  }

  // console.log(dp[1].max);

  // let result = 0
  // for (let index = 0; index < len; index++) {
  //   result = Math.max(result,dp[index].max)
  // }
  // return result
};

console.log(maxProduct([2, 3]));