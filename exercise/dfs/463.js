// 463. 岛屿的周长
// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。



// 示例 1：



// 输入：grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边
// 示例 2：

// 输入：grid = [[1]]
// 输出：4
// 示例 3：

// 输入：grid = [[1, 0]]
// 输出：4


// 提示：

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] 为 0 或 1

// 岛屿的遍历问题在200题中说过dfs的遍历方法。这里求岛屿的周长。观察可以发现岛屿的周长是在遍历过程中从岛屿走下一个水域或边界时加1。这样就可以把周长和dfs遍历联系起来。
function isInGrid(grid, i, j) {
    const horizonalLen = grid.length
    const verticalLen = grid[0].length
    if ((i >= 0 && i < horizonalLen) && (j >= 0 && j < verticalLen)) { return true }
    return false
}
function dfs(grid, i, j) {
    //从岛屿到边界+1
    if (!isInGrid(grid, i, j)) return 1

    //从岛屿到水域+1
    if (grid[i][j] === 0) return 1

    //从岛屿到已经遍历过的岛屿，不加
    if (grid[i][j] !== 1) return 0

    grid[i][j] = 2 //表示已经遍历过该节点
    //递归子节点
    return dfs(grid, i - 1, j) + dfs(grid, i + 1, j) + dfs(grid, i, j - 1) + dfs(grid, i, j + 1)
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    for (let i = 0, l = grid.length;i < l;i++) {
        const line = grid[i]
        for (let j = 0, n = line.length;j < n;j++) {
            //对每个元素进行遍历
            const current = grid[i][j]
            if (current === 1) return dfs(grid, i, j)
        }
    }
};