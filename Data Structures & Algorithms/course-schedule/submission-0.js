class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        // set up our adjacency list
        const graph = new Map();
        for(let i = 0; i < numCourses; i++) {
            graph.set(i , []);
        }
        for(const [course, prereq] of prerequisites) {
            graph.get(course).push(prereq);
        }
        const visited = new Set();
        for(let i = 0; i < numCourses; i++) {
            // check to see if there is a cycle in any of your prereqs
            if (!this.dfs(graph, i, visited)) return false;
        }
        return true;
    }

    dfs(graph, course, visited) {
        if (visited.has(course)) {
            return false;
        }
        if (graph.get(course).length === 0) {
            return true;
        }
        visited.add(course);
        // check to see if there are any cycles in the prereqs
        const prereqs = graph.get(course);
        for(const prereq of prereqs) {
            if (!this.dfs(graph, prereq, visited)) {
                return false;
            }
        }
        // if we know that we've been able to visit all the prereqs in the list of graph, 
        // we successfully we know that any of its prereqs also do not have cycles so we can 
        // set its list of prereqs to an empty list

        visited.delete(course);
        graph.set(course, []);
        return true;
    }
}
