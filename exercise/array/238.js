// 238. 除自身以外数组的乘积
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

// 示例:

// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
 

// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
// 这道题有很多种解法
// 1第一个就是提示中的，算出整个数组所有数字的乘积，然后再除以当前的数字
// 2第二个是暴力求解，遍历到i时，再次遍历去求i左侧和i右侧的数的乘积
// 3方法二时间复杂度较高，我们可以用空间换时间，把左侧i的所有结果存起来，再把右侧i的所有结果存起来，这样就能在O(n) 时间复杂度完成
// 4在方法二的基础上，用结果数组存储左侧结果和右侧结果
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  var productExceptSelf = function(nums) {
//     const len = nums.length
//     const l = new Array(len).fill(1)
//     const r = new Array(len).fill(1)
//     const result = new Array(len).fill(1)
//     for (let index = 1; index < len; index++) {
//         l[index] = l[index -1] * nums[index-1]    
//     }
//     for (let index = len -2 ; index >=0; index--) {
//         r[index] = r[index+1] * nums[index+1]    
//     }
//     for (let index = 0; index < len; index++) {
//         result[index] = r[index] * l[index]
//     }
//     return result
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const len = nums.length
    const result = new Array(len).fill(1)
    for (let index = 1; index < len; index++) {
        result[index] = result[index -1] * nums[index-1]    
    }
    let temp = 1
    for (let index = len -1 ; index >=0; index--) {
           if(index< (len -1)){
               temp = temp * nums[index+1]
           }
           result[index] = result[index] * temp
    }
    
    return result
};
console.log(productExceptSelf([1,2,3,4]));