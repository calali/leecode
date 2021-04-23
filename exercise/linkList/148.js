// 148. 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：

// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？


// 示例 1：


// 输入：head = [4, 2, 1, 3]
// 输出：[1, 2, 3, 4]
// 示例 2：


// 输入：head = [-1, 5, 3, 4, 0]
// 输出：[-1, 0, 3, 4, 5]
// 示例 3：

// 输入：head = []
// 输出：[]

// 思路：对链表进行排序，可以转换成对数组进行排序，再构构建成链表。
// 提示：

// 链表中节点的数目在范围[0, 5 * 104] 内
//   - 105 <= Node.val <= 105



//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const arr = []
  while(head){
    arr.push(head.val)
    head = head.next
  }
  const sortedArr = arr.sort((a,b)=>a-b)

  const len = sortedArr.length
  const dummyHead = new ListNode()
  let pointer = dummyHead
  for (let i = 0; i < len; i++) {
    const node = new ListNode(sortedArr[i])
    pointer.next = node
    pointer = pointer.next
  }
  return dummyHead.next
};

const linkedList = {
  val:4,
  next:{
    val:3,
    next:{
      val:2,
      next:null
    }
  }
}

console.log(sortList(linkedList));