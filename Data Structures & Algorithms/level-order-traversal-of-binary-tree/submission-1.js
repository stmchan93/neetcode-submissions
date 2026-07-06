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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if (!root) {
            return res;
        }
        const queue = [root];
        let idx = 0;
        while (idx < queue.length) {
            const levelSize = queue.length - idx;
            const currLevel = [];

            for(let i = 0; i < levelSize; i++) {
                const next = queue[idx];
                idx++;
                currLevel.push(next.val);

                if (next.left) {
                    queue.push(next.left);
                }
                if (next.right) {
                    queue.push(next.right);
                }
            }
            res.push(currLevel);
        }
        return res;

    }
}
