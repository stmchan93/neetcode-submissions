class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // anagrams i htink about ... frequency maps becuase 
        // anagrams all hve the same char count
        // one frequencyMap === another then it means its an anagram
        // brute force: loop through all strings, sort them, and then and compare if the strings are the same
        // maps cant be compared to very well so maybe you need to store some other way to 
        // to index these strings
        // and you can stort every string, and you can just push them to an array
        // and wheichever soltuio produces the right sorted string we know we can gropu together
        const map = new Map();
        for(let i = 0; i < strs.length; i++) {
            const currStr = strs[i];
            const charCount = new Array(26).fill(0);
            for(let i = 0; i < currStr.length; i++) {
                charCount[currStr.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            }
            const key = charCount.join('#');
            if (!map.has(key)) {
                map.set(key, [currStr])
            } else {
                map.get(key).push(currStr);
            }
        }
        const res = [];
        for(const [key, value] of map) {
            res.push(value);
        }
        return res;

    }
}
