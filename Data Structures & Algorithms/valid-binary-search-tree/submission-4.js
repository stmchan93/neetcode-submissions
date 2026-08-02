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
     * @return {boolean}
     */
    isValidBST(root) {
        if (root === null) {
            return true;
        }
        return this.validate(root, -Infinity, Infinity)
    }

    validate(root, min, max) {
        if (root === null) {
            return true;
        }
        if (root.val <= min || root.val >= max) {
            return false;
        }
        return this.validate(root.left, min, root.val) && this.validate(root.right, root.val, max);
    }

}
