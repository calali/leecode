// 221. 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。



// 示例 1：


// 输入：matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
// 输出：4
// 示例 2：


// 输入：matrix = [["0", "1"], ["1", "0"]]
// 输出：1
// 示例 3：

// 输入：matrix = [["0"]]
// 输出：0


// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] 为 '0' 或 '1'


以每个点作为可以组成的正方形的右下角。

dp[i][j]这个正方形的最大边长，

当matrix[i][j] = 1时，
dp[i][j] = Math.min(dp[i-1,j-1],dp[i][j-1],dp[i-1][j]) + 1

matrix[i][j] = 0,dp[i][j] = 0

边界条件，第一行和第一列的最大正方形最多只能是1

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = new Array(m)
  let maxLen = 0

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(matrix[i][j] === '1'){
        if (i === 0 || j === 0){
          dp[i][j] = 1
        }else{
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        }
        maxLen = Math.max(maxLen, dp[i][j])
      }
    }
  }
  return maxLen * maxLen
};

const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]

console.log(maximalSquare(matrix));