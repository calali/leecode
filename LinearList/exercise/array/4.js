// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

//  

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：

// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：

// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：

// 输入：nums1 = [2], nums2 = []
// 输出：2.00000
//  

// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//需要把数组合并并排序，然后取中间值
//需要考虑边界情况，这是最好处理的
// var findMedianSortedArrays = function(nums1, nums2) {
    
//     const mergeArr = nums1.concat(nums2).sort((a,b)=>a-b)
//     const len = mergeArr.length
//     return len%2 === 0 ? (mergeArr[Math.round(len/2)-1]+mergeArr[Math.round(len/2)])/2:mergeArr[Math.round(len/2-1)]
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//     //手动排序
//     const mergeArr = nums1.concat(nums2).sort((a,b)=>a-b)
//     const len = mergeArr.length
//     return len%2 === 0 ? (mergeArr[Math.round(len/2)-1]+mergeArr[Math.round(len/2)])/2:mergeArr[Math.round(len/2-1)]
// };

/*
* 二分解法
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function(nums1, nums2) {
    //在两个数组上分别找分界线的位置，从而使得分界线左边的就是要找的左侧的数组范围，分界线右边是要找的右侧数组范围
    //在短的数组上做二叉查找，减少查找的次数
    if(nums1.length >nums2.length){
        [nums1,nums2] = [nums2,nums1]
    }

    const n = nums1.length
    const m = nums2.length
    //数组nums1上的查找范围
    let low = 0
    let high = n
    while (low <=high) {
        //数组nums1的二分位置
        const i = low + Math.floor((high-low)/2)
        //数组nums2的二分位置
        const j = Math.floor((n+m+1)/2)-i

        const left1 = i === 0 ? -Infinity: nums1[i-1]
        const right1 = i === n ? Infinity: nums1[i]

        const left2 = j === 0 ? -Infinity: nums2[j-1]
        const right2 = j === m ? Infinity: nums2[j]
        console.log(i,j);
        if(left1 <= right2 && left2 <= right1){
            return (m+n)%2 === 1 ? Math.max(left1,left2) :(Math.max(left1,left2)+Math.min(right1,right2))/2
        }else if(left2> right1){
            low = low + 1
        }else{
            high = high -1 
        }
    }
};


// console.log(findMedianSortedArrays([1,2],[3]));
console.log(findMedianSortedArrays([1,2,6],[3,4,5,7]));