// 621. 任务调度器

// 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。

// 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

// 你需要计算完成所有任务所需要的最短时间。

//  

// 示例 ：

// 输入：tasks = ["A","A","A","B","B","B"], n = 2
// 输出：8
// 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
//      在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 
//  

// 提示：

// 任务的总个数为 [1, 10000]。
// n 的取值范围为 [0, 100]。

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

//按照任务的数量高低排序，在n+1轮里执行最多的n+1个任务。
//如果任务的种类小于n+1，则在一轮里全部执行
// var leastInterval = function (tasks, n) {
//     //计算任务的种类及个数
//     const map = {}
//     for (let index = 0; index < tasks.length; index++) {
//         const task = tasks[index];
//         if (!map[task]) {
//             map[task] = 1
//         } else {
//             map[task] += 1
//         }
//     }

//     let result = []

//     //每次挑选前n+1个任务在一轮里执行，任务种类不够n+1则全部执行,并统计执行时间
//     while (true) {

//         //前n+1个大的值减一
//         const len = Object.keys(map).length

//         if(!len){
//             break
//         }

//         if (len < (n+1)) {
//             for (let key in map) {
//                 map[key] -= 1
//                 result.push(key)
//             }
//             for (let index = 0; index < ((n+1)-len); index++) {
//                 result.push(null)                
//             }
            
//         } else {
//             //找到前k个多的属性值减一
//             const keyArr = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, n+1);
//             keyArr.forEach(([key, value]) => {
//                 map[key] = value - 1
//                 result.push(key)
//             })
//         }

//         //删除值为0的属性
//         for (let key in map) {
//             if (map[key] === 0) {
//                 delete map[key]
//             }
//         }
//     }

//     //去掉result最后的空闲时间
//     while(result[result.length-1] === null){
//         result.pop()
//     }

//     return result.length
// };


//设计

var leastInterval = function (tasks, n) {
    //找到最多的任务数量p,有q个这样的p数量的任务，那么任务至少执行(p-1)*(k+1)+q
    //如果(p-1)*(k+1)+q < 任务的数量，则返回任务的数量
    const map = {}
    tasks.forEach(task=>{
        if(map[task]){
            map[task] +=1
        }else{
            map[task] = 1
        }
    })
    const [p] = Object.values(map).sort((a,b)=>b-a)
    const q = Object.values(map).filter(value =>value === p).length
    const result = (p-1)*(n+1)+q
    return result< tasks.length ? tasks.length : result
}

// console.log(leastInterval(["A","A","A","B","B","B"],2));
// console.log(leastInterval(["A","A","A","B","B","B","C","C","C",],2));
console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E"], 2));



