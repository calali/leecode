// 160. 相交链表
// 编写一个程序，找到两个单链表相交的起始节点。

// 如下面的两个链表：



// 在节点 c1 开始相交。

 

// 示例 1：



// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 

// 示例 2：



// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Reference of the node with value = 2
// 输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 

// 示例 3：



// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// 输出：null
// 输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
// 解释：这两个链表不相交，因此返回 null。
 

// 注意：

// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
//方法一 暴力解法，判断链表a中的每个节点是否存在于b中
//方法二 方法一的基础上优化把两次循环拆开，把A作为key存储在哈希表里，然后判断b在哈希表里是否有值
//方法三 因为a、b两个链表长度不一致，导致指针不能同步指导相交节点，但是如果a遍历完走b,b遍历完走a，这样两个指针走的长度就一致了。当他们有共同节点，肯定可以同时指向共同节点。

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
// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return null
//     let pointA = headA,pointB = headB
//     while (pointA) {
//         while (pointB) {
//             if(pointA === pointB){
//                 return pointA
//             }
//             pointB = pointB.next
//         }
//         pointA = pointA.next
//         pointB = headB
//     }
//     return null
// };
// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return null
    
//     const headAMap = new WeakMap()
//     let pointA = headA,pointB = headB

//     while (pointA) {
//         headAMap.set(pointA,true)
//         pointA = pointA.next
//     }

//     while (pointB) {
//         if(headAMap.get(pointB)){
//             return pointB
//         }
//         pointB = pointB.next
//     }
//     return null
// };
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null

    let pointA = headA,pointB = headB,firstCrossFromAToB = false,firstCrossFromBToA = false

    while (pointA && pointB) {
        if(pointA === pointB){ 
            return pointA
        }

        pointA = pointA.next

        if(pointA === null && !firstCrossFromAToB){
            firstCrossFromAToB = true
            pointA = headB
        }

        pointB = pointB.next
        if(pointB === null && !firstCrossFromBToA){
            firstCrossFromBToA = true
            pointB = headA
        }    
    }
    return null
};

const commonLink = {
    val:3,
    next:null
}
let linkA = {
    val:1,
    next:{
        val:2,
        next:commonLink
    }
}

let linkB = {
    val:4,
    next:commonLink
}
// 第一轮 1 4 
// 第二轮 2 3
// 第三轮 
const a =getIntersectionNode(linkA,linkB)
console.log(a);