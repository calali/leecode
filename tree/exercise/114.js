// 114. 二叉树展开为链表
// 给你二叉树的根结点 node ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

// 示例 1：


// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [0]
// 输出：[0]
 

// 提示：

// 树中结点数在范围 [0, 2000] 内
// -100 <= Node.val <= 100
 

// 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//思路一，把链表的节点按照先序遍历放在数组中，再串成链表。
//思路二，和思路一一样，用迭代的方法实现
//思路三，在迭代的过程中，直接串成链表？
/**
 * @param {TreeNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// var flatten = function(node) {
//     const nodeArr = []

//     const preOrderTraverse = (node)=>{
//         if(node){
//             nodeArr.push(node)
//             preOrderTraverse(node.left)
//             preOrderTraverse(node.right)
//         }
//     }

//     preOrderTraverse(node)

//     for (let index = 0,len = nodeArr.length; index < len; index++) {
//         const node = nodeArr[index]
//         node.left = null
//         node.right = nodeArr[index + 1] || null
//     }
// };
// var flatten = function(node) {
//     const nodeArr = []

//     const preOrderTraverse = (node)=>{
//         const stack = []
//         while (node || stack.length) {
//             while (node) {
//                 // 访问根节点
//                 nodeArr.push(node);
//                 stack.push(node);
//                 //访问子节点
//                 node = node.left;
//             }
//             node = stack.pop();
//             //访问右节点
//             node = node.right;
//         }
//     }

//     preOrderTraverse(node)

//     for (let index = 0,len = nodeArr.length; index < len; index++) {
//         const node = nodeArr[index]
//         node.left = null
//         node.right = nodeArr[index + 1] || null
//     }
// };

// var flatten = function(root) {

//     let last = null

//     function backFlattern(node) {
//         if(!node) return 
//         backFlattern(node.right)
//         backFlattern(node.left)

//         node.right = last
//         node.left = null
//         last = node
//     }

//     backFlattern(root)
// };
var flatten = function(root) {
    //根左右
    function helper(node) {
        if(!node) return null
        const l = helper(node.left)
        const r = helper(node.right)

        //按照前序遍历的顺序串联起来：根左右
        if(!l){
            node.right = r
        }else{
            node.right = l
            //找到左子树的最右子节点，串联上r
            let currentNode = l
            while (currentNode.right) {
                currentNode = currentNode.right
            }
            currentNode.right = r
            currentNode.left = null
            node.left = null
        }
        
        return node
    }
    root = helper(root)
    console.log(root);

};
const tree = {
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null
        },
        right:{
            val:4,
            left:null,
            right:null
        }
    },
    right:{
        val:5,
        left:{
            val:0,
            left:null,
            right:null
        },
        right:{
            val:6,
            left:null,
            right:null
        }
    }
}
const tree1 = {
    val:1,
    left:{
        val:2,
        left:null
    },
    right:null
}

flatten(tree)