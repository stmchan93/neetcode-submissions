class Node {
    next
    isEnd
    constructor() {
        this.next = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    // set up a Node class that keep track of every letter
    // that letter has a "next" that has a map of all the letters to other
    // letters it could be near
    root

    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            if (!curr.next.has(word[i])) {
                return false;
            }
            curr = curr.next.get(word[i]);
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let i = 0; i < prefix.length; i++) {
            if (!curr.next.has(prefix[i])) {
                return false;
            }
            curr = curr.next.get(prefix[i]);
        }
        return true;
    }
}
