// 94. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

 

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1,2]
// 输出：[2,1]
// 示例 5：


// 输入：root = [1,null,2]
// 输出：[1,2]
 

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
 

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     //中序遍历：左子树、根、右子树
//     if(!root)return []
//     const result = []
//     const leftResult = inorderTraversal(root.left)
//     const rightResult = inorderTraversal(root.right)
//     return [...leftResult,root.val,...rightResult]
// };

var inorderTraversal = function(root) {
    //中序遍历：左子树、根、右子树
    if(!root)return []
   const stack = []
   const result = []
   //对于一个节点，要先存到栈里，然后继续到它的左节点存入栈里。直到没有节点就出栈。栈里的节点是左子节点也是根节点，要继续找他的右节点
   while (root || stack.length) {
       while (root) {
           stack.push(root)
           root = root.left
       }
       const node = stack.pop()
       result.push(node.val)
       root = node.right
   }
   return result
};