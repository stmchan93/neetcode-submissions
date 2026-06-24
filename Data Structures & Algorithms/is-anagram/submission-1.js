class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // the brute force method is to sort the characters in each
        // then go through the characters one at a time and see if they are anagrams
        // however this is O(nlogn)

        // a better solution would be to create a frequency map to count the frequency
        // in which these characters appear, and then count the frequency of each character
        const sFreq = new Array(26).fill(0);
        const tFreq = new Array(26).fill(0);
        for(let i = 0 ; i < s.length; i++) {
            sFreq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        for(let i = 0; i < t.length; i++) {
            tFreq[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        console.log("sfreq: ", sFreq);
        console.log("trrq: ", tFreq);
        for(let i = 0; i < sFreq.length; i++) {
            if (sFreq[i] !== tFreq[i]) {
                return false;
            }
        }
        return true;
    }
}
