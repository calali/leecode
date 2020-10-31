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

//动态规划
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

//队列法
var maxSlidingWindow = function(nums, k) {
    //边界情况处理
    if (!nums || !nums.length || k <= 0) return []
    if (k === 1) return nums
  
    let res = [], queue = []
  
    //开始遍历数组
    for (let i = 0; i < nums.length; i++) {
      
      //当滑动窗口第2次滑动起来的时候，要把不在滑动窗口范围里的值outElem给清空了，如果没有用过的话，什么时候会出现这样的情况呢？
      if(i >= k) {
        // 尾部元素出滑动窗口
        let outElem = nums[i - k]
        console.log(123,outElem,queue);
        if (outElem === queue[0]) queue.shift()
        
      }
      // 当前元素进入滑动窗口，并把比它小的元素进行出栈操作
      let inElem = nums[i]
      //栈后面的元素比要入栈的元素小，就清空栈。这样栈一直按照从大到小的顺序排序
      while (queue.length && queue[queue.length - 1] < inElem) queue.pop()

      //把当前的元素入栈
      queue.push(inElem)

      console.log(queue);

      //在滑动窗口的范围内开始存最大值，最大值始终在队列首部
      if (i >= k - 1) res.push(queue[0])
    }
  
    return res
  };

var a = maxSlidingWindow([1,7,6,8,],3)
// console.log(a);