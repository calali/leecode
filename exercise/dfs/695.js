
// 评论(494)
// 题解(869)
// 提交记录
// 695. 岛屿的最大面积
// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1(代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)



// 示例 1:

// [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
// [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

// 示例 2:

// [[0, 0, 0, 0, 0, 0, 0, 0]]
// 对于上面这个给定的矩阵, 返回 0。



// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
function isInGrid(grid, i, j) {
    const horizonalLen = grid.length
    const verticalLen = grid[0].length
    if ((i >= 0 && i < horizonalLen) && (j >= 0 && j < verticalLen)) { return true }
    return false
}
function dfs(grid, i, j) {
    //基线条件
    if (!isInGrid(grid, i, j)) return 0

    //只需要遍历未遍历过的岛屿
    if (grid[i][j] !== 1) return 0

    grid[i][j] = 2 //表示已经遍历过该节点
    //递归子节点
    return 1 + dfs(grid, i - 1, j) + dfs(grid, i + 1, j) + dfs(grid, i, j - 1) + dfs(grid, i, j + 1)
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let result = 0
    for (let i = 0, l = grid.length;i < l;i++) {
        const line = grid[i]
        for (let j = 0, n = line.length;j < n;j++) {
            //对每个元素进行遍历
            const current = grid[i][j]
            if (current === 1) {
                result = Math.max(result, dfs(grid, i, j))
            }
        }

    }
    return result
};