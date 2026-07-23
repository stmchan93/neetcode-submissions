class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        // so the idea is you start at the pacific ocean and you add all the nodes there into the pac set
        // and you check to see if the current node you're on is LESS than the previous node if it is, we 
        // cannot add it to our set to traverse to for exmaple if we're on 3 and the previous node was 2 we should 
        // not add it to the nodes htat we traversed to becuase it means the values went upwards
        // meta: create a set of the atlatnic and pacific nodes, and add each ndoes at hte pacific and atlatnic to
        // a set and do DFS from there to see if the the nodes from there are in DECREASING order from the previous node
        // if they are, dont add it into the set of visited, but if it is, add it to the set of visited because it
        // provides a way to get to the desired ocean
        // then return
        const rows = heights.length;
        const cols = heights[0].length;

        const pac = new Set();
        const atl = new Set();

        const res = [];

        for(let i = 0; i < rows; i++) {
            this.dfs(heights, i, 0, pac, heights[i][0]);
            this.dfs(heights, i, cols - 1, atl, heights[i][cols - 1]);
        }

        for(let i = 0; i < cols; i++) {
            this.dfs(heights, 0, i, pac, heights[0][i]);
            this.dfs(heights, rows - 1, i, atl, heights[rows - 1][i]);
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if (pac.has(`${i},${j}`) && atl.has(`${i},${j}`)) {
                    res.push([i, j])
                }
            }
        }

        return res;
    }

    dfs(heights, row, col, visited, prevHeight) {
        if (
            row === -1 ||
            col === -1 ||
            row >= heights.length ||
            col >= heights[0].length || 
            heights[row][col] < prevHeight ||
            visited.has(`${row},${col}`)
        ) {
            return;
        }
        visited.add(`${row},${col}`);
        const height = heights[row][col];
        this.dfs(heights, row + 1, col, visited, height);
        this.dfs(heights, row - 1, col, visited, height);
        this.dfs(heights, row, col + 1, visited, height);
        this.dfs(heights, row, col - 1, visited, height);
    }
}
