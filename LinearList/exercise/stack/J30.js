// 剑指 Offer 30. 包含min函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。



// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.


// 提示：

// 各函数的调用总次数不超过 20000 次

/**
 * initialize your data structure here.
 */
//栈：后进先出
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
    this.minStack = []
};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x)
    }
    
};
/**
 * @return {void}
 */
// MinStack.prototype.pop = function () {
//     const x = this.stack.pop()
//     if(this.minStack.length){
//         if(x!== undefined &&   this.minStack[this.minStack.length-1] ===x){
//             this.minStack.pop()
//         }
//     }
// };
MinStack.prototype.pop = function () {
    const x = this.stack.pop()
    if (x !== void 0 && x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    //for循环返回最小值 操作是O(n)
    return this.minStack[this.minStack.length - 1]
};
