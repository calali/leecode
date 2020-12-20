// 20. 有效的括号
// 给定一个只包括 '('，，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true
    const pairMap = {
        ')':'(',
        '}':'{',
        ']':'[',
    }
    const stack = []

    for (const str of s) {
        if(Object.values(pairMap).includes(str)){
            stack.push(str)
        }else{
            //匹配相同的出栈
            const pairItem = pairMap[str]
            const inItem = stack.pop()
            if(pairItem !== inItem){
                return false
            }
        }
    }
    return stack.length ===0 ? true:false
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
//遍历字符串，把所有的字符串入栈，再进行右侧匹配，匹配到就出栈，直至遍历完字符串且所有都出栈，就是有效的
