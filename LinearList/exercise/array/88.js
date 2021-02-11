// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
 

// 提示：

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109
//一暴力解法
//二双指针法
//倒序双指针法
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     const result = nums1.slice(0,m).concat(nums2).sort((a,b)=>a-b)
//     for (let index = 0; index < result.length; index++) {
//         nums1[index] = result[index]
//     }
//     console.log(nums1);
// };
// var merge = function(nums1, m, nums2, n) {
//     const result = []
//     let index1 = 0
//     let index2 = 0    
//     while (index1 < m && index2 < n) {
//         console.log(index1,index2);
//         if(nums1[index1]< nums2[index2]){
//             result.push(nums1[index1])
//             index1 = ++index1
//         }else{
//             result.push(nums2[index2])
//             index2 = ++index2
//         }
//     }
//     if(index1<m){
//         for (let index = index1; index < m; index++) {
//             result.push(nums1[index])
//         }
//     }
//     if(index2<n){
//         for (let index = index2; index < n; index++) {
//             result.push(nums2[index])
//         }
//     }
//     for (let index = 0; index < result.length; index++) {
//         nums1[index] = result[index]
//     }
//     console.log(result);
// };

//倒序双指针解法，后面的空间留着也是留着，不如用来放元素
var merge = function(nums1, m, nums2, n) {
    let index1 = m-1
    let index2 = n-1 
    let position = m + n - 1

    while (index1 >=0 && index2 >=0) {
        if(nums1[index1]< nums2[index2]){
            nums1[position--] = nums2[index2]
            index2 = --index2
        }else{
            nums1[position--] = nums1[index1]
            index1 = --index1
        }
    }
    // console.log(position,index1,index2,nums2);
    if(index1>=0){
        for (let index = index1; index >=0; index--) {
            nums1[position--] = nums1[index]
        }
    }
    if(index2>=0){
        for (let index = index2; index >=0; index--) {
            nums1[position--] = nums2[index]
        }
    }
    console.log(nums1);
};
merge([4,5,6,0,0,0],3,[1,2,3],3)
merge([1,2,3,0,0,0],3,[2,5,6],3)
merge([0],0,[1],1)