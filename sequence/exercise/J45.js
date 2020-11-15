// 剑指 Offer 45. 把数组排成最小的数
// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

// 示例 1:

// 输入: [10,2]
// 输出: "102"
// 示例 2:

// 输入: [3,30,34,5,9]
// 输出: "3033459"
 

// 提示:

// 0 < nums.length <= 100
// 说明:

// 输出结果可能非常大，所以你需要返回一个字符串而不是整数
// 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    //要得到最小的数字，则越靠前的数字应当越小，因此应当把数字按照从小大排列
    //考虑一些例外情况
    //[3,30]此时小数是303，而不是330
    //[322,305]305322
    //[322,325]322325
    //[3,30,1]// 1303
    //当前一位相同时，比较下一位，下一位不存在用上一位替补进行比较

    const sortedArr =  nums.sort((a,b)=>{
        const stra = String(a)
        const strb = String(b)

        let len = Math.max(stra.length,strb.length)
        let i = 0
        let flag = false

        while (i < len) {

            let a1 = stra[i]
            let b1 = strb[i]

            if(i >= stra.length){
                //取目前为止最大值
                a1 = Math.max(...stra)
            }
            if(i >= strb.length){
                b1 = Math.max(...strb)
            }

            flag =  a1 - b1

            if(a1 === b1){
                i++
            }else{
                return flag
            }

        }
        return flag
    })

    return sortedArr.join('')
};

//要得到最小的数字，则越靠前的数字应当越小，因此应当把数字按照从小大排列
    //考虑一些例外情况
    //[3,30]此时小数是303，而不是330
    //[322,305]305322
    //[322,325]322325
    //[3,30,1]// 1303
    //当前一位相同时，比较下一位，下一位不存在用上一位替补进行比较
// var minNumber = function(nums) {
    
//     const sortedArr =  nums.sort((a,b)=>{
//         const stra = String(a)
//         const strb = String(b)

//         const result1 = parseInt(stra+strb,10)
//         const result2 = parseInt(strb+stra,10)

//         console.log(result1,result2);
//         if(result1 < result2){
//             return -1
//         }
//         return 1
//     })

//     return sortedArr.join('')
// };


// console.log(minNumber([20,1]));
// console.log(minNumber([3,30]));
// console.log(minNumber([824,8247]));

// console.log(minNumber([12,121]));
console.log(minNumber([216,2228,2]));

