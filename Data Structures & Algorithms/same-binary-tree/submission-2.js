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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        /*
            ok so we need to check if the values have hte same value so
            we check if hteyre both null, if they are, then we say hey theyre equal
            then we also knwo that if q is null and q is not null then we can return false
            then we know that this point theyre both not null so we check to see if they are
            equal in value and if htey are jsut check the left and right hand side
        */
        if (p === null && q === null) {
            return true;
        }
        if (q === null && p !== null) {
            return false;
        }
        if (q !== null && p === null) {
            return false;
        }
        return q.val === p.val && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
