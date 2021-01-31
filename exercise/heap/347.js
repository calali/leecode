// 347. 前 K 个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
 

// 提示：

// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。
class MinHeap{
    constructor(){
        //第0个元素不存储，从1开始存储
        this.heap = [null,]
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
        if (this.heap[parentIndex].count > this.heap[index].count) {
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
        if (leftIndex < this.heap.length && this.heap[leftIndex].count <this.heap[index].count) {
            this.swap(leftIndex,index)
            this.shiftDown(leftIndex)
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex].count <this.heap[index].count) {
            this.swap(rightIndex,index)
            this.shiftDown(rightIndex)
        }
    }

    getSize(){
        return this.heap.length - 1
    }

    getHeap(){
        return this.heap.slice(1,)
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //值-个数的map
    const map = {}
    for (let index = 0; index < nums.length; index++) {
        const value = nums[index]
        if(!map[value]){
            map[value] = 1
        }else{
            map[value] += 1
        }
    }

    // 设置前K个高的元素的堆
    const heap = new MinHeap()
    Object.entries(map).forEach(([value,count])=>{
        heap.insert({count,value})
        const size = heap.getSize()
        if(size > k){
            heap.delete()
        }
    })
    
    //找到前K个count的对应的值
    const topKArr = heap.getHeap()
    return topKArr.map(({value})=>parseInt(value))
};

console.log(topKFrequent([1,1,1,2,2,3],2));//[ 2, 1 ]
console.log(topKFrequent([1],1));//[ 1 ]
console.log(topKFrequent([1,2],2));//[ 1, 2 ]
console.log(topKFrequent([5,2,5,3,5,3,1,1,3],2));//[ 5, 3 ]