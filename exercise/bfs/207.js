// 207. 课程表
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
// 示例 2：

// 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
// 输出：false
// 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 

// 提示：

// 1 <= numCourses <= 105
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// prerequisites[i] 中的所有课程对 互不相同

// 根据 prerequisites可以画出课程表的关系图，如果图中有环则无法完成课程，否则可以完成课程。

// 存储每个节点的入度和依赖关系。依次遍历所有入度为0的节点并更新依赖，直至所有入度为0的节点都被遍历完，则图中无环，课程可以修完。
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if(numCourses === 1|| !prerequisites.length ) return true

  const inDegreeArr = new Array(numCourses).fill(0)
  const inDegreeMap = {}
  let inDegreeIsZeroCount = 0

  //计算课程的入度数量和入度依赖关系
  for (let i = 0,len = prerequisites.length; i < len; i++) {
    const [target,source] = prerequisites[i]
    inDegreeArr[target] +=1
    if(!inDegreeMap[source]){
      inDegreeMap[source] = []
    }
    inDegreeMap[source].push(target)
  }

  //找到入度为0的课程
  const inDegreeIsZeroArr = []
  for (let index = 0,len = inDegreeArr.length; index < len; index++) {
    if(inDegreeArr[index] === 0){
      inDegreeIsZeroArr.push(index)
    }
  }
  //找到入度为0的课程并进行遍历
  while (inDegreeIsZeroArr.length) {
    const item = inDegreeIsZeroArr.pop()
    const dependOnList = inDegreeMap[item] || []

    for (let index = 0,len = dependOnList.length; index < len; index++) {
      const course = dependOnList[index]
      inDegreeArr[course]  -=1
      if(inDegreeArr[course] === 0){
        inDegreeIsZeroArr.push(course)
      }
    }

    //入度为0的课程遍历过后值设为1避免重复遍历
    inDegreeArr[item] = -1
  }

  console.log(inDegreeArr);

  return inDegreeArr.every(val=>val < 0)
};  


// const numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]
const numCourses = 2, prerequisites = [[1,0],[0,1]]

console.log(canFinish(numCourses,prerequisites));