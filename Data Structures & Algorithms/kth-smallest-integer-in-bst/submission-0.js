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
     * @param {number} k
     * @return {number}
     */
    count = 0;
    result = null;
    navigate(root, k) {
        if (root === null) {
            return this.count;
        }
        this.navigate(root.left, k)
        this.count++;
        if (this.count === k) {
            this.result = root.val;
        }
        this.navigate(root.right, k);
    }

    kthSmallest(root, k) {
        if (root === null) {
            return -1;
        }
        this.navigate(root, k);
        return this.result;
        // keep a count as you navigate through the tree? but how do you know which node to traverse at
    }
}
