// 11. 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。

 

// 示例 1：



// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1
// 示例 3：

// 输入：height = [4,3,2,1,4]
// 输出：16
// 示例 4：

// 输入：height = [1,2,1]
// 输出：2
 
// 解题思路一：暴力求解法，枚举出所有的情况并找出最大值。超出时间限制
// 解题方法二：双端边界缩小法。
// 提示：

// n = height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    const n =height.length
    let result = 0
    for (let i = 0; i <n-1; i++) {
        for (let j = i+1; j < n; j++) {
            result = Math.max(result,Math.min(height[i],height[j])*(j-i))
        }
    }
    return result
};
var maxArea = function(height) {
    const n =height.length
    let result = 0
    let left = 0
    let right = n-1
    while(left<right){
        const area = (Math.min(height[left],height[right])) * (right-left)
        result = Math.max(area,result)
        if(height[left] <=height[right]){
            left++
        }else{
            right--
        }
    }
    return result
};

// const arr =[1,2,1]
const arr = [4,3,2,1,4]
console.log(maxArea(arr));