// 48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 

// 示例 1：


// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
// 示例 2：


// 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// 示例 3：

// 输入：matrix = [[1]]
// 输出：[[1]]
// 示例 4：

// 输入：matrix = [[1,2],[3,4]]
// 输出：[[3,1],[4,2]]

// 思路 观察发现，可以先按照右上、左下的对称线把数字对称过去，然后再以中轴线水平翻转

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const len = matrix.length
    const middleNum = Math.floor(matrix.length/2) //2的矩阵对应1，3对应1
    //左上、右下的对称线把翻转
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    //以中垂线水平翻转
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < middleNum; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][len - j - 1]
            matrix[i][len - j - 1] = temp
        }
    }

    return matrix
};
// const matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
const matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
console.log(rotate(matrix));