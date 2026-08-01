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
     * @return {TreeNode}
     */
    invertTree(root) {
        /*
            invert binary tree: left = right and right = left
            we need to just make sure that root.left = root.right basically
            and then i have to recurse down and do it for all the other ones
        */
        if (root === null) {
            return null;
        }
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        this.invertTree(root.right);
        this.invertTree(root.left);
        return root;
    }
}
