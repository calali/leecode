// // 一旦确定当前柱子的高度，就往前往后找到最长的长度。然后计算出每个横坐标的对应的高度
// // 单调栈

// 84. 柱状图中最大的矩形
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

 



// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

 



// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

 

// 示例:

// 输入: [2,1,5,6,2,3]
// 输出: 10
//暴力解法


function findMax(target,array) {
    // 找到target之后第一个小于heights[index]的下标
    let len = array.length
    let comparedValue = array[target]
    let result = len
    if(target +1 < len){
        for (let index = target +1; index < len; index++) {
            if(array[index] < comparedValue){
                result = index
                break
            }
        }
    }
    return result
}
function findMin(target,array) {
    // 找到target之前最靠近heights[index]的下标
    let len = array.length
    let comparedValue = array[target]
    let result = -1
    if(target > 0){
        for (let index = target -1; index >=0 ; index--) {
            if(array[index] < comparedValue){
                result = index
                break
            }
        }
    }
    
    return result
}
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let result = 0
    //对每个heights[i]高度找到当前的左右边界
    for (let index = 0, len = heights.length; index < len; index++) {
        const distance = findMax(index,heights) - findMin(index,heights) -1
        const area = distance * heights[index]
        if(area > result){
            result = area
        }
    }
    return result
};
//超出时间限制

/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     //单调栈解法，保存数组的值以便确定左右界限
//     const stack = []
//     let result = 0
//     const newHeights = heights.concat([0])
//     for (let index = 0; index < newHeights.length; index++) {
//         //出栈直到top小于要入栈的值
//         while ( stack.length && newHeights[stack[stack.length-1]] > newHeights[index]) {
//                 const top = stack.pop()
//                 const leftBorder = stack.length ? stack[stack.length-1] : -1
//                 const area = (index - leftBorder-1)*newHeights[top]
//                 if(area > result){
//                     result = area    
//                 }
//         }
//         stack.push(index)
//     }
//     return result
// };
console.log(largestRectangleArea([2,1,5,6,2,3]));//