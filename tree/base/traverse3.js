// 创建一个最大堆

class heap{
    constructor(maxLen){
        this.arr = new Array(maxLen)
        this.captity = maxLen
    }

    insert(x){
        if(this.isFull()){
            console.log('已满');
            return 
        }
        let i = this.arr.length
        for(;i>0 && x>this.arr[i/2];i=i/2){
            this.arr[i] = this.arr[2/i]
        }
        this.arr[i] = x
    }

    isFull(){
        return this.captity === this.arr.length
    }

    isEmpty(){
        return this.arr.length = 1
    }

    delete(){
        //堆空不空
        if(this.isEmpty()){
            console.log('已空');
            return 
        }
        //删除根节点，取最后一个节点代替根节点
        const maxItem = this.arr[1]

        const temp = this.arr[this.arr.length-1]
        this.arr.length = this.arr.length -1

        //最后一个节点和当前元素的子节点比较，按照上面大下面小的排列
        let parent = 1;let child = 1
        for(;parent*2 < this.arr.length;parent=child){
            child = 2 * parent
            const rightChild = child +1
            //取出左右节点中大的赋值给child
            if(this.arr[child] && this.arr[rightChild]){
                if(this.arr[rightChild] > this.arr[child]){
                    child = rightChild
                }
            }

            if(this.arr[child] > temp){
                this.arr[parent] = this.arr[child]
            }else{
                break
            }

        }
        this.arr[parent] = temp
        return maxItem

    }
}
