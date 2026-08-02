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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) {
            return false;
        }
        if (this.isSameTree(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(root, subRoot) {
        if (root === null && subRoot === null) {
            return true;
        } 
        if (root === null || subRoot === null) {
            return false;
        }
        if (root.val !== subRoot.val) {
            return false;
        }
        return this.isSameTree(root.left, subRoot.left) && this.isSameTree(root.right, subRoot.right);
    }
}
