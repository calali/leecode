// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1
//  

// 提示：

// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。

// 可以挨个查找，但是复杂度将是n
//二分查找


var search = function(nums, target) {
    //二分查找元素,取居中的元素
    var low = 0
    var high = nums.length -1

    //如果target小于middle则继续找左侧的，否则继续找右侧的
    var index = -1

    while(low <=high){
        const middleIndex = Math.ceil((low+high)/2)
        const middleValue = nums[middleIndex]
        if(target < middleValue){
            high = middleIndex -1
        }else if(target > middleValue){
            low = middleIndex +1
        }else{
            index = middleIndex
            break
        }
    }
    return index
};
// var search = function(nums, target) {
//     const len = nums.length
//     var index = -1
//     //循环查找
//     for(var i =0;i< len;i++){
//         if(target === nums[i]){
//             index = i
//             break
//         }
//     }
//     return index
// };

console.log(search([1,3,5,7,8],2));
// console.log(search([-1,0,3,5,9,,10,12],12));
// console.log(search([-1,0,3,5,9,12],-1));
// console.log(search([-1,0,3,5,9,12],2));
// console.log(search([-1,0,3,5,9,12],9));
