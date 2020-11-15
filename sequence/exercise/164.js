// 164. 最大间距
// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。

// 示例 1:

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:

// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。
// 说明:

// 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
// 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumGap = function(nums) {
//     if (nums.length <2) {
//         return 0
//     }
//     const sortedNums = nums.sort((a,b)=>a-b)

//     let result = nums[1]-nums[0]
//     for (let i = 2; i < nums.length; i++) {
//         if((nums[i] - nums[i-1])>result) {
//             result = nums[i] - nums[i-1]
//         }
//     }
//     return result
// };

// 能够接近O(n)复杂度的只有桶排序了，其他排序方法的平均复杂度都要O(nlogn)
// n个元素n个桶里，如果元素均匀分布，则没有空桶，否则有空桶，
// 空桶前后的元素比较的差值，可能是最大值
var maximumGap = function(nums) {
    if (nums.length <2) {
        return 0
    }
    let max = nums[0]
    let min = nums[0]
    for (let index = 1; index < nums.length; index++) {
        if(max <nums[index]){
            max = nums[index]
        }
        if(min >nums[index]){
            min = nums[index]
        }
    }
    const gap = Math.floor((max-min)/(nums.length-1))
    if(max === min || !gap) return  max-min

    const bucktets = new Array(nums.length).fill(null)

    const len = bucktets.length

    //找到每个桶的最大小值
    for (let index = 0; index < nums.length; index++) {
        const item = nums[index]
        const i = Math.floor(item/gap)

        if(i ===(len-3)){
            // console.log(i,bucktets[i],item,gap);
        }   
        if(!bucktets[i]) {
            bucktets[i] = {
                min:item,
                max:item,
            }
        }else{
            //存在桶，则更新最大值或最小值
            if(item >  bucktets[i].max){
                bucktets[i].max = item
            }
            if(item <  bucktets[i].max){
                bucktets[i].min = item
            }
        }
    }


    //对桶进行遍历，找到空桶前后的最大值和最小值的差值
    let result = 0

    for (let index = 0; index < bucktets.length; index++) {
       if(!bucktets[index] && (index-1) >=0){
        //可能有多个空桶连在一起
        let left = index-1
        let right = index+1
        while(!bucktets[left] && left >00) left--
        while(!bucktets[right] && right < bucktets.length) right++
        if(bucktets[left] &&  bucktets[right]){
            const temp = bucktets[right].min - bucktets[left].max
            result = Math.max(temp,result)
        }
       }
    }

    return result === 0 ? gap : result
};

console.log(maximumGap([3,6,9,1]));
console.log(maximumGap([1,3,100]));
console.log(maximumGap([1,1,1,1]));
console.log(maximumGap([100,3,2,1]));
console.log(maximumGap([1,1,1,1,1,5,5,5,5,5]));

console.log(maximumGap([15252,16764,27963,7817,26155,20757,3478,22602,20404,6739,16790,10588,16521,6644,20880,15632,27078,25463,20124,15728,30042,16604,17223,4388,23646,32683,23688,12439,30630,3895,7926,22101,32406,21540,31799,3768,26679,21799,23740]));