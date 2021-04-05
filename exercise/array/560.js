// 560. 和为K的子数组
// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// 说明 :

// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//暴力枚举法
//  var subarraySum = function(nums, k) {
//     const n = nums.length 
//     let count  = 0
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let sum = 0
//             for (let m = i; m <= j; m++) {
//                 sum+=nums[m]
//             }
//             if(sum === k){
//                 count++
//             }
//         }
        
//     }
//     return count
// };
// 暴力枚举法优化
// var subarraySum = function(nums, k) {
//     const n = nums.length 
//     let count  = 0
//     for (let i = 0; i < n; i++) {
//         let sum = 0
//         for (let j = i; j < n; j++) {
//             sum+=nums[j]
//             if(sum === k){
//                 count++
//             }
//         }
        
//     }
//     return count
// };
var subarraySum = function(nums, k) {
    const len = nums.length 
    let count  = 0
    let map = new Map() //key是前缀和，值是出现次数
    let preSum = 0
    map.set(0,1) //初始化前缀和是0，出现1次
    for (let index = 0; index < len; index++) {
        preSum+= nums[index]
        if(map.get(preSum-k)){
            count+=map.get(preSum-k)
        }
        if(map.get(preSum)){
            map.set(preSum,map.get(preSum)+1)
        }else{
            map.set(preSum,1)
        }
    }
    return count
};
// console.log(subarraySum([1,1,1],2) === 2);
// console.log(subarraySum([2,5,1,2],3) === 1);
// console.log(subarraySum([1,2,3],3)===2);
// console.log(subarraySum([1],1)===1);
// console.log(subarraySum([1],0)===0);
// console.log(subarraySum([-1,-1,1],0)===1);
console.log(subarraySum([0,0,0],0));