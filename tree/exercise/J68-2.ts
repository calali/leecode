
//  Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
    if(!root) return root
    if(root.val === p || root.val === q) return root

    console.log(root);
    
    
    const left = lowestCommonAncestor(root.left,p,q)
    const right = lowestCommonAncestor(root.right,p,q)

    if(left && right) return root
    else if (left) return left
    else return right
};


const tree:TreeNode = {
    val:3,
    left:{
        val:5,
        left:{
            val:1,
            left:null,
            right:null,
        },
        right:{
            val:2,
            left:null,
            right:null,
        }
    },
    right:{
        val:0,
        left:null,
        right:null
    }
}

console.log(lowestCommonAncestor(tree,2,1));
