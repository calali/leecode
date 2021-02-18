// 76. 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
 

// 提示：

// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成
 
/**
 * 因为t的长度在1-105之间，而且只包含英文字母，所以也会出现重复
 * 这道题目只要判断s中包含所有的t的最小子串，因此需要保证t中的数量也一致
 * 不用关心子串的顺序，但是需要关心数量，因此这里用哈希表存t的字符和数量
 * 开始时窗口的left和right都为0 
 * right向右移动，直到窗口里的在t中的字符的数量达到哈希表里的数量，这里就标记找到了一个符合条件的子串。
 * 但是要全部遍历完，才能确定哪个子串是最短的
 * 此时left向右移动，从而使map里的数量发生了变动，继续向右移动，直到找到下一个符合条件的子串。如此这般移动，直到left和right都移动完
 * /

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return ''

    const occurrenceMap = new Map()

    for (let index = 0; index < t.length; index++) {
        const current = t[index]
        if(occurrenceMap.get(current) === undefined){
            occurrenceMap.set(current,0)
        }
        occurrenceMap.set(current,occurrenceMap.get(current) + 1)
    }
    //occurrenceMap {A:1,B:1,C:1}

    let left = 0 //左指针
    let start = 0,end = 0 //子串的开始和结束的位置
    let count = 0 //当前已经找到几个
    let min = Infinity

    for (let right = 0,len = s.length; right < len; right++) {
        const current = s[right]
        if(occurrenceMap.get(current) !== undefined){
            //当前值>0说明是要找的，count+1
            if(occurrenceMap.get(current) >0){
                count +=1
            }
            //只要找到一个，出现次数就减一
            occurrenceMap.set(current,occurrenceMap.get(current)-1)
        }
        //当前子串达到目标
        while(count === t.length){
            //记录找到的子串
            if(right - left < min){
                min = right - left
                start = left
                end = right
            }
            //左指针移动前更新map和count
            if(occurrenceMap.get(s[left]) !== undefined){
                if(occurrenceMap.get(s[left]) ===0){ //可能会减少到更少
                    count -=1
                }
                occurrenceMap.set(s[left],occurrenceMap.get(s[left])+1)
            }
            //左指针向右移动
            left++
        }
    }
    if(min === Infinity) return ''
    return s.substring(start,end+1)
};
const result = minWindow(s = "ADOBECODEBANC", t = "ABC")
// const result = minWindow(s = "BECBA", t = "ABC")
// const result = minWindow(s = "a", t = "b")
// const result = minWindow(s = "a", t = "a")
// const result = minWindow(s = "ab", t = "a")
// const result = minWindow(s = "ab", t = "A")
console.log(result);