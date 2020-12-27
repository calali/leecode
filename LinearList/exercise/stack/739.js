// 739. 每日温度
// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const len  = T.length
    const stack = [] //维护单调递减栈
    const result = new Array(len).fill(0)

    for (let index = 0; index < len; index++) {
        while (stack.length && T[index] > stack[stack.length -1].value) {
            const topItem = stack.pop()
            result[topItem.index] = index - topItem.index
        }
        const item = {
            index,
            value:T[index],
        }
        stack.push(item)
    }
    return result
};
// var dailyTemperatures = function(T) {
//     const len  = T.length
//     const result = new Array(len).fill(0)
//     for (let index = 0; index < len; index++) {
//         for (let i = index; i < len; i++) {
//             if(T[i] > T[index]){
//                 result[index] = i - index
//                 break
//             }
//         }
//     }
//     return result
// };
//希望把上面的双重循环拆成2次顺序循环，解除嵌套，降低时间复杂度。那么如何存储第一次循环的结果呢？题目提示用栈


//如何才能把每一个需要的值提前存起来呢
//遍历当前一个，如何知道他在哪个值的范围内呢？
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));