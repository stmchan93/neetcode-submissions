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
     * @return {number}
     * this one is you just go down the height of the tree
     */
    maxDepth(root) {
        if(root === null) {
            return 0;
        }
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    }
}
