const _ = require('lodash')
// 239. 滑动窗口最大值
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

 

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
// 示例 3：

// 输入：nums = [1,-1], k = 1
// 输出：[1,-1]
// 示例 4：

// 输入：nums = [9,11], k = 2
// 输出：[11]
// 示例 5：

// 输入：nums = [4,-2], k = 2
// 输出：[4]
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//超出时间限制
// var maxSlidingWindow = function(nums, k) {
//     if(k === 1){
//         return nums
//     }
//     const result = []
//     const len = nums.length
//     for (let index = 0; index < len; index++) {
//         if((index+k)<=len){
//             const window = nums.slice(index,index+k)
//             result.push(Math.max(...window))
//         }else{
//             break
//         }
//     }
//     return result
// };
//方法一：暴力解法，循环查找最大值

// class MaxPriorityHeap{
//     constructor(){
//         //第0个元素不存储，从1开始存储
//         this.heap = [{},]
//     }
    
//     insert({val,index}){
//         //插入新的数据，并对数据排序使得最大的元素在堆顶
//         this.heap.push({val,index})
//         this.shiftUp(this.heap.length-1)
//     }

//     shiftUp(index){
//         //元素上浮，和父元素比较大小，
//         const parentIndex = this.getParentIndex(index)
//         if(index === 0 || parentIndex === 0) return
//         if (this.heap[parentIndex].val < this.heap[index].val) {
//             this.swap(parentIndex,index)
//             this.shiftUp(parentIndex)
//         }
//     }

//     getParentIndex(i){
//         return parseInt(i/2)
//     }

//     getLeftIndex(i){
//         return 2 * i
//     }

//     getRightIndex(i){
//         return 2 * i +1
//     }

//     swap(i1, i2){
//         const temp = this.heap[i1]
//         this.heap[i1]= this.heap[i2]
//         this.heap[i2] = temp
//     }

//     delete(){
//         const result = this.heap[1]
//         if(this.getSize() > 1){
//             this.heap[1] = this.heap.pop()
//             this.shiftDown(1)
//         }else{
//             this.heap.pop()
//         }
//         return result
//     }

//     shiftDown(index){
//         //元素下沉，和子元素比较大小
//         const leftIndex = this.getLeftIndex(index)
//         const rightIndex = this.getRightIndex(index)
        
//         if (this.heap[leftIndex] && this.heap[leftIndex].val >this.heap[index].val) {
//             this.swap(leftIndex,index)
//             this.shiftDown(leftIndex)
//         }
//         if (this.heap[rightIndex] && this.heap[rightIndex].val >this.heap[index].val) {
//             this.swap(rightIndex,index)
//             this.shiftDown(rightIndex)
//         }
//     }

//     getSize(){
//         return this.heap.length - 1
//     }

//     getPeek(){
//         return this.heap[1]
//     }
// }
// //方法二：优先队列创建大小为k的堆，并返回最大值，竟然也会超出时间限制？？？
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function(nums, k) {
//     if(k === 1) return nums

//     const maxHeap = new MaxPriorityHeap()
//     const result = []

//     for (let index = 0; index < nums.length; index++) {
//         if( nums[index]=== 2){
//             console.log(index);
//             debugger
//         }
//         maxHeap.insert({val:nums[index],index})
//         if(maxHeap.getSize() >= k){
//             //堆顶不在窗口内，则移出
//             while (maxHeap.getPeek().index < (index-k+1)) {
//                 maxHeap.delete()
//             }
//             const {val} = maxHeap.getPeek()
//             result.push(val)
//         }
//     }
//     console.log(result);
//     return result
// };

//单调递减队列,当要入栈的元素比栈里的元素大的时候，则出栈
//当元素已经小于窗口的时候删除
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//     const deque = []
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//         // 把滑动窗口之外的踢出
//         if (i - deque[0] >= k) {
//             deque.shift()
//         }
//         while (nums[deque[deque.length - 1]] <= nums[i]) {
//             deque.pop()
//         }
//         deque.push(i)
//         if (i >= k - 1) {
//             result.push(nums[deque[0]])
//         }
//     }
//     return result
// }
var maxSlidingWindow = function(nums, k) {
    if(k === 1) return nums
    
    let queue = []
    const result = []

    for (let index = 0; index < nums.length; index++) {
        if (index - queue[0] >= k) {
            queue.shift()
        }
        while (queue.length  && nums[index] > nums[queue[queue.length-1]]) {
            queue.pop()
        }
        queue.push(index)
        if((index+1) >= k){
            result.push(nums[queue[0]])
        }
    }
    return result
};
//其他
console.log(_.isEqual(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3),[3,3,5,5,6,7]));
console.log(_.isEqual(maxSlidingWindow([1,-1],1),[1,-1]));
console.log(_.isEqual(maxSlidingWindow([9,11],2),[11]));
console.log(_.isEqual(maxSlidingWindow([7,2,4],2),[7,4]))
console.log(maxSlidingWindow([9,10,9,-7,-4],5));
console.log(_.isEqual(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6],5),[10,10,9,2]))