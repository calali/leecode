// 581. 最短无序连续子数组
// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。



// 示例 1：

// 输入：nums = [2, 6, 4, 8, 10, 9, 15]
// 输出：5
// 解释：你只需要对[6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1, 2, 3, 4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0


// 提示：

// 1 <= nums.length <= 104
//   - 105 <= nums[i] <= 105

// 思路一：先快排，然后再比较两端不一致的地方

// 进阶：你可以设计一个时间复杂度为 O(n) 的解决方案吗？

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const len = nums.length
  const sortedArr = nums.slice(0).sort((a,b)=>(a-b))
  let start = 0
  let end = 0
  for (let index = 0; index < len; index++) {
    if(nums[index] !== sortedArr[index]){
      start = index
      break
    }
  }
  for (let index = len -1;index >=0;index--) {
    if (nums[index] !== sortedArr[index]) {
      end = index
      break
    }
  }
  console.log(end,start);
  if (end > start) return end - start + 1
  return 0
};

// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1,2,3]))