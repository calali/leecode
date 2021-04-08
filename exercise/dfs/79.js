// 79. 单词搜索
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
 

// 提示：

// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

// 当前字符开始遍历完没有找到，不能结束，要把所有的字符都遍历完。如果当前开始的字符找到了单词，那么就结束遍历，立即返回true。

//保证比较的字符都在边界内

//标记字符是否使用过
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length

    const visited = new Array(rows)
    for (let index = 0; index < rows; index++) {
        visited[index] = new Array(cols).fill(false)
    }

    const nextArr = [[-1,0],[0,1],[1,0],[0,-1]]

    const isInBoard=(x,y)=>{
        return x>=0 && x < rows && y >=0 && y < cols
    }

    const dfs =(x,y,index)=>{
        const str = board[x][y]
        if(index === word.length-1){
            return str === word[index]
        }
        if(str === word[index]){
            visited[x][y] =true
            //比较下一个字符
            for (let i = 0,l = nextArr.length; i < l; i++) {
                const [xRange,yRange] = nextArr[i]
                const newX = x + xRange
                const newY = y + yRange
                if(isInBoard(newX,newY) && !visited[newX][newY]){
                    const res = dfs(newX,newY,index+1)
                    if(res){
                        return true
                    }else{
                        //这里不能直接返回false。要等其他的相邻字符串也遍历完才能返回false
                    }
                }
            }
            visited[x][y] = false
        }
        return false
    }

    // 对矩阵里的每一个字符作为开始进行深度优先遍历
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(dfs(i,j,0)){
                return true
            }
        }
    }
    return false
};
const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board,"ABCCED") === true);
console.log(exist(board,"SEE") === true);
console.log(exist(board,"ABCB")===false);

const board1 = [["a",'a']]

console.log(exist(board1,"aaa")===false);