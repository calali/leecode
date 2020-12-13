// 剑指 Offer 36. 二叉搜索树与双向链表
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

// 为了让您更好地理解问题，以下面的二叉搜索树为例：

 



 

// 我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

// 下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 



 

// 特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} cur
 * @return {Node}
 */

var treeToDoublyList = function(root) {
    if(!root) return null

    let head = null //要返回的头结点
    let pre = null

    inOrder(root)

    function inOrder(cur){
        //递归的结束条件
        if(!cur) return null
        //中序遍历：左子树、根节点、右子树
        inOrder(cur.left)

        //走到这里说明在访问根节点了，此时的根节点没有左子节点，因此是链表的头结点。因为遍历的顺序是二叉搜索树的左子节点，且是二叉搜索树的最小值。
        //第一次访问根节点时，
        if(!pre){
            head = cur
        }else{
            pre.right = cur
        }
        cur.left = pre
        pre = cur
        
        inOrder(cur.right)
    }

    head.left = pre
    pre.right = head

    return head
};
