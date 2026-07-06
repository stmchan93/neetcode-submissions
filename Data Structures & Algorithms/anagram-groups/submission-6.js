class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // count the frequency of every single string in a map
        // loop through eveyr map and see if the frequcny count in every map is the same
        // O(n^2)
        // loop through eveyr string
        const map = new Map();
        for(let i = 0; i < strs.length; i++) {
            const charCount = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                charCount[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            const key = charCount.join('#');
            if (map.has(key)) {
                map.get(key).push(strs[i]);
            } else {
                map.set(key, [strs[i]]);
            }
        }
        const result = [];
        for(const [key, value] of map) {
            result.push(value);
        }
        return result;
    }
}
