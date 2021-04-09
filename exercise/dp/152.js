// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。


// 以每个当前值为连续子数组的结束位置。那么长度为n的数组有n个结束位置的值，我们取最大值即可。

// 最大值的情况有很多种，如[1,-2,-3]对-3来说，最大值是6,来自于上一个的最小值和当前值的乘机。
// 对[1, -2, 3]，最大值是3，来自于当前自身的值，没有取用-2的连续子列。

// 因此对于每个值为结束位置，我们保存他的最大和最小值。最终得到最大值数组里的最大值。



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
// var maxProduct = function (nums) {
//   const len = nums.length
//   let dp = new Array(len)
//   for (let index = 0; index < len; index++) {
//     dp[index] = {
//       min:1,
//       max:1
//     }
//   }
//   dp[0].max = nums[0]
//   dp[0].min = nums[0]

//   for (let index = 1; index <len; index++) {
//     const {min,max} = dp[index-1]
//     const currentMax = Math.max(min * nums[index], nums[index], max * nums[index])
//     const currentMin = Math.min(min * nums[index], nums[index], max * nums[index])

//     dp[index].max = currentMax
//     dp[index].min = currentMin
//   }

//   let result = -Infinity
//   for (let index = 0; index < len; index++) {
//     result = Math.max(result,dp[index].max)
//   }
//   return result
// };

var maxProduct = function (nums) {
  const len = nums.length

  let min = max = ans=nums[0]

  for (let index = 1;index < len;index++) {
    const currentMax = Math.max(min * nums[index], nums[index], max * nums[index])
    const currentMin = Math.min(min * nums[index], nums[index], max * nums[index])
    console.log(min,max);
    max = currentMax
    min = currentMin
    ans = Math.max(ans,max)
  }
  return ans
};

// console.log(maxProduct([-2,-3])===6);
console.log(maxProduct([2, 3, -2, 4]));