// 二叉树的递归遍历

// 先序遍历
function preOderTraversal(tree){
    if(tree){
        console.log(tree.val)
        preOderTraversal(tree.left)
        preOderTraversal(tree.right)
    }
}

// 中序遍历
function inOderTraversal(tree){
    if(tree){
        preOderTraversal(tree.left)
        console.log(tree.val)
        preOderTraversal(tree.right)
    }
}

// 后序遍历
function postOderTraversal(tree){
    if(tree){
        preOderTraversal(tree.left)
        preOderTraversal(tree.right)
        console.log(tree.val)
    }
}

// 二叉树的非递归遍历
// 中序遍历
function inOderTraversal1(tree){
    const stack = []
    while (tree || stack.length) {
        while(tree){
            tree.push(tree)
            tree = tree.left
        } 
        if(stack.length){
            const item = stack.pop()
            console.log(item.val)
            tree = item.right
        }
    }
    
}
// 先序遍历
function preOderTraversal1(tree){
    const stack = []
    while (tree || stack.length) {
        while(tree){
            tree.push(tree)
            console.log(tree.val)
            tree = tree.left
        } 
        if(stack.length){
            const item = stack.pop()
            tree = item.right
        }
    }  
}

// 后序遍历
function postOderTraversal1(tree){
    const stack = []
    while (tree || stack.length) {
        while(tree){
            tree.push(tree)
            tree = tree.left
        }
        if(stack.length){
            const item = stack.pop()
            tree = item.right
        }
    }  
}