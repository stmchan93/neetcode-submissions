/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

// meta: visit a node and track its neighbors
// if you come across a node that you've already added before, maintain a visited map of the node
// you already visited to the new node

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    cloneGraph(node) {
        // return a deep copy of the graph meaning like. i have a bunch of nodes
        // i have a value of that node
        // i need to traverse lets saywe hve 1.
        // in 1, its neighbors are 2
        // so i would have to return 2? 
        // so somehow i have to like deep copy it or something
        // like do new Node() from all of its neighbors?
        // so i hbasically it hink what i ahve to do is somehow loop through all the neighbors,
        // and then re-construct hte neighbor nodes? so i would... have to come up with some funcitno like
        // create my root node, then traverse through my neighbors and call cloneGraph on all 
        // of the other nodes and then return the root?
        // looking at my impelmentatlion:
        /*
                if (node === null) {
            return null;
        }
        const newNode = new Node(node.val);
        for(const neighbor of node.neighbors) {
            console.log("Neighbor.val: ", neighbor.val)
            newNode.neighbors.push(this.cloneGraph(neighbor));
        }
        return newNode;
        */
        // we need some way to find if the node is visited or not because we are getting into an infinite loop
        // how do we get out of our infinite loop :), we need osme sort of visted SET
        // and if this node is in the set, we just continue
        const map = new Map();
        return this.dfs(map, node);
    }

    dfs(map, node) {
        if (node === null) {
            return null;
        }
        const curr = new Node(node.val);
        // the original 1 to its new node 1
        // map sets 2, with the new 2
        map.set(node, curr);
        for(const neighbor of node.neighbors) {
            // we have a map of the original node to its clone...
            // now we check the node's neighbors the original node's neighbors, and since
            // map has the original neighbor we just push the neighbor and hten we go into the other neighbor
            if(map.has(neighbor)) {
                curr.neighbors.push(map.get(neighbor));
            } else {
                // we recurse, and now we're at 2
                curr.neighbors.push(this.dfs(map, neighbor));
            }
        }
        return curr;
    }
}
