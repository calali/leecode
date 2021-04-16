// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。



// 示例 1：


// 输入：l1 = [2, 4, 3], l2 = [5, 6, 4]
// 输出：[7, 0, 8]
// 解释：342 + 465 = 807.
// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：

// 输入：l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// 输出：[8, 9, 9, 9, 0, 0, 0, 1]


// 提示：

// 每个链表中的节点数在范围[1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 题意理解，给两个不确定长度的链表，希望吧链表对应位相加并返回一个新的链表。

// 如果链表之一没有数据则为0为值。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 每个节点只保存1位数字，进位需要保存到下一个节点上
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
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let tail = head
  let advancedVal= 0 //默认要进上一位的和是0
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + advancedVal
    const currentNodeVal = sum % 10
    advancedVal = parseInt(sum / 10,10)
    console.log(sum, advancedVal);
    tail.next = new ListNode(currentNodeVal)
    tail = tail.next
    if(l1){
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if(advancedVal){
    tail.next = new ListNode(advancedVal)
  }
  return head.next
};

const l1 = {
  val:9,
  next:{
    val:9,
    next:null
  }
}

const l2 = {
  val: 9,
  next: {
    val: 9,
    next: null
  }
}

console.log(addTwoNumbers(l1, l2));