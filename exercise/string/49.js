// 49. 字母异位词分组
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  const len = strs.length

  for (let i = 0; i < len; i++) {
    const sortedStr = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('')
    if(!map.get(sortedStr)){
      map.set(sortedStr,[])
    }
    const arr = map.get(sortedStr)
    arr.push(strs[i])
  }

  console.log(map);
  const result = []

  map.forEach(strArr => result.push(strArr))
  return result
};

const str = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(str));