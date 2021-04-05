// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 
// 首先按照左端点排序
//然后判断下一个的左端点和上一个的右端点是不是会重合，重合就合并
// 提示：

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const n = intervals.length
    const result = []
    intervals.sort((a,b)=>{
        return a[0] -b[0]
    })
    result.push(intervals[0])
    console.log(intervals);

    for (let index = 1; index < n; index++) {
        if(intervals[index][0] <=result[result.length-1][1]){
            const item = result.pop()
            // 进行合并
            result.push([item[0],Math.max(intervals[index][1],item[1])])
        }else{
            result.push(intervals[index])
        }
    }
    return result
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));