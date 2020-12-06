// 剑指 Offer 33. 二叉搜索树的后序遍历序列
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

// 参考以下这颗二叉搜索树：

//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：

// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：

// 输入: [1,3,2,6,5]
// 输出: true
 

// 提示：

// 数组长度 <= 1000

/**
 * @param {number[]} postorder
 * @return {boolean}
 */

var verifyPostorder = function(postorder) {
    if(postorder.length <=2)return true
    //后序遍历结果：左右根
    //左子树比根节点小，右子树比根节点大
    const root = postorder.pop()
    let i =0
    while (postorder[i]< root) {
        i++
    }
    //i后面的都应该大于root
    const rightResult =  postorder.slice(i).every(item=>item>root)
    //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
    return rightResult && verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i))
};
verifyPostorder
[,3]

1,2,

5,10,6,9,4