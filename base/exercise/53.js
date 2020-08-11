// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     const l = nums.length
//     let maxSum = nums[0]
//     for(let i = 0;i<l;i++){
//         //i开始的所有不同长度的子列和，最后取其中最大的
//         let currntMaxSum = nums[i]
//         let sum = 0
//         for(let j = i;j<l;j++){
//             //开始j结束的子列和
//             sum += nums[j]
//             if(sum >currntMaxSum){
//                 currntMaxSum  =sum
//             }
//         }
//         if(currntMaxSum > maxSum){
//             maxSum = currntMaxSum
//         }
//     }
//     return maxSum
// };


// 暴力求解
// 暴力求解优化
// 分而治之
//在线处理

var maxSubArray = function(nums) {
    const l = nums.length
    let maxSum = nums[0]
    let sum = 0

    for(let i = 0;i<l;i++){
        //i开始的所有不同长度的子列和，最后取其中最大的
        const current = nums[i]

        sum += current

        //sum需要适时地更新,如果当前加起来的和比当前数值还小，则更新起点
        if(sum < current){
            sum = current
        }

        if(sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum
};

const b = [1,2,3]
const c = [-1,-2,-3]
const a = [-2,1,-3,4,-1,2,1,-5,4] // //
console.log(maxSubArray(b));


