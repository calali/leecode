//二叉搜索树的查找

// 查找某一个元素
function find(x,root){
    //和当前元素一样大则返回这个节点
    //比他小就走左侧继续比较
    //比他大就走右侧继续比较
    if(root){
        if(x === root.val){
            return root
        }else if(x < root.val){
            root = root.left
            return find(root)
        }else{
            root = root.right
            return find(root)
        }
    }
    return null
}

//非尾递归实现
function findGood(x,root){
    //和当前元素一样大则返回这个节点
    //比他小就走左侧继续比较
    //比他大就走右侧继续比较
    let node = root
    while(node){
        if(x === root.val){
            return root
        }else if(x < root.val){
            node = root.left
        }else{
            node = root.right
        }
    }
    return null
}

//最小值
function findMin(root){
    let result = null
    while(root){
        root = root.left
        result = root.val
    }
    return result
}

function findMax(root){
    let result = null
    while(root){
        root = root.right
        result = root.val
    }
    return result
}

//插入
function insert(x,root){
    if(!root){
        return {
            val:x,
            left:null,
            right:null
        }
    }else{
        if(x === root.val){
            //什么都不做
        }else if(x < root.val){
            //插入左子树
            root.left = insert(x,root.left)
        }else{
            root.right = insert(x,root.right)
        }
    }
    return root
}

function deleteNode(x,root){
    if(!root){
        return null
    }else if(x < root.val){
        root.left = delete(x,root.left)
    }else if (x >root.val){
        root.right = delete(x,root.right)
    }else{
        //找到这个元素
        if(root.left && root.right){
            //找到右子树的最小元素并赋值给要删除的元素
            const node = findMin(root)
            root.val = node.val
            root.right = delete(node.val,root)
        }else if(root.left || root.right){
            root = root.left || root.right
        }else{
            //要删除的是叶子节点
            root = null
        }
    }
}