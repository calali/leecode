// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

//  

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
//  

// 提示：

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4

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
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)       
         this.next = (next===undefined ? null : next)
     }
var mergeKLists = function(lists) {
    //将多重链表变成一个新的一维数组
    const arr = []
    const len = lists.length
    for (let index = 0; index < len; index++) {
        let node = lists[index];
        while (node) {
            arr.push(node.val)
            node = node.next
        }
    }
    //排序
    const sortArr = arr.sort((a,b)=>a-b)
    //重新输出链表
    let newHead = null
    while (sortArr.length) {
        const item = sortArr.pop()
        const node = new ListNode(item)
        node.next = newHead
        newHead = node
    }
    return newHead
}
const l1 = {
    val:1,
    next:{
        val:3,
        next:null
    }
}
const l2 = {
    val:2,
    next:{
        val:3,
        next:null
    }
}
const lists = [l1,l2]
console.log(mergeKLists(lists));