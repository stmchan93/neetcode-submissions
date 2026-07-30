class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /*
            sliding window and every time you see a duplicate you move the left pointer
        */
        let left = 0;
        const set = new Set();
        let max = 0;
        for(let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            max = Math.max(right - left + 1, max);
        }
        return max;
    }
}
