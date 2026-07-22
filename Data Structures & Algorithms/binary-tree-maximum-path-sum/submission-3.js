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

// meta: make a decision to sum the left and right, because when we recurse
// we will have a deicsion to make, to add the left OR the right to root at the leaves
// for example, -5 15, and 10, we would not pick to add left because it would make our sum 
// go down. then we know that that is the value of hte left subtree
// and when we recurse out, we have to record the max of the max or of the left right and curr
// and do this for every single node


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    max = -Infinity;

    maxPathSum(root) {
        this.findSumPath(root);
        return this.max;
    }

    findSumPath(root) {
        if (root === null) {
            return 0;
        }
        // remove the negatives because we dont care about them
        const leftSum = Math.max(0, this.findSumPath(root.left));
        const rightSum = Math.max(0, this.findSumPath(root.right));
        // now we picked a path,bc we cant go into bth paths
        const pickedPathSum = Math.max(leftSum, rightSum);
        // now find the math.max of the V that can be root plus left plus right and if we only pick one side?
        this.max = Math.max(this.max, root.val + leftSum + rightSum);
        return root.val + pickedPathSum;
    }
}
