class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /**
         * meta: create an adjacency list
         * if there is a cycle in the list we cannot finish it
         * we can find if we have a cycle by having a visited set
         * and if we navigate through each prerequsite and if the node is alerady in the visited set
         * we return false, otherwise we return true
         */
        const adjList = new Map();
        for(let i = 0; i < numCourses; i++) {
            adjList.set(i, []);
        }

        for(let i = 0; i < prerequisites.length; i++) {
            // push all prerequisites into this list
            adjList.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }
        const visited = new Set();
        for(let i = 0; i < numCourses; i++) {
            if (!this.dfs(adjList, i, visited)) {
                return false;
            }
        }
        return true;
    } 

    dfs(adjList, currCourse, visited) {
        if (visited.has(currCourse)) {
            return false;
        }
        visited.add(currCourse);
        for(let i = 0; i < adjList.get(currCourse).length; i++) {
            if (!this.dfs(adjList, adjList.get(currCourse)[i], visited)) {
                return false;
            }
        }
        visited.delete(currCourse);
        return true;
    }
}
