
class Stack {
    // 1.Stack CreateStack(int MaxSize):生成空堆栈，其最大长度为MaxSize;
    constructor(maxsize){
        this.maxsize = maxsize
        this.array = []
    }

    // 2.int IsFull(Stack S, int MaxSize):判断堆栈S是否已满；
    isFull(){
        return this.array.length === this.maxsize
    }
    
    // 3.void Push(Stack S, ElementType item):将元素item压入堆栈；
    push(item){
        const len = this.array.length
        if(len < this.maxsize){
            this.array[len] = item
            return true
        }else{
            console.log('堆栈已满');
            return false
        }
        
    }
    
    // 4.int IsEmpty(Stack S):判断堆栈S是否为空；
    isEmpty(){
        return this.array.length === 0
    }
    
    // 5.ElementType Pop(Stack S):删除并返回栈顶元素；
    pop(){
        if(!this.isEmpty()){
            const len = this.array.length
            const value = this.array[len-1]
            this.array.length = len -1
            return value
        }else{
            console.log('堆栈空的');
            return null
        }
    }
}

//test
var a = new Stack(5)
a.push(2)
a.push(4)
console.log(a);
a.pop()
a.pop()
a.pop()
console.log(a)





