// 448. 找到所有数组中消失的数字
// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]

// 输出:
// [5,6]
//出现两次的数字导致另外一些数字没有出现。但是他们的值没有任何关系。
//暴力求解，用数组对应位置存储出现的值，没有值的位置就是没有出现过的
//进阶优化 用本身的数组来代替新开的数组做存储
//用
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     const len = nums.length
//     //数字范围四1-len
//     let occurrenceArr = new Array(len).fill(undefined)
//     for (let index = 0; index < len; index++) {
//         //存储到对应的n-1的位置上
//         const i = nums[index]
//         occurrenceArr[i-1] = true
        
//     }
//     let result = []
//     for (let index = 0; index < len; index++) {
//         if(occurrenceArr[index] === undefined){
//             result.push(index + 1)
//         }     
//     }
//     return result
// };

var findDisappearedNumbers = function(nums) {
    const len = nums.length
    //数字范围四1-len
    for (let index = 0; index < len; index++) {
        //存储到对应的n-1的位置上
        let value = nums[index]
        if(value > len){
            value = value - len
        }
        let targetIndex = value - 1
        let targetValue = nums[targetIndex]
        if(targetValue <= len){
            nums[targetIndex] = nums[targetIndex] + len
        }
        
    }
    let result = []
    for (let index = 0; index < len; index++) {
        if(nums[index] <= len ){
            result.push(index + 1)
        }     
    }
    return result
};
//[1,1,3]
findDisappearedNumbers([4,3,2,7,8,2,3,1])
// findDisappearedNumbers([4,3,2,2])
//index=0 [4,3,2,6]
//index=1 [4,3,6,6]
//index=2 [4,7,6,6]
//index=2 [4,7,6,6]