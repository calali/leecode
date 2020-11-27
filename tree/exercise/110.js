// 110. 平衡二叉树

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
 * @return {boolean}
 */
function getHeight(root) {
    //左右节点的最大高度加1
    if(!root) return 0
    return 1 + Math.max(getHeight(root.left),getHeight(root.right))
}
var isBalanced = function(root) {
    if(!root) return true
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)
    if(Math.abs(leftHeight-rightHeight) <=1 && isBalanced(root.left) && isBalanced(root.right)){
        return true
    }
    return false
};