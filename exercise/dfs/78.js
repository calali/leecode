// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]
 

// 提示：

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    //nums中的每一项可选也可以不选的case的全集
    let result = []
    const len = nums.length
    const dfs = (index,currentResult)=>{
        if(index === len){
            result.push(currentResult.slice())
        }else{
           try {
                // 选择这一项
            const arr = currentResult.concat([nums[index]])
            dfs(index + 1,arr)
            arr.pop()
            //不选的这一项删除
            dfs(index + 1,arr)
            
           } catch (error) {
               debugger
           }
        }
    }
    dfs(0,[])
    return result
};
const nums = [1,2,3]
console.log(subsets(nums));