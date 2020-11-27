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
//对称的二叉树有如下特性：
// 两个节点的值相等
// 节点1的左子树和节点2的右子树相等，节点2的右子树和节点1的左子树相等
function compare(left,right) {
    //都为空则返回true
    if(!left && !right) return true
    //一个为空另一个不为空则返回false
    else if(left && !right) return false
    else if(!left && right) return false
    //两个都不为空，进一步比较
    //值不相等，返回false
    else if (left.val !== right.val) return false
    //值相等，进一步比较left的左子树和right的右子树是否对称,left的右子树和right的左子树是否对称
    else return compare(left.left,right.right) && compare(left.right,right.left)
}
var isSymmetric = function(root) {
    if(!root){return true}
    return compare(root.left,root.right)
    
};