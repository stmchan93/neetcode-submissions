class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const count = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        for(let j = 0; j < t.length; j++) {
            count[t.charCodeAt(j) - 'a'.charCodeAt(0)]--;
        }
        return count.every(n => n === 0);
    }
}
