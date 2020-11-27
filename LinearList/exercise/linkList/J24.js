// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//第二种解法，一个for循环搞定
// var reverseList = function(head) {
//     let prev = null
//     while(head){
//         const next = head.next
//         head.next = prev //反转链表，指向上一项
//         //prev和current指针向后移动
//         prev = head
//         head = next
//     }
//     return prev
// }

//第三种解法，用栈写出来
// var reverseList = function(head) {
//     //递归的基线条件即结束条件
//     const arr = []
//     while (head) {
//         arr.push(head.val)
//         head = head.next
//     }
//     let prev = null
//     for (let index = 0; index < arr.length; index++) {
//         const current ={
//             val:arr[index],
//             next:prev
//         }
//         prev = current
//     }
//     return prev
// }

//递归实现
var reverseList = function(head) {
    //递归的基线条件即结束条件
    if(!head ||!head.next) return head
    //进行递归
    //result永远保存的是最后一项
    const  result = reverseList(head.next)
    const next = head.next
    //下一项指向上一项
    next.next = head
    //上一项默认指向null
    head.next = null
    return result
}


const link = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}
console.log(reverseList(link));
