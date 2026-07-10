class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        const map = new Map();
        for(let i = 0; i < strs.length; i++) {
            const charCount = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                charCount[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            const key = charCount.join('#');
            console.log("Key: ", key)
            if (map.has(key)) {
                map.get(key).push(strs[i]);
            } else {
                map.set(key, [strs[i]]);
            }
        }
        for(const [key, value] of map) {
            res.push(value);
        }
        return res;
    }
}
