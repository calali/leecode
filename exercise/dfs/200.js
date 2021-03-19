// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和 / 或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。



// 示例 1：

// 输入：grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]
// 输出：3


// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'
function isInGrid(grid, i, j) {
    const horizonalLen = grid.length
    const verticalLen = grid[0].length
    if ((i >= 0 && i < horizonalLen) && (j >= 0 && j < verticalLen)) { return true}
    return false
}
function dfs(grid,i,j) {
    //基线条件
    if (!isInGrid(grid, i, j)) return

    //只需要遍历未遍历过的岛屿
    if(grid[i][j] !== '1') return

    grid[i][j] = '2' //表示已经遍历过该节点
    //递归子节点
    dfs(grid,i-1,j)
    dfs(grid, i + 1, j)
    dfs(grid, i , j-1)
    dfs(grid,i,j+1)
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let result = 0
    for (let i = 0,l = grid.length; i < l; i++) {
        const line = grid[i]
        for (let j = 0,n= line.length; j < n; j++) {
            //对每个元素进行遍历
            const current = grid[i][j]
            if(current === '1'){++result}
            dfs(grid,i,j)
        }

    }
    return result
};

// const grid = [
//      ["1", "1", "1", "1", "0"],
//      ["1", "1", "0", "1", "0"],
//      ["1", "1", "0", "0", "0"],
//      ["0", "0", "0", "0", "0"]
//  ]
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
console.log(numIslands(grid));