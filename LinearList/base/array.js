
class List {

    // 1. List MakeEmpty(): 初始化一个空线性表L;
    constructor(arr=[]){
        this.maxsize = arr.length
        this.array = arr
    }

    // 2. ElementType FindKth(int K, List L): 根据位序K,返回相应元素
    // 时间复杂度O(n)
    findKth(k){
        if(k >=0 && k <this.maxsize){
            return this.array[k]
        }else{
            console.log(`位序${k}不存在`)
            return 
        }
    }

    // 3. int Find(ElementType X, List L): 在线性表L中查找X的第一次出现位置；
    // 时间复杂度O(n)
    find(x){
        for(var i=0;(i<this.maxsize && this.array[i] !== x);i++){
        }
        return i<this.maxsize ? i :-1
    }

    // 4. void Insert(ElementType X, int k, List L): 在位序k前插入一个新元素X;
    // 时间复杂度O(n)
    insert(x,k){
        if(k<0 || k >= this.maxsize){
            console.log(`位序${k}不存在`)
            return false
        }else{
            for(let i=k;i<this.maxsize;i++){
                this.array[i+1] = this.array[i]
            }
            this.array[k] = x
            this.maxsize = this.maxsize +1
            return true
            
        }
    }

    // 5. void Delete(int k, List L): 删除指定位序k的元素；
    // 时间复杂度O(n)
    deleteKth(k){
        if(0<=k && k < this.maxsize){
            for(let i=k;i<this.maxsize;i++){
                this.array[i] = this.array[i+1]
            }
            this.maxsize = this.maxsize -1
            return true
        }else{
            console.log(`位序${k}不存在`)
            return false
        }
    }

    // 6. int Length(List L): 返回线性表L的长度n。
    len(){
        return this.maxsize
    }
}

//test
var a = new List([3])
a.insert(2,0)
a.insert(4,1)
console.log(a)

// console.log(a.findKth(2))
// console.log(a.findKth(10))
// console.log(a.find(4))
// console.log(a.find(0))
console.log(a.deleteKth(4))
// console.log(a.find(4))
// console.log(a.len())

