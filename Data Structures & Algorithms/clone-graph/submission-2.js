/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */
/*
    meta: go through the node and and its neighbors and do a dfs
    the problem here is that we have a bidirectional adjacency list so 
    you have to make sure that that we clone a node, and hten we 
    do recursively clone for every single neighbor in the list
    and we add the nodes that we've seen into a map of the node with the 
    new node we cloned 
*/

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const nodesMap = new Map();
        return this.cloneNodes(nodesMap, node);
    }

    cloneNodes(nodesMap, node) {
        if (node === null) {
            return null;
        }
        const clonedNode = new Node(node.val);
        nodesMap.set(node, clonedNode);
        for(const neighbor of node.neighbors) {
            if (nodesMap.has(neighbor)) {
                clonedNode.neighbors.push(nodesMap.get(neighbor));
            } else {
                clonedNode.neighbors.push(this.cloneNodes(nodesMap, neighbor));
            }
        }
        return clonedNode;
    }
}
