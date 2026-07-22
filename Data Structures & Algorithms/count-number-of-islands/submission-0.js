class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // what we need to do is a depth first search? and keep a track of some count 
        // we can keep some boolean array of the grid that is a 2d array of visited array
        // that will tell us hey is this value visited if it is then we don't go there anymore
        // but hten when we find a 1 we start recursing and finding if these values are visited
        //  i could try to turn them into  0's once i visit htem because 0's should not be visited
        // so basicaly go through every grid item, mark them as 0 once you visit them, return out 
        // of the loop, and try for the next island

        let res = 0;
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    this.dfs(i, j, grid);
                    res++;     
                }
            }
        }
        return res;
    }

    dfs(row, col, grid) {
        if (row === -1 || col === -1 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
            return;
        }
        grid[row][col] = "0";
        this.dfs(row + 1, col, grid);
        this.dfs(row - 1, col, grid);
        this.dfs(row, col + 1, grid);
        this.dfs(row, col - 1, grid);
    }
}
