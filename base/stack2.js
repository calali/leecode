
class Stack {
    // 1.Stack CreateStack(int MaxSize):生成空堆栈，其最大长度为MaxSize;
    constructor(){
        this.head = this.createNode('head')
    }

    createNode(data){
        return {data,next :null}
    }

    push(item){
        const node = this.createNode(item)
        const oldFirstNode = this.head.next
        this.head.next = node
        if(oldFirstNode){
            node.next = oldFirstNode
        }
    }
    
    // 4.int IsEmpty(Stack S):判断堆栈S是否为空；
    isEmpty(){
        return !this.head.next
    }
    
    // 5.ElementType Pop(Stack S):删除并返回栈顶元素；
    pop(){
        if(!this.isEmpty()){
            const oldFirstNode = this.head.next
            const oldSecondNode = oldFirstNode.next
            this.head.next = oldSecondNode
            return oldFirstNode.data
        }else{
            console.log('堆栈空的')
            return null
        }
    }
}

//test
var a = new Stack()
a.push(2)
a.push(4)
console.dir(a,{depth: null})
a.pop()
a.pop()
a.pop()
console.dir(a,{depth: null})





