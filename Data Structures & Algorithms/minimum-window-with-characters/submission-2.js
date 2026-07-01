class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // brute force: find very substring in s and see if that contains the characters t in it
        // so maybe what you do is you loop through T and see if you can count hte frequency of the characters
        // in t and then you loop through S and you go from right to left and you start checking if 
        // s[right] is in tFreq map, if it isn't just keep giong but if it is then we know that we've reached
        // the substring then we do it on the other side and we return the substring from left, right 
        let res = "";
        let bestLen = Infinity;
        let tFreq = new Map();
        for(let i = 0; i < t.length; i++) {
            if (tFreq.has(t[i])) {
                tFreq.set(t[i], tFreq.get(t[i]) + 1);
            } else {
                tFreq.set(t[i], 1);
            }
        }
        // i see so you basicaly keep a count of the current map as well like sFreq
        // and if sFreq === tFreq then you increment "has" meaning you know you have that number of
        // that character in the map
        let have = 0;
        const need = tFreq.size;
        const sFreq = new Map();
        let left = 0;
        for(let right = 0; right < s.length; right++) {
            if (!sFreq.has(s[right])) {
                sFreq.set(s[right], 1);
            } else {
                sFreq.set(s[right], sFreq.get(s[right]) + 1);
            }
            if (sFreq.get(s[right]) === tFreq.get(s[right])) {
                have++;
            }
            while (have === need) {
                // windowSize
                if (right - left + 1 < bestLen) {
                    bestLen = right - left + 1;
                    res = s.substring(left, right + 1);
                }
                sFreq.set(s[left], sFreq.get(s[left]) - 1);
                if (tFreq.has(s[left]) && tFreq.get(s[left]) > sFreq.get(s[left])) {
                    have--;
                }
                left++;
            }
        }
        return res;
    }
}
