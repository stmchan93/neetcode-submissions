class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /*
            we're basically saying that the second element is a prerequesite of the first one
            so we need to basically make sure that we do not have any cycles when we're 
            doing all these courses
            we need to make sure that as we execute all of these prerequisites without any cycles
            meaning it hsould createsome sort of graph that is directed its basically a directed
            graph that each should feed into each other
            so i think the way to solve this is to create an adjacently list, a directed one
            and navigate through the adjacency list and IF there is a spot where we have already
            visited a node before we know that we have a cycle and we return false
        */
        const adjList = new Map();
        for(let i = 0; i < numCourses; i++) {
            adjList.set(i, []);
        }
        // [[0,1],[0,2]]
        // now create the directed list
        for(let i = 0; i < prerequisites.length; i++) {
            // in order to FINISH 0,  you have to finish 1
            adjList.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }

        // now we create a visited set
        const visited = new Set();
        for(let i = 0; i < numCourses; i++) {
            // looop through the number of courses and see if you can visit these nodes
            if (!this.dfs(adjList, visited, i)) {
                return false;
            }
        }
        return true;
    }

    dfs(adjList, visited, currNode) {
        if (visited.has(currNode)) {
            return false;
        }
        visited.add(currNode);
        const prereqs = adjList.get(currNode);
        for(let i = 0; i < prereqs.length; i++) {
            if (!this.dfs(adjList, visited, prereqs[i])) {
                return false;
            }
        }
        visited.delete(currNode);
        return true;
    }
}
