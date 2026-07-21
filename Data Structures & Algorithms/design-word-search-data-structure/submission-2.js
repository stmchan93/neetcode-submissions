class Node {
    next
    isEnd
    constructor() {
        this.next = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    // this reminds me a trie data structure...
    // so when you add a word, you have to add it to a node and that node has a next
    // each node will have a next that contains the charactter and a pointer to the next 
    // list of nodes that the next character can have
    // howeer, when we search, if we come across a dot, we assume that is fine so we
    // will just skip over that letter and continue iterating through the word that you want to serach for
    // and then if a letter does not match you return false, otherwise you return true.

    root
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            if (!curr.next.has(word[i])) {
                curr.next.set(word[i], new Node());
            }
            curr = curr.next.get(word[i]);
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        console.log("root: ", this.root)
        return this.dfs(word, 0, this.root);
    }

    dfs(word, index, curr) {
        if (index === word.length) {
            return curr.isEnd;
        }
        const ch = word[index];
        if (ch === '.') {
            for (const value of curr.next.values()) {
                if (this.dfs(word, index + 1, value)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!curr.next.has(ch)) {
                console.log("Returned false: ", ch)
                return false;
            }
            return this.dfs(word, index + 1, curr.next.get(ch));
        }
    }
}
