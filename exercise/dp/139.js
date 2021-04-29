// 139. 单词拆分
// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
// 注意你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false

思路，判断字符串s是否可以被一系列子字符串组合而成。
以s = "leetcode", wordDict = ["leet", "code"]为例，leet可以被子字符串组合而成，剩下的code也可以被子字符串组合而成，因此整个字符串可以成功组合。
由此可以发现整体结果取决于阶段结果，考虑使用动态规划。

dp[i]表示[0, i) 之间的字符串能否被子字符串组合。目标求dn[s.length]

dp[i] = dp[j] + check([j, i-j))。j从0开始到i,j从1开始到s.length。




/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(n+1).fill(false)
  dp[0] = true

  for (let i = 1;i <= n;i++) {
    for (let j = 0;j < i;j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

const s = "leetcode", wordDict = ["leet", "code"]

console.log(wordBreak(s, wordDict));