// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

// 示例 1：

// 输入：[3,2,3]
// 输出：3
// 示例 2：

// 输入：[2,2,1,1,1,2,2]
// 输出：2
 

// 进阶：

// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

//保存所有的出现次数，并返回>n/2的值
//还有其他方法吗？
//不相等就碰撞消除，剩下的就是一个数
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     const occurrenceMap = {}
//     const n = nums.length
//     for (let index = 0; index < n; index++) {
//         if(occurrenceMap[nums[index]] === undefined){
//             occurrenceMap[nums[index]] = 0
//         }
//         occurrenceMap[nums[index]] += 1
//     }
//     return parseInt(Object.keys(occurrenceMap).filter(key=>occurrenceMap[key] > n/2))
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let count = 0,result 
    for (let index = 0; index < nums.length; index++) {
        if(count === 0) result = nums[index]
        count += (nums[index] === result) ? 1 : -1;
    }
    return result
};
console.log(majorityElement([3,2,3]));
// console.log(majorityElement([2,2,1,1,1,2,2]));
// console.log(majorityElement([3,3,4]));