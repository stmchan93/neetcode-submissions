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
/*
    I need to convert this tree into something that i can serialize (modify) into some string
    and know how to take this string and convert it back into the tree.
    couldn't i do something stupid like joint he array on # 
    and the split it and push itno a new array.. but im guessing we would need to 
    derive the proper left/right pointerse properly
    i think that 2 * index + 1 and 2 * index + 2 = the right and left pointers...
    of the array
    so we know that... if we just add the #
    we could just join everything back into an array then derive it into the tree based on 
    2 * index + 1 and 2 * index + 2
    so what i would do is i would take the root, traverse through the tree, and stick a 
    # between all of them. so it would be a preorder traversal
     (now i stopped here talking and started implmeenting because i feel like ig ot it?)
     then in the middle of implmeenting, i realized mu solytioon was wrong (like i was trying to iterate through array to setup the tree but realized i need a recursive function to do it)
     so is tien input then preorder traversal still? or is it more of a level order traversal bc it looks like level order traversal
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
        if (root === null) {
            return "null";
        }
        return new String(root.val) + "#" + this.serialize(root.left) + "#" + this.serialize(root.right);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        console.log("Data: ", data);
        this.pos = 0;
        const arr = data.split("#");
        return this.setupTree(arr);
    }

    setupTree(arr) {
        // i thnk this is right, but i tihk we have too many nulls in serialize llike
        // 2 has null and null but they shoudl be after 3
        const value = arr[this.pos];
        this.pos++;
        if (value === "null") {
            return null;
        }
        const root = new TreeNode(value);
        root.left = this.setupTree(arr);
        root.right = this.setupTree(arr);
        return root;
    }
}
