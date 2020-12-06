// 145. 二叉树的后序遍历
// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]
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
//后续遍历 左、右、根
// var postorderTraversal = function(root) {
//     if(!root)return []
//     const leftResult = postorderTraversal(root.left)
//     const rightResult = postorderTraversal(root.right)
//     return [...leftResult,...rightResult,root.val]
// };

// var postorderTraversal = function(root) {
//     if(!root)return []
//     //迭代实现
//     const result = []
//     const stack = []
//     while(root || stack.length){
//         if(root.left){
//             stack.push(root)
//             root = root.left
//         }else if(root.right){
//             stack.push(root)
//             root = root.right
//         }else{
//             result.push(root.val)
//             root = stack.pop()
//             if(root && root.left){root.left = null}
//             else if(root && root.right){root.right = null}
//         }
//     }
// };


// var postorderTraversal = function(root) {
//     if(!root) return []
//     const result = []
//     const stack = []
//     stack.push(root)
//     while (root || stack.length) {
//         result.push(root.val)
//         if(node.right) stack.push(node.right)
//         if(node.left) stack.push(node.left)
//         root = stack.shift()

//     }
//     return result
// };


const postorderTraversal = root => {
    let res = [], stack = []
    while (root || stack.length) {
        res.unshift(root.val)
        if(root.left)stack.push(root.left)
        if(root.right)stack.push(root.right)
        root = stack.pop()
    }
    return res
}
 