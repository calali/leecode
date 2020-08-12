// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//两次循环可以拆开做，从而使得时间复杂度从n方降到n
// var getIntersectionNode = function(headA, headB) {
//     //两个不同的节点指向同一个节点
//     let nodeA = headA
//     let nodeB = headB.next
//     while(nodeA){
//         while(nodeB){
//             if(nodeA === nodeB){
//                 break
//             }else{
//                 nodeB = nodeB
//             }
//         }
//         nodeA = nodeA.next
//     }
//     if(nodeA === nodeB){
//         return nodeA
//     }

//     return null
// };
var getIntersectionNode = function(headA, headB) {
    //两个不同的节点指向同一个节点
    let node = headA
    const map = new Map()
    while(node){
        map.set(node,true)
        node = node.next
    }
    node = headB
    while(node){
        if(map.has(node)){
            return node
        }
        node = node.next
    }
    return null
};
