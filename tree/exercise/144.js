// 144. 二叉树的前序遍历
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1,2]
// 输出：[1,2]
// 示例 5：


// 输入：root = [1,null,2]
// 输出：[1,2]
 

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// var preorderTraversal = function(root) {
//     const result = []
//     if(root){
//         result.push(root.val)
//         const left = preorderTraversal(root.left)
//         const right = preorderTraversal(root.right)
//         result.push(...left)
//         result.push(...right)
//     }
//     return result
// };
// var preorderTraversal = function(root) {
//     if(!root) return []
//     const result = []
//     const stack = []
//     stack.push(root)
//     while (stack.length) {
//         const node = stack.pop()
//         result.push(node.val)
//         if(node.right) stack.push(node.right)
//         if(node.left) stack.push(node.left)
//     }
//     return result
// };
var preorderTraversal = function(root) {
    if(!root)return []
    const result = []
    const stack = []
    while (root || stack.length) {
        result.push(root.val) 
        if(root.right)stack.push(root.right)
        if(root.left)stack.push(root.left)
        root = stack.pop()
    }
    return result
};

const root = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}
console.log(preorderTraversal(root));