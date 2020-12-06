// 102. 二叉树的层序遍历

// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

// 3
// / \
// 9  20
//  /  \
// 15   7
// 返回其层次遍历结果：

// [
// [3],
// [9,20],
// [15,7]
// ]
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
    if(!root)return []
    //将同一层存储到队列，按照先进先出进行访问
    const result = []
    const queue = []
    
    queue.push({node:root,level:0})

    while(queue.length){
        const {node,level} = queue.shift()
        if(!result[level]){
            result[level] = []   
        }
        result[level].push(node.val)
        if(node.left){
            queue.push({node:node.left,level:level+1})
        }
        if(node.right){
            queue.push({node:node.right,level:level+1})
        }
    }
    return result
}

const root = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}
console.log(levelOrder(root));