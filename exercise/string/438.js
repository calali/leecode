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
    const win = s.slice(i,i + size)
    if(i === 1){
      debugger
    }
    const compareMap = getStrMap(win)
    const flag = isSameMap(compareMap)
    if (flag){
      result.push(i)
    }
  }
  return result
};


// 第一种情况，每次窗口移动一位，整个子字符串都得进行比较，重复比较多，导致时间复杂度高。

// 考虑将每次窗口移动一位，只进行一次比较。而不是O(n)的比较
// var findAnagrams = function (s, p) {
//   const res = [], win = {}, need = {}, pLen = p.length;
//   let len = 0, val = 0;
//   for (const x of p) {
//       if (need[x] === undefined) {
//           need[x] = win[x] = 0;
//           len++;
//       }
//       need[x]++;
//   }
//   for (let i = 0; i < s.length; i++) {
//       const j = i - pLen;
//       if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
//       if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
//       if (val === len) res.push(j + 1);
//   }
//   return res;
// };


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  const wholeStrLength = s.length
  const targetStrLength = p.length
  const res = []
  const win = {}
  const targetMap = {} //p里每个字符对应的数量
  let targetCharCount = 0 //p里字符的种类，比如'aa'是1
  let winCharCount = 0
  
  for (const char of p) {
    if(targetMap[char] === undefined){
      targetMap[char] = 0
      win[char] = 0
      targetCharCount+=1
    }
    targetMap[char]+=1
  }


  for (let right = 0; right <wholeStrLength ; right++) {
    const left = right - targetStrLength
    const rightChar = s[right]
    const leftChar = s[left]
    //rightChar在PStrMap就
    if(targetMap[rightChar] && ++win[rightChar] === targetMap[rightChar]) winCharCount++
    if(targetMap[leftChar] && win[leftChar]-- === targetMap[leftChar]) winCharCount--
    if(winCharCount === targetCharCount) res.push(left + 1)
  }

  return res
};

// 先自增，然后判断是否符合目标数量。符合就winCharCount自增。



console.log(findAnagrams("cbaebabacd", "abc"));
// console.log(findAnagrams("babeeeabbcd", "abb"));