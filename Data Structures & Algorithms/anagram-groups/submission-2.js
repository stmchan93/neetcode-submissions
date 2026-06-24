class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // we have a list of strings
        // we need to group them based on anagrams
        // usually when i think of anagrams i think of frequency so we likely
        //. need to go through every string and count the frequency of every string 
        // once we count the frequency of every string....ah then we can use the array as the key in the hash map to 
        // group the string the frequency count of the string as the key in the hash map it sounds like.
        const res = [];
        const totalMapCount = new Map();
        for(let i = 0; i < strs.length; i++) {
            const freqArray = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                freqArray[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            const freqArrayAsStr = freqArray.toString();
            if (!totalMapCount.has(freqArrayAsStr)) {
                totalMapCount.set(freqArrayAsStr, [strs[i]]);
            } else {
                totalMapCount.get(freqArrayAsStr).push(strs[i]);
            }
        }
        for(const key of totalMapCount.keys()) {
            res.push(totalMapCount.get(key));
        }
        return res;
    }
}
