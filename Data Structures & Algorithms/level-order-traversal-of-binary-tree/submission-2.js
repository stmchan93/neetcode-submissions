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
        /*
            meta: start at the root, and traverse using a queue where you push the root it
            and then you push the right and left nodes
            and you pop each of them and store its left and right ndoes over and over again
            the problemw ith this is that you need to create a new array every time youve done this
            you can have a for loop for when you pop into the array to like
            get the size of the array to know when to loop through the array to make sure
            you only pop the children of the array at that time
        */
        if (root === null) {
            return [];
        }
        const queue = [];
        queue.push(root);
        const result = [];
        while(queue.length > 0) {
            // size = 2 here
            const size = queue.length;
            const sublist = [];
            for(let i = 0; i < size; i++) {
                const node = queue.shift();
                // val = 2
                sublist.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            result.push(sublist);
        }
        return result;
    }
}
