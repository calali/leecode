// 96. 不同的二叉搜索树
// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

// 示例:

// 输入: 3
// 输出: 5
// 解释:
// 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

// 以[1,3,3,4]这个节点组合的二叉搜索树来分析
// 从1到遍历到4，以i为根节点，左子节点的值的范围是i-1,右子节点的值的范围是n-i。

// 以i为n节点的长度为n的二叉树的组合个数为F(i,n) = G(i-1) * G(n-i)
// G(n)表示以n为节点可以组合的二叉搜索树的个数，也是最终要求的

// G(n) = F(1,n) + F(2,n) + ... +F(n,n)





/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
   const dp = new Array(n+1).fill(0) //G(n)为dp[n]
    dp[0] = 1
    dp[1] = 1
   for (let index = 2; index <=n ; index++) { 
       for (let j = 1; j <= index; j++) { //F(j,index)
           dp[index]+=dp[j - 1] * dp[index - j]
       }
   }
   return dp[n]
};
const a =numTrees(3)
console.log(a);
