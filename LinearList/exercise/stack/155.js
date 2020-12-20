// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
 

// 示例:

// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// 输出：
// [null,null,null,null,-3,null,0,-2]

// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.
 

// 提示：

// pop、top 和 getMin 操作总是在 非空栈 上调用

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minIndex = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(this.minIndex === -1){
        this.minIndex = 0
    }else{
        if(x < this.stack[this.minIndex]){
            this.minIndex = this.stack.length -1
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const result = this.stack.pop()
    if(this.minIndex === this.stack.length){
        const minValue = Math.min(...this.stack)
        this.minIndex = this.stack.findIndex(item=>item === minValue)
    }
    return result
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.stack.length
    return len > 0 ? this.stack[len-1]:null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.minIndex]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 var a = new MinStack()
 a.push(-2)
 a.push(0)
 a.push(-3)
 a.getMin()
 a.pop()
console.log( a.top());
console.log( a.getMin());