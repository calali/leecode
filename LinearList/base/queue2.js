
// Queue CreateQueue(int MaxSize): 生成长度为MaxSize的空队列
// int IsFullQ(Queue Q, int MaxSize): 判读队列Q是否已满
// void AddQ(Queue Q, ElementType item): 将数据元素item插入队列Q中
// int IsEmptyQ(Queue Q): 判断队列Q是否为空
// ElementType DeleteQ(Queue Q): 将队头数据元素从队列中删除并返回
class Queue {
    constructor(){
        this.head = this.createNode('head')
        this.rear = this.head
    }

    createNode(data){
        return {data,next :null}
    }

    push(data){
        this.rear.next  = this.createNode(data)
        this.rear = this.rear.next
    }

    pop(){
        if(this.head.next){
            const firstNode = this.head.next
            this.head.next = firstNode.next
            return firstNode.data
            
        }else{
            console.log('队列空的')
            return null
        }
    }
}

var a = new Queue()
a.push('公园')
a.push('商场')
// console.dir(a,{depth: null})
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
