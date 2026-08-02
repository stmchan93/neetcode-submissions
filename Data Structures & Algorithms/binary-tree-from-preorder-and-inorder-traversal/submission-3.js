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
        /*
            first element = the root of hte tree in preorder
            inorder, is the second element, so we need to find the 
            element in the inorder that is the root of preorder
            then we know all elements to the left are in left subtree
            and all ements on the right are right subtree
            then we need to build the tree for all these trees
        */
        if (preorder.length === 0 || inorder.length === 0) {
            return null;
        } 
        const rootVal = preorder[0];
        let inorderRootIdx = -1;
        for(let i = 0; i < inorder.length; i++) {
            if (inorder[i] === rootVal) {
                inorderRootIdx = i;
                break;
            }
        }
        console.log("in order root idx: ", inorderRootIdx)
        const root = new TreeNode();
        root.val = rootVal;
        root.left = this.buildTree(preorder.slice(1, 1 + inorderRootIdx), inorder.slice(0, inorderRootIdx))
        root.right = this.buildTree(preorder.slice(inorderRootIdx + 1), inorder.slice(inorderRootIdx + 1))
        return root;
    }
}
