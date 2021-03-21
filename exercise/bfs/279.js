// 279. 完全平方数
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
 
// 提示：

// 1 <= n <= 104
// 首先找出可能的完全平方数的列表，这个列表的最后一个值小于等于n，但是下一个值大于n。

// 否则对列表中的数按照倒序枚举如13的列表是[1,4,9]，先用9，再找4。这样可以优先找到数量最小的。

// 那么问题来了，如何对这个列表进行遍历呢
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function (n) {
    let sqr = ~~Math.sqrt(n);
    let neighbor = [];
    for (let i = 1; i <= sqr; i++) {
        neighbor.push(i * i);
    }
    
    let queue = [0];
    let visited = new Set(queue);
    
    let count = 0;

    while (queue.length) {
        for (let i = queue.length - 1; i >= 0; i--) {
            let cur = queue.shift();
            if (cur > n) {
                continue;
            }
            if (cur === n) {
                return count;
            }
            for (let v of neighbor) {
                let ret = cur + v;
                if (!visited.has(ret)) {
                    queue.push(cur + v);
                    visited.add(cur + v);
                }
            }
        }
        count++;
    }
    
    return count;
};

console.log(numSquares(13));