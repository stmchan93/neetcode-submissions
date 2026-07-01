class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // xyyx => xxxx => 4 k = 1
        // AAABABB -> AAAAABB -> 5 k = 1
        // BBABBAAA -> 5 k = 1
        // replace only k characters
        // brute force solution is to basically find every substring in s
        // and replace k characters in every substring of s
        // this ends up being like n^2 * t
        // XYYX 
        // sliding window where go through every character and expand the window
        // to the point where we first of all we have to know the most frequently used characger
        // in the sliding window because most freq seen character will tell us what NOT to replace
        // and then we then need to know exactly once we see a character that is NOT the most freqently seen character
        // we start checking to see if the windowSize minus the most frequently counted character > k because
        // if this is the case then we know that we have more than k characters in our window
        // and that means we have to shrink the window  becuase we have already "replaced" k characters in our window
        // prior to that we record the length of the string that we've replaced k characters in as the max, 
        // and we keep doing this for every window that has replaced less than k characters
        // we can keep a "max" of the commonly seen character in the string 

        const freqMap = new Map();
        let maxCharCount = 0;
        let left = 0;
        let res = 0;
        // AAABABB
        for(let right = 0; right < s.length; right++) {
            if(!freqMap.has(s[right])) {
                freqMap.set(s[right], 1);
            } else {
                freqMap.set(s[right], freqMap.get(s[right]) + 1);
            }
            maxCharCount = Math.max(maxCharCount, freqMap.get(s[right]));
            while (right - left + 1 - maxCharCount > k) {
                // this is greater than k meaning that there are more characters we've replaced than k times
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
