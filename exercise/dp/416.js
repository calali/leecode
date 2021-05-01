// 416. 分割等和子集
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。



// 示例 1：

// 输入：nums = [1, 5, 11, 5]
// 输出：true
// 解释：数组可以分割成[1, 5, 5] 和[11]。
// 示例 2：

// 输入：nums = [1, 2, 3, 5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

// dp[1] = true

// dp[5] = true

// dp[11] = true

// // 提示：

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

// 思路：两个子集的和相等，可以转化为求数组的和，其中一部分数字可以组合成数组和的一半。当数组和是奇数时说明肯定不能分成两部分。

// 当数组和是偶数时，数组和的一半是target，求解子集可以组成target。

// dp[i]表示和为i的子集是否可以被组成。求解dp[target]。

// dp[i] = dp[i] || dp[i-nums]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((taotal, cur) => taotal+cur)
  const isOdd = sum % 2 === 1
  if(isOdd){
    return false
  }

  const target = sum /2
  const dp = new  Array(target+1).fill(false)
  dp[0] = true

  for (let j = 0, len = nums.length;j < len;j++) {
    const num = nums[j]
    for (let i = target; i >=num; i--) {
      dp[i] = dp[i] || dp [i-num]
    }
    // for (let i = j;i < target + 1;i++) {
    //   dp[i] = dp[i] || dp[i - num]
    //   console.log(i,dp[i]);
    // }
    if(j === 0){
      break
    }
  }
  console.log(dp);
  return dp[target]
};

// console.log(canPartition([1, 5, 11, 5] ));
// console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 2,5]));