class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        /*
            if there is a cycle in this undirected graph, we know that we have a non-valid tree
            this means that we have to create an adjacency list
            if the parent is in the adjacency list if we see it we just skip over it
            but therwise we go through teh entire adjacency list and see if 
            our node is already visited before, if it is it means there's a cycle
        */
        const adjList = new Map();
        for(let i = 0; i < n; i++) {
            adjList.set(i, []);
        }
        for(let i = 0; i < edges.length; i++) {
            // 0, 1
            // 1, 0
            // 0, 3
            // 3, 0
            // 0, 2
            // 2, 0
            adjList.get(edges[i][0]).push(edges[i][1]);
            adjList.get(edges[i][1]).push(edges[i][0]);
        }
        const visited = new Set();
        if (edges.length !== n - 1) {
            return false;
        }
        // for(let i = 0; i < n; i++) {
            // go through all nodes and see if there is cycle
            if (!this.dfs(adjList, 0, -1, visited)) {
                return false;
            }
        // }
        return visited.size === n;
    }

    dfs(adjList, currNode, parent, visited) {
        if (visited.has(currNode)) {
            return false;
        }
        visited.add(currNode);
        const edges = adjList.get(currNode);
        for(let i = 0; i < edges.length; i++) {
            if (parent === edges[i]) {
                // what we're saying here ist hat we need to pass in a parent
                // because if we came from that edge previously, we don't want to 
                // count that as a loop
                continue;
            }
            if (!this.dfs(adjList, edges[i], currNode, visited)) {
                return false;
            }
        }
        // why don't i need visited to be deleted here?
        return true;
    }
}
