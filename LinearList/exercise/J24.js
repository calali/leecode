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
var reverseList = function(head) {
    let node = head
    let arr = []
    while(node.next){
        arr.push(node.next)
        node = node.next
    }
    const len = arr.length-1
    let newNode = head
    for (let index = len; index >=0; index--) {
        if(index === 0){
            newNode.next = null
        }else{
            newNode.next = arr[index]
            newNode = arr[index]
        }
    }
    return head
}