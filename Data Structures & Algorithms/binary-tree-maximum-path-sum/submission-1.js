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
     */

    maxPathSum(root) {
        this.max = -Infinity;
        this.recurse(root);
        return this.max;
    }

    recurse(node) {
        if(node === null) {
            return 0;
        }
        const leftGain = Math.max(0, this.recurse(node.left));
        const rightGain = Math.max(0, this.recurse(node.right));
        this.max = Math.max(this.max, node.val + leftGain + rightGain);
        return node.val + Math.max(leftGain, rightGain);
    }
}
