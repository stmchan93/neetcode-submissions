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

    validate(node, min, max) {
        if(node === null) {
            return true;
        }
        if (min < node.val && max > node.val) {
            // we know we have a valid bst here
            return this.validate(node.left, min, node.val) && this.validate(node.right, node.val, max);
        }
        return false;

    }

    isValidBST(root) {
        if (root === null) {
            return true;
        }
        if (root.left === null && root.right === null) {
            return true;
        }
        return this.validate(root, -Infinity, Infinity)
    }
}
