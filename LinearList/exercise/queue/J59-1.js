// 剑指 Offer 59 - I. 滑动窗口的最大值

// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 

// 提示：

// 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//暴力求解法
// var maxSlidingWindow = function(nums, k) {
//     if(!nums.length ) return []
//     if(nums.length <k) return []
//     const result = []
//     let len = nums.length-k+1
//     for (let index = 0; index < len; index++) {
//         const arr = nums.slice(index,index+k)
//         result.push(Math.max(...arr))
//     }
//     return result
// };


//单调队列法
//把最大值存到单调队列里，单调队列首部的元素时最大的，如果比他小就出栈，保持单调队列按照从大到小的顺序
//如果元素已经过了滑动窗口范围，则把单调队列里的元素出栈

var maxSlidingWindow = function(nums, k) {
  if(!nums.length ||!k ) return []
  if(k===1)return nums


  let result = [],queue = []
  for (let index = 0; index < nums.length; index++) {

    if(index >=k){
      const outItem = nums[index-k]
      if(outItem === queue[0]){
        queue.shift()
      }
    }
    

    const inItem = nums[index]
    while (queue.length && queue[queue.length-1] <inItem) {
      queue.pop()
    }
    queue.push(inItem)
    
    if(index>=(k-1)){
      result.push(queue[0])
    }
  }
  return result
};
var a = maxSlidingWindow([7,6,5,4],3)
console.log(a);