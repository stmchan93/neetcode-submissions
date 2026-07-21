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
        // preorder = root left right
        // inroder = left root right

        // we know that.. the first number of hte preorder is going to be the root
        // so then if we find the first number o hte in order, we know that it is the 
        // root. then we know that anything to the left of that is left and anything to the right of
        // that is right. then we just have to keep recursing on these to build the right tree
        // the way we find root is that we go to the first value of the preorder
        // then we find the same value in inorder
        // then we say anything from left all the way to root value is left
        // and we have to buidl the tree based on that subset of numbers
        // thats the inorder left and hten inoorder right would be the numbers to the right
        // for preorder however,,, i guess we just loop through it sequentially because
        // every node will be the "root" of hte next subtree?
        if (preorder.length === 0 || inorder.length === 0) {
            return null;
        }
        let nodesToRoot = 0;
        for(let i = 0; i < inorder.length; i++) {
            if (inorder[i] === preorder[0]) {
                break;
            } else {
                nodesToRoot++;
            }
        }
        // ok now we got like 1 for example, now we have to take the slice
        const root = new TreeNode(preorder[0]);
        // preoder = 1
        // preorder.slice(1) = i believe 2
        console.log("nodes to root: ", nodesToRoot)
        console.log("preorder slice: ", preorder.slice(1, nodesToRoot + 1));
        console.log("preorder right slice: ", preorder.slice(1, nodesToRoot + 2));
        root.left = this.buildTree(preorder.slice(1, nodesToRoot + 1), inorder.slice(0, nodesToRoot));
        root.right = this.buildTree(preorder.slice(nodesToRoot + 1), inorder.slice(nodesToRoot + 1));
        return root;
    }
}
