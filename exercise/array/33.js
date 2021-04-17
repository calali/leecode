// 33. 搜索旋转排序数组
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]]（下标 从 0 开始 计数）。例如，[0, 1, 2, 4, 5, 6, 7] 在下标 3 处经旋转后可能变为[4, 5, 6, 7, 0, 1, 2]。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 - 1 。



// 示例 1：

// 输入：nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1

// 二分查找每次middle将数组一一分为二，其中一个数组是有序的，另一个是部分有序的。
// 如果target落在有序数组中，则继续进行二分查找。
// 如果target落在无序数组中，则子问题与原问题一致，继续二分这个过程。

// 提示：

// 1 <= nums.length <= 5000
//   - 10 ^ 4 <= nums[i] <= 10 ^ 4
// nums 中的每个值都 独一无二
// 题目数据保证 nums 在预先未知的某个下标上进行了旋转
//   - 10 ^ 4 <= target <= 10 ^ 4


// 进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
// function binarySearch(arr,target) {
//   const len = arr.length
//   let left = 0
//   let right = len - 1

//   while (left <= right) {
//     const middle = Math.round((left + right) / 2)
//     if (arr[middle] > target) {
//       right = middle - 1
//     } else if (arr[middle] < target) {
//       left = middle + 1
//     } else {
//       return middle
//     }
//   }
//   return -1
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length
  let l = 0,r = len -1
  while (l<=r) {
    const middle = Math.floor((l+r)/2)
    // console.log('middle',middle);
    //是否是有序数组
    if(nums[middle] === target) return middle
    //0...middle是有序数组
    if (nums[l] <= nums[middle]) {
      if (target >= nums[l] && target <nums[middle]){
        r = middle -1
      //不落在这个范围里
      }else{
        l = middle +1
      }
    //0...middle不是有序数组，middle+1...n-1是有序数组
    }else{
      if (target >= nums[middle+1] && target <= nums[len-1]) {
        l = middle + 1
        //不落在这个范围里
      } else {
        r = middle - 1
      }
    }
  }
  return -1
};
console.log(search([4, 5, 6, 7, 0, 1, 2],0));
console.log(search([1, 3], 3));
console.log(search([5, 1, 3], 3));
