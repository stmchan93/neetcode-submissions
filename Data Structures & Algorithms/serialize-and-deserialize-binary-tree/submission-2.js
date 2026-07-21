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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    pos = 0;

    serialize(root) {
        // turn the root into #'s with strings
        if (root === null) {
            return "null";
        }
        let res = root.val;
        return res = res + "#" + this.serialize(root.left) + "#" + this.serialize(root.right);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // if we want to deserialize it we need to setup the left and right pointers
        // if we split on # we get
        // hopefully 1 2 null null 3 4 5 null null null null  because this is a preorder traversal
        const tree = data.split('#');
        this.pos = 0;
        return this.buildTree(tree);
    }

    buildTree(tree) {
        // 1 2 null null 
        const curr = tree[this.pos];
        this.pos++;
        if (curr === "null") {
            return null;
        }
        const root = new TreeNode(Number(curr));
        root.left = this.buildTree(tree);
        root.right = this.buildTree(tree);
        return root;
    }
}
