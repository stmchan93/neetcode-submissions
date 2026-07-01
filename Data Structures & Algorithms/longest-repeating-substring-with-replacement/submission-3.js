class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // i guess a brute force solution is:
        // get a character and go through the array, and every time u dont see that character
        // you replace another character k times and count the characters that were replaced 
        // and then you get the output that way but you ohave to do this for every single
        // element in the array its O(N^2)
        // can we do better? so i think the works it that this is a sliding window oand we have to 
        // calculate the most frequently found characters in hte input string and use that to calculate
        // the window length minus the max number of characters in the string to get the window
        // i keep a maximum of what ever is in the window the maximum characer count at that moment
        // and i loop through the array and find if the window - 
        let left = 0;
        let maxFreqCharCount = 0;
        let res = 0;
        const freqCount = new Map();
        for(let right = 0; right < s.length; right++) {
            if (!freqCount.has(s[right])) {
                freqCount.set(s[right], 1);
            } else {
                freqCount.set(s[right], freqCount.get(s[right]) + 1);
            }
            maxFreqCharCount = Math.max(maxFreqCharCount, freqCount.get(s[right]));
            // this basically says if the window size mins the maximum amount of characters
            // is greater than k which means that there are more than k chararacters in the window
            // then we know we have to move left
            while (right - left + 1 - maxFreqCharCount > k) {
                freqCount.set(s[left], freqCount.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
