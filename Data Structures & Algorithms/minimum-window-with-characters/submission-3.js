class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // brute force would be to do a double for loop and try every combination 
        // of every substring and see which substring's length is less than
        // the current max length substring we found so far for the substring that would
        // contain the substring t 
        // if we need to return a substring im thinking of a sliding window approach
        // where we have two pointers that start at 0, and we keep incrementing it.
        // we i think need ot keep a map of the characters that we see so far and 
        // we might get to the point where we, hav ea map and we count the frequency of 
        // i think we have to somehow know when we have the substring in our window,
        // then we keep decreasing the window size until we get to the point where
        // our window doenst contain teh characers anymore, but we keep the max substring so far
        // and hten when we get to the pint where we dont have all the characters in the window
        // we start increasing right again
        // we know e have every character in the substring when we know that the 
        // frequency of XYZ is the same as OUZODYXAZV XYZ
        // i see. so we can have a count for have and need? and we can increment the have 
        // while we have the number of characters that we have in our 
        // as i increase my window and i have a character... have is going to be the count
        // of 
        const needCount = new Map();
        let need = 0;
        for(let i = 0; i < t.length; i++) {
            if (!needCount.has(t[i])) {
                needCount.set(t[i], 1);
                need++;
            } else {
                needCount.set(t[i], needCount.get(t[i]) + 1);
            }
        }
        const window = new Map();

        let have = 0;
        let left = 0;
        let result = "";
        let minLen = Infinity;
        for(let right = 0; right < s.length; right++) {
            const currChar = s[right];
            if (!window.has(currChar)) {
                window.set(currChar, 1);
            } else {
                window.set(currChar, window.get(currChar) + 1);
            }
            const currCharCount = window.get(currChar);
            const needCharCount = needCount.get(currChar);
            if (currCharCount === needCharCount) {
                have++;
            }
            while (have === need) {
                // record
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    result = s.substring(left, right + 1);
                }
                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);
                if (needCount.has(leftChar) && window.get(leftChar) < needCount.get(leftChar)) {
                    have--;
                }
                left++;
            }
        }
        return result;
    }
}
