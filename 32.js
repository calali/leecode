// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

//  

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
// [
//     [3],
//     [20,9],
//     [15,7]
//   ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    for(var i=0;i<root.length;i++){
        const num = Math.pow(2,i)
        let items = root.splice(0,num).filter(item=>!!item)
            const odd = i%2 === 0 //奇数
            if(!odd){
                items = items.reverse()
            }
            result.push(items)
    }
    return result
};

console.log(levelOrder([3,9,20,null,null,15,7]));
