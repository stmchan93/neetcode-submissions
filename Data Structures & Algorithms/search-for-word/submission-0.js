class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        /*
            thinking aloud... u just need to check every letter
            and see if u can find the letter ur looking for
            then u check up down left right to see if the next letter is there
            then yo ukeep doing this until you find the letter, if you dont then you 
            return false. it almost feels like a backtracking solution becasue
            // u havet tryin CA you might try to go down, and then ur lik eoh 
            // that doesnt help because ti'''ll produce CAA so u have to remove
            A and then try CAT and if that works then ur done. so what we need to do is
            to basically start the first index and see if that's where our word starts
            if it doesnt, we loop through every row to see if we can find where our row starts.

        */
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if (this.foundWord(board, word, 0, i, j)) {
                    return true;
                }
            }
        }
        return false
    }

    foundWord(board, word, index, row, col) {
        let found = false;
        if (index === word.length) {
            return true;
        }
        if (row === -1 || col === -1 || row >= board.length || col >= board[0].length || board[row][col] !== word[index] || board[row][col] === '#') {
            return false;
        } else {
            const tmp = board[row][col];
            board[row][col] = '#'
            found = this.foundWord(board, word, index + 1, row + 1, col) || 
            this.foundWord(board, word, index + 1, row, col + 1) || this.foundWord(board, word, index + 1, row - 1, col)
            || this.foundWord(board, word, index + 1, row, col - 1);
            board[row][col] = tmp;
        }
        return found;
    }
}
