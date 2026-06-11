class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        let map = new Map();
        for(let i = 0; i < strs.length; i++) {
            let freq = new Array(26).fill(0)
            for(let j = 0; j < strs[i].length; j++) {
                freq[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            const freqAsStr = freq.toString();
            if (map.has(freqAsStr)) {
                map.get(freqAsStr).push(strs[i]);
            } else {
                map.set(freqAsStr, [strs[i]]);
            }
        }
        for(const key of map.keys()) {
            res.push(map.get(key));
        }
        return res;
    }
}
