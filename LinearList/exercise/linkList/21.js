// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

// 示例 1：


// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]
 

// 提示：

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
//解法一：迭代解法
//解法二：递归解法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1){return l2}
    if(!l2){return l1}

    if(l1.val <l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
};

const l1 = {
    val:1,
    next:{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
}
const l2 = {
    val:3,
    next:null,
    // next:{
    //     val:3,
    //     next:{
    //         val:4,
    //         next:null
    //     }
    // }
}
const result = mergeTwoLists(l1,l2)
console.log(result);