
class LinkedList {

    // 1. List MakeEmpty(): 初始化一个空线性表L;
    constructor(){
        this.head = this.createNode('head')
    }

    createNode(data){
        return {data,next :null}
    }

    // 3. int Find(ElementType X, List L): 在链表L中查找X的节点；
    // 时间复杂度O(n)
    find(x){
        let currentNode = this.head
        while(currentNode && currentNode.data !== x){
            currentNode = currentNode.next
        }
        if(currentNode && currentNode.data === x){
            return currentNode
        }else{
            return null
        }
    }

    // 在value节点后插入data节点
    // 时间复杂度O(1)
    insert(value,data){
        const node = this.find(value)
        if(node){
            node.next = this.createNode(data)
            return true
        }else{
            console.log(`不存在数据为${value}节点`)
            return false
        }

    }

    // 时间复杂度O(n)
    delete(value){
        //找到上一节点
        let node = this.head

        while (node.next && node.next.data !== value) {
            node = node.next
        }
        if(node.next && node.next.data === value){
            node.next = node.next.next
        }else{
            console.log(`不存在数据为${value}节点`)
            return false
        }
    }

    // 时间复杂度O(n)
    len(){
        let len =0 
        let node = this.head
        while(node.next){
            len ++
            node = node.next.next
        }
        return len
    }
}

//test
var a = new LinkedList()
a.insert('head','公园')
a.insert('公园','商店')
console.dir(a,{depth: null})
console.dir(a.find('公园'))
console.dir(a.find('小区'))
console.dir(a.delete('小区'))

console.dir(a.len())