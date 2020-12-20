// 987. 二叉树的垂序遍历
// 给定二叉树，按垂序遍历返回其结点值。

// 对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。

// 把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。

// 如果两个结点位置相同，则首先报告的结点值较小。

// 按 X 坐标顺序返回非空报告的列表。每个报告都有一个结点值列表。

 

// 示例 1：



// 输入：[3,9,20,null,null,15,7]
// 输出：[[9],[3,15],[20],[7]]
// 解释： 
// 在不丧失其普遍性的情况下，我们可以假设根结点位于 (0, 0)：
// 然后，值为 9 的结点出现在 (-1, -1)；
// 值为 3 和 15 的两个结点分别出现在 (0, 0) 和 (0, -2)；
// 值为 20 的结点出现在 (1, -1)；
// 值为 7 的结点出现在 (2, -2)。
// 示例 2：



// 输入：[1,2,3,4,5,6,7]
// 输出：[[4],[2],[1,5,6],[3],[7]]
// 解释：
// 根据给定的方案，值为 5 和 6 的两个结点出现在同一位置。
// 然而，在报告 "[1,5,6]" 中，结点值 5 排在前面，因为 5 小于 6。
 

// 提示：

// 树的结点数介于 1 和 1000 之间。
// 每个结点值介于 0 和 1000 之间。

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
var verticalTraversal = function(root) {
    const map = {}

    function preOrder (root,x=0,y=0){
        const item = {
            y,
            val:root.val
        }
        
        if(!map[x]){
            map[x] = [item]
        }else{
            map[x].push(item)
        }
        if(root.left !== null){
            preOrder(root.left,x-1,y-1)
        }
        if(root.right !== null){
            preOrder(root.right,x+1,y-1)
        }
    }

    preOrder(root)
    
    //找出最小值的下标，映射成数组的第一项
    const minIndex = Math.min(...Object.keys(map).map(key => parseInt(key,10)))
    const distance = minIndex >=0 ? 0: Math.abs(minIndex)
    
    const result = []
    Object.keys(map).map(key=>{
        const sortedArr = map[key].sort((a,b)=>{
            const yIndex =  b.y -a.y
            if(yIndex === 0){
                return b.val-a.val
            }
            return yIndex
        })
        result[parseInt(key,10)+distance] = sortedArr.map(item=>item.val)
    })

    return result
};

var a = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        },
    }
}

console.log(verticalTraversal(a));