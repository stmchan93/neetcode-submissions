class Node {
    next 
    isEnd
    word
    constructor() {
        this.next = new Map();
        this.isEnd = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    root = new Node();

    findWords(board, words) {

        for(let i = 0; i < words.length; i++) {
            this.setupTrie(words[i]);
        }
        const res = [];
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                this.dfs(i, j, board, this.root, res);
            }
        }
        return res;
    }

    dfs(row, col, board, trie, res) {
        if (row === -1 || col === -1 || col >= board[0].length || row >= board.length || board[row][col] === '#') {
            return;
        }
        const ch = board[row][col];
        if (!trie.next.has(ch)) {
            return;
        }
        const temp = board[row][col];
        board[row][col] = '#'
        // we know this is a valid character
        const next = trie.next.get(ch);
        if (next.word) {
            res.push(next.word);
            next.word = null;
        }
        this.dfs(row + 1, col, board, next, res);
        this.dfs(row - 1, col, board, next, res);
        this.dfs(row, col + 1, board, next, res);
        this.dfs(row, col - 1, board, next, res);
        board[row][col] = temp;
    }

    setupTrie(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            if (!curr.next.has(word[i])) {
                curr.next.set(word[i], new Node());
            }
            curr = curr.next.get(word[i]);
        }
        curr.isEnd = true;
        curr.word = word;
    }
}
