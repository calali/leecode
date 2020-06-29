
// 有 N 个网络节点，标记为 1 到 N。

// 给定一个列表 times，表示信号经过有向边的传递时间。 times[i] = (u, v, w)，其中 u 是源节点，v 是目标节点， w 是一个信号从源节点传递到目标节点的时间。

// 现在，我们从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1

// 输入：times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
// 输出：2


/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    //遍历所有的节点
    //判断能不能使得所有节点都收到信号
    let u = k
    // 如果能，每个收到信号的节点，最大值w的和是多少
    //找到所有从2出发的节点
    const arr = times.filter(item=>{
        const [origin] = item
        return origin = k
    })

};
const times = [[2,1,1],[2,3,1],[3,4,1]]
//有4个网络节点，从节点2触发
console.log(networkDelayTime(times,4,2));
