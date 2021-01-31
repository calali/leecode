// 215. 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

//方法一：快排找到
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function(nums, k) {
//     const sortedArr = nums.sort((a,b)=>a-b)
//     return sortedArr[nums.length-k]
// };

//方法二，不对整个数组进行快排，只对包含nums.length-k位置的范围进行快排
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function(nums, k) {
//     const len = nums.length
//     const target = len - k
//     let left = 0
//     let right = len-1
//     while (true) {
//         //分而治之,每次确定了数组里某个pivort的位置。这个位置和目标位置的关系做比较，决定后续要不要继续查找
//         const resultIndex = partition(nums,left,right)
//         if(resultIndex < target){
//             left = resultIndex+1
//         }else if(resultIndex > target){
//             right = resultIndex - 1
//         }else{
//             return nums[resultIndex]
//         }
//     }
// };
// function partition(nums,left,right) {
//     const len = right - left + 1
//     const pivort = Math.floor(Math.random() * len )+left
//     const lessThanPivortValue = nums.slice(left,right+1).filter((item,index) =>{
//         const flag = (item <= nums[pivort]) && ((index+left) !== pivort)
//         return flag
//     })
//     const bigThanPivortValue = nums.slice(left,right+1).filter((item,index) =>{
//         const flag = item > nums[pivort]&& (index+left) !== pivort
//         return flag
//     })
//     const newArr = lessThanPivortValue.concat([nums[pivort]],bigThanPivortValue)
//     nums.splice(left,len,...newArr)
//     return lessThanPivortValue.length
// }
class MinHeap{
    constructor(){
        //第0个元素不存储，从1开始存储
        this.heap = [0,]
    }
    
    insert(data){
        //插入新的数据，并对数据排序使得最小的元素在堆顶
        this.heap.push(data)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        //元素上浮，和父元素比较大小，
        const parentIndex = this.getParentIndex(index)
        if(index === 0 || parentIndex === 0) return
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex,index)
            this.shiftUp(parentIndex)
        }
    }

    getParentIndex(i){
        return parseInt(i/2)
    }

    getLeftIndex(i){
        return 2 * i
    }

    getRightIndex(i){
        return 2 * i +1
    }

    swap(i1, i2){
        const temp = this.heap[i1]
        this.heap[i1]= this.heap[i2]
        this.heap[i2] = temp
    }

    delete(){
        this.heap[1] = this.heap.pop()
        this.shiftDown(1)
    }

    shiftDown(index){
        //元素下沉，和子元素比较大小
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] <this.heap[index]) {
            this.swap(leftIndex,index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] <this.heap[index]) {
            this.swap(rightIndex,index)
            this.shiftDown(rightIndex)
        }
    }

    getSize(){
        return this.heap.length - 1
    }

    getPeek(){
        return this.heap[1]
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MinHeap()
    for (let index = 0; index < nums.length; index++) {
        heap.insert(nums[index])
        const size = heap.getSize()
        if(size > k){
            heap.delete()
        }
    }
    return heap.getPeek()
};

// console.log(findKthLargest([3,2,1,5,6,4],2));//5

// console.log(findKthLargest([3,2,1,5,6,4],5));//2

console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));//4