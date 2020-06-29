// 给你一个整数数组 nums，请你将该数组升序排列。

//  

// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
//  

// 提示：

// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const len = nums.length
    if(len < 2){
        return nums
    }else{
        //递归
        const firstValue = nums[0]
        const less = nums.filter((item,index)=>item <=firstValue && index !==0)
        const greater = nums.filter((item,index)=>item > firstValue && index !==0)
        return sortArray(less).concat([firstValue],sortArray(greater))
    }
};

// console.log(sortArray([2,1]));
console.log(sortArray([3,2,1]));
console.log(sortArray([3,6,3,2,1]));


//平均复杂度是nlogn