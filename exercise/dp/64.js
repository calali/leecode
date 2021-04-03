// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

 

// 示例 1：


// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
 

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100

// 每一格子只能往右或往下走。那么当前某一个格子的最小路径是：从上方或左方走过来的最小路径+当前自身的值。注意边界条件，上边和左侧，只有一个方向。这样我们把整个矩阵的值都求出来，即可找获得右下角的最小路径和。
// minPathSum[m-1][n-1] = Math.min(minPathSum[m-2][n-1],minPathSum[m-2][n-2]) + grid[m-1][n-1]
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid[0].length //矩阵宽度
    const n = grid.length//矩阵高度
    const minPathSumGrid = new Array(n)
    for (let index = 0; index < n; index++) {
        minPathSumGrid[index] = new Array(m)
    }
    minPathSumGrid[0][0] = grid[0][0]

    for (let index = 1; index < m; index++) {
        minPathSumGrid[0][index] = grid[0][index] + minPathSumGrid[0][index-1]
    }
    
    for (let index = 1; index < n; index++) {
        minPathSumGrid[index][0] = grid[index][0] + minPathSumGrid[index-1][0]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const min = Math.min(minPathSumGrid[j-1][i],minPathSumGrid[j][i-1])
            minPathSumGrid[j][i] = min  + grid[j][i]
        }
    }
    return minPathSumGrid[n-1][m-1]
};

// console.log(minPathSum( [[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum( [[1,2,3],[4,5,6]]));