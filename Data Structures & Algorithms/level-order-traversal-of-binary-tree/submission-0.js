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
        const queue = [];
        const res = [];
        if (root === null) {
            return res;
        }
        queue.push([root]);
        res.push([root.val]);
        // [[1]]
        while (queue.length > 0) {
            const next = queue.pop();
            // next is [1]
            const arr = [];
            const curr = [];
            for(let i = 0; i < next.length; i++) {
                if (next[i].left) {
                    arr.push(next[i].left);
                    curr.push(next[i].left.val);
                }
                if (next[i].right) {
                    arr.push(next[i].right)
                    curr.push(next[i].right.val);
                }
            }
            // arr = [2,3]
            if (arr.length > 0) {
                res.push(curr);
                queue.push(arr);
            }
        }
        return res;
    }
}
