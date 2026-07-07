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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0) {
            return null;
        }
        const root = new TreeNode(preorder[0]);
        let rootIdx = inorder.indexOf(preorder[0]);
        const leftInorder = inorder.slice(0, rootIdx);
        const rightInorder = inorder.slice(rootIdx + 1);
        const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
        const rightPreorder = preorder.slice(1 + leftInorder.length);

        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);

        return root;
        // we know that preorder first value is always teh root
        // and we know that first value in inorder is going to be the left
        // we know that the 2nd value is going to be the left on preorder
        // its almost like. we find the first value which is the root
        // we go to the inorder which we navigate to the 1
        // then we set tree.left = everytihng to the left of the in order
        // and everything to tree.right = everything to the right of hte inorder
        // and then we need to keep going for every value in preorder to basically say
        // hey when we go from 1 -> 2 to postorder, all thsoe elements will be
        // on the left of 1
        // and if we go from 1 -> 3 all thsoe will be to the right of 1
        // then we move over to but like. how do we know wehre 4 goes?

    }
}
