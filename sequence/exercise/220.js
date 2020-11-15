// 220. 存在重复元素 III
// 在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ 。

// 如果存在则返回 true，不存在返回 false。

 

// 示例 1:

// 输入: nums = [1,2,3,1], k = 3, t = 0
// 输出: true
// 示例 2:

// 输入: nums = [1,0,1,1], k = 1, t = 2
// 输出: true
// 示例 3:

// 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
// 输出: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
//一、暴力解法，对下标和值在循环中找到满足条件的返回true
// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(Math.abs(j-i) <= k && Math.abs(nums[j]-nums[i]) <= t){
//                 return true
//             }
//         }
//     }
//     return false
// };

// 二、对符合下标要求的范围进行查找值是否符合,值用桶放到map里
//增加桶、删除桶、更新桶，问题是如何分桶
// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//     //要查找值<=t则桶的大小为t+1,这样一个桶内的最小值是x,最大值是x+t,桶的大小是t+1
//     const bucket = t+1 
//     //用map来存储桶排序的结果
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         //根据当前值获取桶号
//         const index = Math.floor(nums[i]/bucket)
//         //如果有两个元素放在一个桶里，已知一个桶里的元素最大值和最小值符合<=t，则返回true
//         if(map.get(index) !==undefined) return true //注意map.get(index)存的值可能是数字0
//         //元素和相邻桶比较是否满足要求
//         else if(map.get(index+1) !== undefined && Math.abs(map.get(index+1) - nums[i]) <= t) return true
//         else if(map.get(index-1) !== undefined && Math.abs(map.get(index-1) - nums[i]) <= t) return true
//         //走到这里，说明没有满足要求的，先把当前的元素放到桶里，等待下一次比较
//         map.set(index , nums[i])
//         //由于需要比较下标差值<=k，因此需要删除i-k及之前的无效下标范围的元素
//         if(i>=k){
//             map.delete(Math.floor(nums[i-k]/bucket))
//         }
//     }
//     return false
// };

//解法三、滑动窗口+二叉树排序
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
    return false
};
 
console.log(containsNearbyAlmostDuplicate([0, 5, 0],2,4));//true
// console.log(containsNearbyAlmostDuplicate([1,2,3,1],2,0));//false


// console.log(containsNearbyAlmostDuplicate([1,0,1,1],1,2)); //true

// console.log(containsNearbyAlmostDuplicate([8,7,15,1,6,1,9,15],1,3));//true
