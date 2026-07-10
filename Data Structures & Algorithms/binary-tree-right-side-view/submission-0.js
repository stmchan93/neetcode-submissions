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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return []
        }
        const res = [];
        const queue = [];
        queue.push(root);
        while (queue.length > 0) {
            const size = queue.length;
            let right = null;
            for(let i = 0; i < size; i++) {
                const curr = queue.pop();
                if (curr) {
                    right = curr;
                    queue.unshift(curr.left);
                    queue.unshift(curr.right);
                }
            }
            if (right) {
                res.push(right.val);
            }
        }
        return res;
    }
}
