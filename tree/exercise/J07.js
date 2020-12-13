
// 评论 (319)
// 题解 (809)
// 提交记录
// 剑指 Offer 07. 重建二叉树
// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7
 //问题
// 肯定要循环地判断根节点和左右子节点
// 如何存储树的数据结构保证返回回来的是树的根节点呢 递归，递归存的是外面一层

// 二叉树的题目优先用递归，用迭代的都是高手

// 限制：

// 0 <= 节点个数 <= 5000
function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     if(!preorder.length){return null}

//     const [rootVal] = preorder
//     const rootIndex = inorder.findIndex(item=>item === rootVal)
   
//     const preLeft = preorder.filter((item,index)=>index <= rootIndex && index !== 0)
//     const preright = preorder.filter((item,index)=>index > rootIndex)


//     const inLeft = inorder.filter((item,index)=>index < rootIndex)
//     const inRight = inorder.filter((item,index)=>index > rootIndex)

//     const root = new TreeNode(rootVal)
//     root.left = buildTree(preLeft,inLeft)
//     root.right = buildTree(preright,inRight)

//     return root
// };

var buildTree = function(preorder, inorder) {
    // 迭代法
    if (!preorder.length) return null
    // 创建根节点
    let root = new TreeNode(preorder[0])
    let stack = [root] // 使用数组模拟栈，根节点入栈

    let inorderIndex = 0; //1

    for (let i=1; i<preorder.length; i++) {
        let  preorderVal = preorder[i]; //20
        let node = stack[stack.length-1] //9

        if (node.val !== inorder[inorderIndex]) { //9 === 9
            node.left = new TreeNode(preorderVal);
            stack.push(node.left);
        } else {
            while(stack.length !==0 && stack[stack.length-1].val == inorder[inorderIndex]) {
                node = stack.pop(); 
                inorderIndex++; 
            }
            node.right = new TreeNode(preorderVal); //20
            stack.push(node.right);
        }
    }
    return root
 };
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]));

