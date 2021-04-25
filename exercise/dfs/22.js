// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



// 示例 1：

// 输入：n = 3
// 输出：["((()))", "(()())", "(())()", "()(())", "()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]


// 提示：

// 1 <= n <= 8

// 生成n组有效括号，首先考虑生成n组括号。可以进行深度搜索，把所有可能的组合找出来，代码如下:

/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   const res = []

//   function dfs (str) {
//     if(str.length === 2 * n){
//       res.push(str)
//       return
//     }
//     dfs(`${str}(`)
//     dfs(`${str})`)
//   }

//   dfs('')

//   return res
// };

// 在这个过程中，生成了无效的括号组合，要避免需要剪枝。对于生成无效括号的要及时停止，写出如下代码：

var generateParenthesis = function (n) {
  const res = []

  function dfs(str,left,right) {
    if(left > n || right > left) return //right不能>n因为left要先有左括号才能有右括号
    if (str.length === 2 * n) {
      console.log(left,right,str);
      res.push(str)
      return
    }
    dfs(`${str}(`,left+1,right)
    dfs(`${str})`,left,right+1)
  }

  dfs('',0,0)

  return res
};

console.log(generateParenthesis(2));