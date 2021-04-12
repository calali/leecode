// 146. LRU 缓存机制
// 运用你所掌握的数据结构，设计和实现一个  LRU(最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 - 1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字 - 值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。


// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？



// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

// 每次插入判断容量，如果不超过容量，可以直接插入。

// 如果容量已经达到最大值，则要删除哪个呢？统计每个key的get次数

// 提示：

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// 最多调用 3 * 104 次 get 和 put

class LRUCache {
  constructor(limit){
    this.root = {}
    this.limit = limit
    this.currentLength = 0
    this.usedCount = {}
  }
  get(key){
    if(this.root[key] !== undefined){
      this.updateCout(key, this.usedCount[key]-1)
      console.log('get', this.root[key]);
      return this.root[key]
    }
    console.log('get', -1);
    return -1
  }
  updateCout(key,value){
    this.usedCount[key] = value
  }

  put(key,value){
    if (this.currentLength === this.limit){
      //删除最少使用的key，即usedCount里值最小的，这个怎么在O(1)时间内拿到呢？
      //遍历找到最小的
      let min = Infinity
      let targetKey = ''
      Object.keys(this.usedCount).map(key => {
        if (this.usedCount[key] < min) {
          min = this.usedCount[key]
          targetKey = key
        }
      })
      delete this.usedCount[targetKey]
      delete this.root[targetKey]
      this.currentLength -= 1
    }
    this.root[key] = value
    this.currentLength +=1
    if(this.usedCount[key]===undefined){
      this.usedCount[key] = 0
    }
    console.log('put', this.root);
  }
}
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
