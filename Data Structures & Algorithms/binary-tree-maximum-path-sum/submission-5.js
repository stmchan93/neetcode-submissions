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
    max = -Infinity;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        // first of all, you have to consider negatives hwere negatives we should not add to our
        // current sum. secondly we will recurse down to our node, and we have to make a decision
        // to see if we will add it to our maxmum path sum. so we have to consider
        // is adding the node at the end going to increase our sum, and if it will, we should
        // add it, if not we should jsut sum the left and the right
        if (root === null) {
            return 0;
        }
        this.findMaximumPathSum(root);
        return this.max;
    }

    findMaximumPathSum(root) {
        if (root === null) {
            return 0;
        }
        // we traverse and find the sums of the left and right subtree
        const leftSum = Math.max(0, this.findMaximumPathSum(root.left));
        const rightSum = Math.max(0, this.findMaximumPathSum(root.right));
        // once we find the sum of the left and right subtree, we check to see if adding the 
        // immediate left and right subtree, if adding them would result in the desired behavior
        // IF it does, then we update our max.
        // if it does not, we have to pick a side or which we sum up the maximum on left
        // or right subtree
        this.max = Math.max(this.max, root.val + leftSum + rightSum);
        return root.val + Math.max(leftSum, rightSum);
    }
}
