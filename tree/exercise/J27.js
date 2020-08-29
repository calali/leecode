// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    //层级遍历，且每个左右子节点都交换
    perform(root)
    return root 
};
function perform(root){
    if(root){
        const temp = root.left
        root.left = root.right
        root.right = temp
        perform(root.left) 
        perform(root.right)
    }
}

