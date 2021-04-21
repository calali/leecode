// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。



// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和 / 或小写）组成

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  const dp = new Array(len)
  let maxSubStr = ''
  for (let i = 0;i < len;i++) {
    dp[i] = new Array(len).fill(0)
  }

  for (let j = 0;j < len;j++) {
    for (let i = 0;i <= j;i++) {
      if (s[i] === s[j]) {
        if ((j - i) < 2 || dp[i + 1][j - 1]) {
          dp[i][j] = j - i + 1
          if(dp[i][j] > maxSubStr.length){
            maxSubStr = s.substring(i,j+1)
          }
        }
      }
    }
  }
  return maxSubStr
};