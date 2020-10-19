// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//固定第一个元素，然后问题简化为两数之和
//O(n3)超出了时间限制
// var threeSum = function(nums) {
//     const result = []
//     const l = nums.length
//     for (let index1 = 0; index1 < l; index1++) {
//         for (let index2 = index1+1; index2 < l; index2++) {
//             for (let index3 = index2+1; index3 < l; index3++) {
//                 if(nums[index1] +nums[index2]+nums[index3] === 0){
//                     result.push([nums[index1],nums[index2],nums[index3]])
//                 }
        
//             }
//         } 
//     }
//     //对结果去重,只要有两个元素一样，就是重复的
//     const pureResult = []
//     const map = {}
//     const len = result.length
//     for (let index = 0; index < len; index++) {
//         const [item1,item2] = result[index].sort((a,b)=>a-b)
//         if(!map[item1]){
//             map[item1] = []
//         }
//         if( !map[item1].includes(item2) ){
//             map[item1].push(item2)
//             pureResult.push(result[index])
//         }
//     }
    
//     return pureResult.reverse()
// };
//三指针法O(n2)
const threeSum = (nums) => {
    //既然结果要去重且排序，那就先对原始数组进行正序排序
    nums.sort((a,b)=>a-b)
    const len = nums.length
    const result = []
    //最短的数组长度是3，因此遍历范围-2
    for (let index = 0; index < len-2; index++) {
        //如果当前值>0,那么三数之和肯定>0，不符合条件
        const n1 = nums[index]
        if(n1>0){break}
        //这一次和上一次的值相同，则结果是重复的，就跳过当前循环
        if(n1 === nums[index-1] && index >0){continue}
        let left = index+1
        let right = len-1
        while (left <right) {
            const n2 = nums[left]
            const n3 = nums[right]
            if(n1+n2+n3 === 0){
                result.push([n1,n2,n3])
                while(left<right && n2 === nums[left]){
                    left++
                }
                while(left<right && n3 === nums[right]){
                    right--
                }
            }else if(n1+n2+n3 < 0){
                left++
            }else{
                right--
            }
        }
    }
    return result
}


// const nums = [-1, 0, 1, 2, -1, -4]
const nums = [0,0,0]
console.log(threeSum(nums));