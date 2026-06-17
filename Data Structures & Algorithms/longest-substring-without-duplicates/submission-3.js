class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0 || s.length === 1) {
            return s.length;
        }
        let left = 0;
        const set = new Set();
        let result = 0;
        // two pointer soultion where i have a left and right pointer
        // move the right pointer until i see a character that i've seen before
        // if i've seen the character before then i move the left one over

        // now how do i check if i've seen a character before? i guess a map of the char to the index position
        for(let right = 0; right < s.length; right++) {
            if(!set.has(s[right])) {
                set.add(s[right]);
            } else {
                while (set.has(s[right])) {
                    set.delete(s[left]);
                    left++;
                }
                set.add(s[right]);
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
