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
        /*
            we have to find what side p and q are at 
            because we need to find if q and p are on opposite sides, then its their parent which
            is the answer
            but if p and q are on the left hand side then we need to recurse left and find
            its parent, and or right, then recurse left
        */
        if (root === null) {
            return null;
        }
        if (q === null && p !== null) {
            return p;
        }
        // if (p === null && q !== null) {
        //     return q;
        // }
        if (q === root || p === root) {
            return root;
        }
        if ((p.val < root.val && q.val > root.val) || (q.val < root.val && p.val > root.val)) {
            return root;
        }
        if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return this.lowestCommonAncestor(root.right, p, q);
        }
    }
}
