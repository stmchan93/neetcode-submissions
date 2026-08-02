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
    kthSmallest(root, k) {
        // im guessing as i traverse the nodes i need a count so i need a helper ufnction
        if (root === null) {
            return -1;
        }
        this.navigate(root, k);
        return this.result;
    }

    navigate(root, k) {
        if (root === null) {
            return;
        }
        this.navigate(root.left, k);
        this.count++;
        if (this.count === k) {
            this.result = root.val;
        }
        this.kthSmallest(root.right, k);
    }
}
