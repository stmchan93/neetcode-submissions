/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // meta: we need to find the parent of both the nodes basically
        // we baically traverse left and right to find the nodes, get to ht eleaves
        // once we get to the leaves we recurse out and try to find its parent 
        // oh we have p and q
        // ok so we find p and q in the tree, then we try to find its parent 
        // we know that if p and q are null, then the root must be the parent
        // if we know that p is null and q is not null then q must be the parent
        // we know the inverse is true too.
        // then in the case that p and q are not null then we need to try the above base cases
        // on the left subtree and the right subtree 
        if (root === null) {
            return null;
        }
        if (q === null && p === null) {
            return root;
        }
        if (p === null && q !== null) {
            return q;
        }
        if (p !== null && q === null) {
            return p;
        }
        if ((root.val < p.val && root.val > q.val) || (root.val > p.val && root.val < q.val)) {
            return root;
        } 
        if (q.val < root.val && p.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }
        if (q.val > root.val && p.val > root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }
        return root;
    }
}
