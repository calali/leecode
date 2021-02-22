// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。0放到后面，其他元素的顺序不动，则要一个个交换。
function swap(nums,left,right) {
    const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length, left = 0, right = 0;
    while (right < n) {
        if (nums[right]) {
            swap(nums,left, right);
            left++;
        }
        right++;
    }
};
// [0,1,0,3,12]
//right为0 left为1，
//right为1 
//right为2 left为1和2交换
