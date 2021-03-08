// 337. 打家劫舍 III
// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

// 示例 1:

// 输入: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \ 
//      3   1

// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
// 示例 2:

// 输入: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1

// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
// 思路是相邻的父子节点只能选一个：选了父节点，子节点就不能选；选了子节点中的一个或两个，父节点就不能选择。求最大值。
// 我们能用层序遍历来算隔层的总和吗？不能。因为我可以不选父节点但是选了子节点中的一个，仍旧得到最大值。
// 假设选一个节点的后得到的值是f(n)，不选节点得到的值是g(n)

// 那么最后根节点是f(n) 或g(n)的最大值。
// f(n) = n.val + g(n.left) + g(n.right)
// g(n) = Math.max(g(n.left),f(n.left)) + Math.max(g(n.right),f(n.right))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var rob = function(root) {
//     const fnMap = new WeakMap()
//     const gnMap = new WeakMap()

//     const dfs = (node)=>{
//         if(!node) return 
//         dfs(node.left)
//         dfs(node.right)

//         fnMap.set(node,node.val + (gnMap.get(node.left) || 0) + (gnMap.get(node.right) || 0))
//         gnMap.set(node,Math.max(gnMap.get(node.left) || 0,fnMap.get(node.left) || 0) + Math.max(gnMap.get(node.right) || 0,fnMap.get(node.right)|| 0))
//     }

//     dfs(root)
//     return Math.max(fnMap.get(root) || 0,gnMap.get(root) || 0)
// };
var rob = function(root) {

    const dfs = (node)=>{
        if(!node) return [0,0]
        const [fnLeft,gnLeft] = dfs(node.left)
        const [fnRight,gnRight] = dfs(node.right)

        const fnNode = node.val + gnLeft + gnRight
        const gnNode = Math.max(fnLeft,gnLeft) + Math.max(fnRight,gnRight)
        return [fnNode,gnNode]
    }

    const [fnRoot,gnRoot] = dfs(root)

    return Math.max(fnRoot,gnRoot)
};