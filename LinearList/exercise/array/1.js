// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 复杂度为O(n2)
// var twoSum = function(nums, target) {
//     const result = []
//     for (let index = 0,l=nums.length; index < l; index++) {
//         const element = nums[index];
//         const otherElement = target  - nums[index]
//         for (let otherIndex = 0; otherIndex < l; otherIndex++) {
//             if(nums[otherIndex] === otherElement && otherIndex !== index){
//                 result.push(index,otherIndex)
//                 break
//             }
            
//         }
//         if(result.length){
//             break
//         }
        
//     }
//     return result
// };

// 通过空间变成O(n)的时间复杂度
var twoSum = function(nums, target) {
    const map = {} //key数组值 value是索引
    let index = 0
    const l = nums.length
    while (index < l) {
        const otherValue = target - nums[index]
        console.log(otherValue,map[otherValue]);
        if(map[otherValue] !== undefined){
            return [map[otherValue],index]
        }
        map[nums[index]] = index
        index++
    }
    
    return []
};

console.log(twoSum([2, 7, 11, 15],9));