// 剑指 Offer 34. 二叉树中和为某一值的路径
// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]
 

// 提示：

// 节点总数 <= 10000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

//前序遍历：根左右
var pathSum = function(root, sum) {
    //存储满足条件的path,初始化为空
    const res = []

    //开始前序遍历
    preOrder(root,sum,[])

    function preOrder(root,target,path) {
        //空树直接返回
        if(!root)return null

        //当前根节点加入path
        path.push(root.val)

        //更新目标值
        target = target - root.val

        //目标值为0且是叶子节点，则就是我们要找的path。
        //注意这里传值都用深拷贝。因为其他的遍历还在进行，如果引用传值会导致path值混乱
        if(target === 0 && !root.left & !root.right){
            console.log(path,root);
            res.push(path)
        }

        //前序遍历：根左右
        //注意这里传值都用深拷贝。因为该节点的遍历还在进行，如果引用传值会导致path值混乱
        preOrder(root.left,target,[...path])
        preOrder(root.right,target,[...path])

        //当前根节点完全遍历完了，出栈
        path.pop()
    }

    return res
};
//               5
//              / \
//             4   8
//            /   / \
//           11  13  7



var a = {
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:null,
            right:null,
        },
        right:null
    },
    right:{
        val:8,
        right:{
            val:13,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        }
    }
}
console.log(pathSum(a,20));