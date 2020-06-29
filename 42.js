// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

//  

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//  

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //何时开始一个子串，何时结束一个子串？
    const len = nums.length
    let lastMax = nums[0] //存放上一个最大值
    for(var i =1;i<len;i++){
        const val = nums[i]
        if((val+lastMax) > lastMax){
            lastMax = val +lastMax
        }else{
            if(val > lastMax){
                lastMax = val
            }
        }
    }
    return lastMax
};
// var  nums = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubArray(nums));
// console.log(maxSubArray([-2,-1,-3]));

console.log(maxSubArray([-2,1,3]));