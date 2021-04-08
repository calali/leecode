// 827. 最大人工岛
// 在二维地图上， 0代表海洋， 1代表陆地，我们最多只能将一格 0 海洋变成 1变成陆地。

// 进行填海之后，地图上最大的岛屿面积是多少？（上、下、左、右四个方向相连的 1 可形成岛屿）

// 示例 1:

// 输入: [[1, 0], [0, 1]]
// 输出: 3
// 解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
// 示例 2:

// 输入: [[1, 1], [1, 0]]
// 输出: 4
// 解释: 将一格0变成1，岛屿的面积扩大为 4。
// 示例 3:

// 输入: [[1, 1], [1, 1]]
// 输出: 4
// 解释: 没有0可以让我们变成1，面积依然为 4。
// 说明:

// 1 <= grid.length = grid[0].length <= 50
// 0 <= grid[i][j] <= 1
实现思路是先遍历岛屿，计算出每个岛屿的面积和岛屿范围。

然后遍历水域，看看水域相邻的地方有以下情况
1.水域周围没有岛屿，
2. 水域周围1个岛屿
3.水域周围2个岛屿
4.水域周围2个以上岛屿


最后返回最大的面积和。

function isInGrid(grid, i, j) {
    const horizonalLen = grid.length
    const verticalLen = grid[0].length
    if ((i >= 0 && i < horizonalLen) && (j >= 0 && j < verticalLen)) { return true }
    return false
}
function dfs(grid, i, j) {
    //基线条件
    if (!isInGrid(grid, i, j)) return

    //只需要遍历未遍历过的岛屿
    if (grid[i][j] !== '1') return

    grid[i][j] = '2' //表示已经遍历过该节点
    //递归子节点
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    const map = new WeakMap() //key是岛屿范围，value是岛屿面积
    let result = 0

    for (let i = 0, l = grid.length;i < l;i++) {
        const line = grid[i]
        for (let j = 0, n = line.length;j < n;j++) {
            //先遍历岛屿，计算出每个岛屿的面积和岛屿范围。
            const current = grid[i][j]
            if (current === 1) {
                const [range,value] = dfs(grid, i, j)
                map.set(range,value)
             }

        }
    }

    for (let i = 0, l = grid.length;i < l;i++) {
        const line = grid[i]
        for (let j = 0, n = line.length;j < n;j++) {
            //遍历水域，看看水域相邻的地方是否有2个岛屿。如果有，返回连接后的面积和。
            const current = grid[i][j]
            if (current === 0) {
                //节点周围至多有2个岛屿
                result = Math(result, concatTwoIsland(map, grid, i, j))
            }
        }
    }


    return result
};