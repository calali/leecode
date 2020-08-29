// 剑指 Offer 54. 二叉搜索树的第k大节点
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    //左边的比他小，右边的比他大
    //按照右根左的顺序遍历完就行
    const result = []
    const stack = []
    while ((root || stack.length) && result.length !== k) {
        while(root){
            stack.push(root)
            root = root.right
        } 
        if(stack.length){
            const item = stack.pop()
            result.push(item.val)
            root = item.left
        }
    }
    return result.pop()
};