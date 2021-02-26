// 234. 回文链表
// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
//是否为回文链表，即链表是否相对一个节点进行左右对称，这里可以考虑使用栈，当栈顶和当前节点一致时，依次出栈判断。这里用栈要把所有的元素存进去，否则不知道整个链表的情况
//变成数组两端开始比较
//变成栈比较
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     let pointer = head
//     const stack = []
//     while (pointer) {
//         stack.push(pointer.val)
//         pointer = pointer.next
//     }
//     let headPointer = head
//     while (stack.length) {
//         const value = stack.pop()
//         if(headPointer.val !== value){
//             return false
//         }
//         headPointer = headPointer.next
//     }
//     return true
// };
var isPalindrome = function(head) {
    let pointer = head
    const arr = []
    while (pointer) {
        arr.push(pointer.val)
        pointer = pointer.next
    }
    //遍历数组判断是否对称
    const len = arr.length
    for (let index = 0,n = Math.floor(len/2); index < n; index++) {
        const rightIndex = len - 1 - index
        if(arr[index] !== arr[rightIndex]){
            return false
        }
    }
    return true
};
let linkA = {
    val:1,
    next:{
        val:2,
        next:{
            val:2,
            next:null
            // next:{
            //     val:1,
            //     next:null
            // }
        }
    }
}


const result = isPalindrome(linkA)
console.log(result);