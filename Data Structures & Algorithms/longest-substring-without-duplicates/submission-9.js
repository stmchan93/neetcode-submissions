class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // so what i want to think about is a sliding window approach,
        // where you keep adding characters into the sliding window until you get a duplicate characters
        // once you have a duplicate, you start moving the left pointer over 
        // i feel like I need a set of some sort too to track the characters within the string because how would you know
        // if that character is in the list or not. so i guess for your sliding window, you would have a set
        // that contains all the characters, like zxy and if you see a cahracter youv seem before, you i guess would
        // remove it adn add in the new one even though it might seem repetitive i think teh set needs to because
        // representative of what's in the entire string
        const set = new Set();
        let left = 0;
        let max = 0;
        for (let right = 0; right < s.length; right++) {
            // we already have seen this character
            // i guess we should REMOVE the characters until there is no more of that duplicate character in the set
            while(set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
