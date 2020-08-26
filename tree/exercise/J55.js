// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) { return true }
    //对于任意节点都满足左右子树深度差小于等于1，任一不满足则可以跳出递归
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return false
    }else{
        return isBalanced(root.left) && isBalanced(root.right)
    }
}

function getDepth(root) {
    if (root) {
        const leftDepth = getDepth(root.left)
        const rightDepth = getDepth(root.right)
        return Math.max(leftDepth, rightDepth) + 1
    } else {
        return 0
    }
}