// 438. 找到字符串中所有字母异位词
// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：

// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
// 示例 1:

// 输入:
// s: "cbaebabacd" p: "abc"

// 输出:
// [0, 6]

// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
// 示例 2:

// 输入:
// s: "abab" p: "ab"

// 输出:
// [0, 1, 2]

// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

// 思路，首先统计p中的字符以及对应字符的数量。

// 然后对每个字符进行滑动窗口，判断窗口内的字符是否是异位字符串

//超出时间限制
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const len = s.length
  const size = p.length
  const result = []

  function getStrMap(str) {
    const map = new Map()
    const arr = str.split('')
    arr.forEach(char => {
      if (!map.get(char)) {
        map.set(char, 0)
      }
      map.set(char, map.get(char) + 1)
    })
    return map
  }

  const baseMap = getStrMap(p)

  function isSameMap(targetMap) {
    if (targetMap.size === baseMap.size) {
      for (const [key,value] of baseMap) {
        if (value !== targetMap.get(key)) {
          return false
        }
      }
      return true
    }
    return false
  }

  for (let i = 0; i < len; i++) {
    const window = s.slice(i,i + size)
    if(i === 1){
      debugger
    }
    const compareMap = getStrMap(window)
    const flag = isSameMap(compareMap)
    if (flag){
      result.push(i)
    }
  }
  return result
};

console.log(findAnagrams("cbaebabacd", "abc"));