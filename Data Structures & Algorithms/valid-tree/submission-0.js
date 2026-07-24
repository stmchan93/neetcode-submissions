class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // so we know this is a valid tree as long as it doesnt have edges 
        // 01 and 10 are duplicate so  so is it just a matter of finding a cycle?
        // so what i would do is i would lopo through all the edgs, and store them into an adjacency list
        // i would have a map of a node to the edge its connected to
        // then iw ould loop through all the nodes from 0 -> n and find if there is a cycle
        // by having a visited set that would be passed in to add into hte set as we visit each 
        // edge of the node. if there is a cycle i would return false, otherwise keep going return true.
        const graph = new Map();
        for(let i = 0; i < n; i++) {
            graph.set(i, []);
        }
        for(let i = 0; i < edges.length; i++) {
            graph.get(edges[i][0]).push(edges[i][1]);
            graph.get(edges[i][1]).push(edges[i][0]);
        }
        const visited = new Set();
        if (edges.length !== n - 1) {
            return false;
        }
        if (!this.dfs(graph, 0, -1, visited)) {
            return false;
        }
        return visited.size === n;
    }

    dfs(graph, curr, parent, visited) {
        if (visited.has(curr)) {
            return false;
        }
        visited.add(curr);
        const adjacentEdges = graph.get(curr);
        for(let i = 0; i < adjacentEdges.length; i++) {
            if (adjacentEdges[i] === parent) {
                continue;
            }
            if (!this.dfs(graph, adjacentEdges[i], curr, visited)) {
                return false;
            }
        }
        return true;
    }
}
