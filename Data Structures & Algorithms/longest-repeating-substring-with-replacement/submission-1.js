class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // find the character with the largest frequency inf irst pass
    // then when we keep fidning that characracter with largest frequency,
    // we choose to replace characters outside of it
    // we can replace characters simply by decrementing k until it gets to 0
    // once k is at 0, we move the pointer to the left until we get to the point where
    // there is a character that is not our largest frequency character
    // then we increment k and keep giong to the right
    // keep track of the max length of the right - left + 1 and keep going
    characterReplacement(s, k) {
        let left = 0;
        let map = new Map();
        let maxFreq = 0;
        let res = -1;
        for(let right = 0; right < s.length; right++) {
            if (!map.has(s[right])) { // get the frequency of the char
                map.set(s[right], 1)
            } else {
                map.set(s[right], map.get(s[right]) + 1);
            }
            if (map.get(s[right]) > maxFreq) { // if you found a max frequency character, update it so we know
            // in this window what is the max character because we want to always remove the non-max characters from
            // this window
                // track the max frequency in the window so far
                maxFreq = map.get(s[right]);
            }
            while (right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;  // if its greater than k then we know that we are past our limit of replacing k characters
            }
            const windowLength = right - left + 1; // calculat ehte current window length
            res = Math.max(res, windowLength);
        }
        return res;

    }
}


// ddcggddcdcc
// k = 2