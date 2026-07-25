class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        /*
            create an adjacency list
            make sure the edges are properly connected to each other
            loop through the numver of nodes
            visit the ndoe, and make sure you dont re-visit the parent
            you know if something is connected if the numbers in the set are not in the other set

            when we loop through our nodes of n we dont really know if something is disconnected
            only know its disconnected if and only if when we dfs we dont find that node in our adjacently list
        */
        const adjList = new Map();
        for(let i = 0; i < n; i++) {
            adjList.set(i, []);
        }

        for(let i = 0; i < edges.length; i++) {
            adjList.get(edges[i][0]).push(edges[i][1]);
            adjList.get(edges[i][1]).push(edges[i][0]);
        }
        // 0 -> [1]
        // 1 -> [0,2]
        // 2 -> [1]
        // 3 -> [4]

        const visited = new Set();
        let count = 0;
        for(let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                this.findConnected(adjList, i, -1, visited);
            }
        }
        return count;
    }

    findConnected(adjList, curr, parent, visited) {
        if (visited.has(curr)) {
            return;
        }
        visited.add(curr);
        const deps = adjList.get(curr);
        for(let i = 0; i < deps.length; i++) {
            if (deps[i] === parent) continue;
            this.findConnected(adjList, deps[i], curr, visited);
        }
    }
}
