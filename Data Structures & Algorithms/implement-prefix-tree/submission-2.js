class Node {
    next
    isEnd
    constructor() {
        this.isEnd = false;
        this.next = new Map();
    }
}

class PrefixTree {

    root
    constructor() {
        this.root = new Node();
    }

    // meta: create a trie with every character to insert it
    // when you search you have to find if the character is ended with a variable like isEnd and when
    // inserting you set isEnd = true
    // starts with you dont need to find isEnd
    
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
            if (curr.next.has(word[i])) {
                curr = curr.next.get(word[i]);
            } else {
                return false;
            }
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
            if (curr.next.has(prefix[i])) {
                curr = curr.next.get(prefix[i]);
            } else {
                return false;
            }
        }
        return true;
    }
}
