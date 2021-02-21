// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

 

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
 

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//一个指针指向左节点时，另一个指向右节点
function check(p,q) {
    if(!p && !q)return true
    if(!p || !q)return false
    return p.val === q.val && check(p.left,q.right) && check(p.right,q.left)
}
function check(p,q) {
    const queue = []
    queue.push(p,q)

    while (queue.length) {
        const p1 = queue.shift()
        const q1 = queue.shift()

        if(!p1 && !q1) continue
        if(!p1 || !q1) return false
        if(p1.val !== q1.val) return false
        
        queue.push(p1.left,q1.right)
        queue.push(p1.right,q1.left)
    }

    return true
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root,root)
};
//对称二叉树，从根节点作为垂线，左右两侧对称。
// const tree = {
//     val:1,
//     left:{
//         val:2,
//         left:{
//             val:3,
//             left:null,
//             right:null
//         },
//         right:{
//             val:3,
//             left:null,
//             right:null
//         }
//     },
//     right:{

//     }
// }