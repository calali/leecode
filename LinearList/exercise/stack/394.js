// 394. 字符串解码
// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"
// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//     const numberReg = /[0-9]/ //有可能是多位数

//     const preStrStack = []
//     const numStack = []

//     let numStr = ''
//     let result = ''

//     for (let index = 0; index < s.length; index++) {
//         if(numberReg.test(s[index])){
//             //存储数字
//             numStr += s[index]
//         }else if (s[index] === '['){
//             numStack.push(parseInt(numStr,10))
//             preStrStack.push(result)

//             result = ''
//             numStr = ''
//         }else if(s[index] === ']'){
//             //执行出栈
//             const num = numStack.pop()
//             const preStr = preStrStack.pop()
//             result = preStr + result.repeat(num)
//         }else {
//             result +=s[index]
//         }
//     }
//     return result
// };
var decodeString = function(s,index = 0) {
    const numberReg = /[0-9]/ //有可能是多位数

    return recursion(s,0)

    function recursion(s,i) {
        let numStr = ''
        let result = ''

        for (let index = i; index < s.length; index++) {
            if(numberReg.test(s[index])){
                //存储数字
                numStr += s[index]
            }else if (s[index] === '['){
                //进入下一个递归
                const aa = recursion(s,index+1)
                // console.log('aa',aa);
                const [repeatStr, nextIndex] = aa
                const num = parseInt(numStr,10)
                // console.log(123,repeatStr,num);
                result += repeatStr.repeat(num)
                numStr = ''
                index = nextIndex
            }else if(s[index] === ']'){
                //递归函数结束
                return [result,index+1]
            }else {
                result +=s[index]
            }
        }
        return result
    }
};
// console.log(decodeString("3[a2[c]b]"))
// console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("2[abc]3[cd]ef"));
// console.log(decodeString("abc3[cd]xyz"))
