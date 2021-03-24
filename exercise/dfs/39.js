// 39. 组合总和
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2：

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
 

// 提示：

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// candidate 中的每个元素都是独一无二的。
// 1 <= target <= 500

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const len = candidates.length
    const result = []

    const dfs = (currentIndex,currentTarget,path)=>{
        //小于0的节点是叶子节点
        if(currentTarget < 0){
            return
        }
        //等于0的节点也是叶子节点，并且从根节点到这里的path值是需要的的目标值
        if(currentTarget === 0){
            result.push(path.slice())
            return
        }
        for (let index = currentIndex; index < len; index++) {
            path.push(candidates[index])
            dfs(index,currentTarget - candidates[index],path)
            path.pop()
        }
    }
    dfs(0,target,[])

    return result
};
const candidates = [2,3,5], target = 8
console.log(combinationSum(candidates,target));