// 240. 搜索二维矩阵 II
// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
 

// 示例 1：


// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true
// 示例 2：


// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// 输出：false
 
// 矩阵水平方向上递增，垂直方向上递增。

// 查找某一个数值的位置，可以考虑对每行依次进行二分查找。

// 这种方法没有利用矩阵纵向上也是递增的特性。考虑矩阵纵向上也是递增的，是否可以将整个矩阵排序呢？这样可以查找某个数值。

// 尝试从矩阵的4个顶点来查找。左上角两侧的都比他大，右下角两侧的都比他大。没有排序，都不行。右上角的左边的比它小，下边的比他大，可以比较和移动。同理左下角。

// 这里采用右上角进行判断。比他小就往左走，比他大就往下走。找到就退出，否则找到矩阵边界外就说明没有这个元素。

// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matix[i][j] <= 109
// 每行的所有元素从左到右升序排列
// 每列的所有元素从上到下升序排列
// -109 <= target <= 109

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const colomns = matrix[0].length

    let i = 0,j = colomns - 1

    while ((i>=0 && i < rows && j >=0 && j < colomns)) {
        if(matrix[i][j] < target){
            i+=1
        }else if(matrix[i][j] === target){
            return true
        }else {
            j-=1
        }
    }
    return false
};