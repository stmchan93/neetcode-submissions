class Node {
    next
    isEnd
    word
    constructor() {
        this.next = new Map();
        this.isEnd = false;
        this.word = null;
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
        /*
            brute force: for every word, traverse the grid to find the word if ti exists
            but that would be like n*n * words which is really large
            a better way would be to.. is there a way we can only traverse once
            we probably have to start at a character and likely recurse to see if we have found another
            character that matches a word ... ok so acutlaly a better way to is to have a trie i believe
            where we store all the characters in the words in a trie
            after we store the characters in a trie, we loop through the characters in the board
            to find if the trie and then if you find a character that is in the trie, then we recurse and keep
            seeing if there is a word in the tree, once we recurse and find that isEnd === true, then we know that
            we have finally found a word, we push that to our result array, and keep dfs'ing
        */
        this.constructTrie(words);
        const res = [];
        const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false) );
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                this.dfs(board, i, j, visited, this.root, res);
            }
        }
        return res;
    }

    dfs(board, row, col, visited, trie, res) {
        if (row === -1 || col === -1 || row >= board.length || col >= board[0].length || visited[row][col]) {
            return;
        }
        const ch = board[row][col];
        if (!trie.next.has(ch)) {
            return false;
        }
        const nextNode = trie.next.get(ch);
        if (nextNode.word) {
            res.push(nextNode.word);
            nextNode.word = null;
        }
        visited[row][col] = true;
        this.dfs(board, row + 1, col, visited, nextNode, res);
        this.dfs(board, row - 1, col, visited, nextNode, res);
        this.dfs(board, row, col - 1, visited, nextNode, res);
        this.dfs(board, row, col + 1, visited, nextNode, res);
        visited[row][col] = false;
    }

    constructTrie(words) {
        for(let i = 0; i < words.length; i++) {
            let curr = this.root;
            for(let j = 0; j < words[i].length; j++) {
                if (!curr.next.has(words[i][j])) {
                    curr.next.set(words[i][j], new Node());
                }
                curr = curr.next.get(words[i][j]);
            }
            curr.isEnd = true;
            curr.word = words[i];
        }
    }
}
