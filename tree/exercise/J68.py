#!/usr/bin/python
# 根据分析所知道，p和q在么在最近节点a的两侧，则所找的就是这个节点a
# p和q在最近节点的一侧，那么找的节点就是p或q，哪个先遍历到时哪个

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root or root == p or root == q: return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if not left: return right
        elif not right: return left
        return root

