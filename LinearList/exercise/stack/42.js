// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

// 示例 1：



// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9
 

// 提示：

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
//暴力解法
//对于每个i求<=i的左侧的最大值和右侧的最大值，和最大值中的小的那个的差值就是当前可以乘的雨水
//第一个和最后一个 由于左边或右边没有值，因此肯定不能乘雨水，因此不进行计算
// var trap = function(height) {
//     const len = height.length
//     let result = 0
    
//     for (let i = 1; i < (len -1); i++) {
//         const currentHeight = height[i]
//         let max_left = 0
//         let max_right = 0
        
//         for (let j = i; j >=0; j--) {
//             max_left = Math.max(max_left,height[j])
//         }
//         for (let k = i; k<len; k++) {
//             max_right = Math.max(max_right,height[k])
//         }

//         const num =  Math.min(max_left,max_right)-currentHeight

//         result +=num
//     }
//     return result
// };

//暴力解法优化
//不要在遍历中计算左侧和右侧顶峰，而是一开始就计算好。把双重循环分开从而降低时间复杂度
// var trap = function(height) {
//     const len = height.length
//     let result = 0

//     const max_left = new Array(len).fill(0)
//     const max_right = new Array(len).fill(0)
//     max_left[0] = height[0]
//     for (let i = 1; i < len; i++) {
//         max_left[i] = Math.max(height[i],max_left[i-1])
//     }
    
//     console.log(max_left);

//     max_right[len-1] = height[len-1]
//     for (let i = (len-2); i >=0; i--) {
//         max_right[i] = Math.max(height[i],max_right[i+1])
//     }

//     for (let i = 1; i < (len-1); i++) {
//         result += (Math.min(max_left[i],max_right[i]) - height[i])
//     }

//     return result
// };

//单调队列存储凹槽
var trap = function(height) {
    const len = height.length
    let result = 0

    //单调递减，用来存储凹槽及左侧
    const stack = []


    for (let i = 0; i < len; i++) {
        while ( stack.length && height[i] > height[stack[stack.length-1]]){
            const bottom = stack.pop()
            if(!stack.length) break
            if(i === 5){
                console.log('stack',stack);
                // console.log('cut',height[top],height[i]);
            }
            
            const top = stack[stack.length-1]
            
            const distance = i - top -1
            result += (distance * (Math.min(height[top],height[i]) -height[bottom]))
        }
        stack.push(i)
    }
    
    return result
};
// console.log(trap([0,1,0,2])); //1
// console.log(trap([2,1,0,1,3])); //4
// console.log(trap([3,2,1,2,1])); //1

console.log(trap([4,2,0,3,2,5]));