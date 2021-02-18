// 23. 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。



// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 示例 2：

// 输入：lists = []
// 输出：[]
// 示例 3：

// 输入：lists = [[]]
// 输出：[]


// 提示：

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4



//方法一：两两合并直到n完全合并
//方法二：分治合并
//方法三：优先队列
// var mergeTwoLists = function(l1=null, l2=null) {
//     if(!l1){return l2}
//     if(!l2){return l1}

//     if(l1.val <l2.val){
//         l1.next = mergeTwoLists(l1.next,l2)
//         return l1
//     }else{
//         l2.next = mergeTwoLists(l1,l2.next)
//         return l2
//     }
// };
// var mergeTwoLists = function(l1, l2) {
//     let preHead = new ListNode()
//     const result = preHead

//     while (l1 && l2) {
//         if(l1.val <l2.val){
//             preHead.next = l1
//             l1 = l1.next
//         }else{
//             preHead.next = l2
//             l2 = l2.next
//         }
//         preHead = preHead.next
//     }
//     preHead.next = l1 ? l1 :l2
//     return result.next
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//     const preHead = new ListNode()
//     for (let index = 0; index < lists.length; index++) {
//         preHead.next  = mergeTwoLists(preHead.next,lists[index])
//     }
//     // console.log(link);
//     console.log(preHead.next);
// };
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
class PriorityNode {
    constructor(link,priotiry){
        this.link = link
        this.priotiry = priotiry
    }
}
class PriorityMinHeap{
    constructor(){
        //第0个元素不存储，从1开始存储
        this.heap = [new ListNode(),]
    }
    
    insert(link,priotiry){
        //插入新的数据，并对数据排序使得最小的元素在堆顶
        this.heap.push(new PriorityNode(link,priotiry))
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        //元素上浮，和父元素比较大小，
        const parentIndex = this.getParentIndex(index)
        if(index === 0 || parentIndex === 0) return
        if (this.heap[parentIndex].priotiry > this.heap[index].priotiry) {
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
        const {link} = this.heap[1]
        if(this.getSize() > 1){
            this.heap[1] = this.heap.pop()
            this.shiftDown(1)
        }else{
            this.heap.pop()
        }
        return link
    }

    shiftDown(index){
        //元素下沉，和子元素比较大小
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        
        if (this.heap[leftIndex] && this.heap[leftIndex].priotiry <this.heap[index].priotiry) {
            this.swap(leftIndex,index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].priotiry <this.heap[index].priotiry) {
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let preHead = new ListNode()
    const heap = new PriorityMinHeap()
    let result = preHead

    for (let index = 0; index < lists.length; index++) {
        const link = lists[index]
        if(link){
            heap.insert(link,link.val)
        }
    }

    while (heap.getSize()) {
        const link = heap.delete()
        preHead.next = link
        preHead = preHead.next
        if(preHead.next){
            heap.insert(preHead.next,preHead.next.val)
        }
    }
    return result.next
};
const link1 = {
    val: 1,
    next: {
        val: 4,
        next: 
        {
            val: 5,
            next: null
        }
    }
}
const link2 = {
    val: 1,
    next: {
        val: 3,
        next: 
        {
            val: 4,
            next: null
        }
    }
}
const link3 = {
    val: 2,
    next: {
        val: 6,
        next: null
    }
}
mergeKLists([link1,link2,link3])