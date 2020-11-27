// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 
//二叉树的左子树的所有节点都比它的根节点小，右子树的所有有节点都比它的根节点大。
//因此如果p和q比root一个小，一个大，则父节点是根节点，都小则继续往根节点的左子树变遍历，否则往根节点的右子树查找
function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
    if(!root) return null
    while(root){
        if(p < root.val && q < root.val) root = root.left
        else if(p > root.val && q > root.val)  root = root.right
        else break
    }
    return root
};