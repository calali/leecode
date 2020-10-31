// 46. 全排列

// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
function swap(nums,p,q) {
    const temp = nums[q]
    nums[q] = nums[p]
    nums[p] = temp
}

var permute = function(nums) {
    const res = []
    perm(nums,0,nums.length-1,res)
    return res
};

var perm = function(nums,start=0,end=nums.length-1,res) {
    if(start === end){
        res.push([...nums])
    }else{
        for(let i = start;i <=end;i++){
            swap(nums,start,i)
            perm(nums,start+1,end,res)
            swap(nums,start,i)
        }
    }
};

const result = permute([1,2,3])

console.log(result);