// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回[-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？


// 示例 1：

// 输入：nums = [5, 7, 7, 8, 8, 10], target = 8
// 输出：[3, 4]
// 示例 2：

// 输入：nums = [5, 7, 7, 8, 8, 10], target = 6
// 输出：[-1, -1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1, -1]


// 提示：

// 0 <= nums.length <= 105
//   - 109 <= nums[i] <= 109
// nums 是一个非递减数组
//   - 109 <= target <= 109
function binarySearch(arr,target) {
  const len = arr.length
  let left = 0
  let right = len - 1

  while (left <= right) {
    const middle = Math.round((left + right) / 2)
    if (arr[middle] > target) {
      right = middle - 1
    } else if (arr[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const targetIndex =  binarySearch(nums,target)
  if (targetIndex === -1){
    return [-1,-1]
  }else{
    console.log(targetIndex);
    let min = targetIndex
    let max = targetIndex
    // 查找左边界和右边界
    for (let index = targetIndex-1; index >=0; index--) {
      if (nums[index] === target){
        min = index
      }
    }
    for (let index = targetIndex+1,len = nums.length; index < len; index++) {
      if (nums[index ] === target) {
        max = index
      }
    }
    return [min,max]
  }
};
// console.log(searchRange([2,2], 2));
// console.log(searchRange([1], 1));
console.log(searchRange([5, 7, 8, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 0));
console.log(searchRange([],0));