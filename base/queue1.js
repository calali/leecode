
// Queue CreateQueue(int MaxSize): 生成长度为MaxSize的空队列
// int IsFullQ(Queue Q, int MaxSize): 判读队列Q是否已满
// void AddQ(Queue Q, ElementType item): 将数据元素item插入队列Q中
// int IsEmptyQ(Queue Q): 判断队列Q是否为空
// ElementType DeleteQ(Queue Q): 将队头数据元素从队列中删除并返回
class Queue {
    constructor(maxsize){
        this.maxsize = maxsize
        this.array = new Array()
        this.rear = -1
    }

    isFull (){
        return this.rear  === this.maxsize -1
    }

    isEmpty(){
        return  this.rear === -1
    }

    push(data){
        if(!this.isFull()){
            const len = this.array.length
            this.array[len] = data
            this.rear = len
            return true
        }else{
            console.log('队列已满')
            return false
        }
    }

    pop(){
        if(!this.isEmpty()){
            const firstItem = this.array[0]
            const len = this.array.length
            for(let i =1;i< len;i++){
                this.array[i-1] = this.array[i]
            }
            this.array.length = len -1
            this.rear = len -2
            return firstItem
        }else{
            console.log('队列空的')
            return null
        }
    }
}

var a = new Queue(5)
a.push(2)
a.push(4)
// console.log(a)
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
