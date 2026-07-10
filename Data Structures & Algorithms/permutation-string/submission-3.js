class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // it woudlnt be a map because permutation order matters
        // woudl you just have a sliding window approach and create a map for every length of s1 in s2
        // and you just keep checking to see if the stringified version of s1 is in the charCount of s2
        const charCountS1 = new Array(26).fill(0);
        const charCountS2 = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            charCountS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let left = 0;
        for(let right = 0; right < s2.length; right++) {
            charCountS2[s2.charCodeAt(right) - 'a'.charCodeAt(0)]++;
            if (right - left + 1 > s1.length) {
                charCountS2[s2.charCodeAt(left) - 'a'.charCodeAt(0)]--;
                left++;
            }
            let hasMatch = true;
            for(let i = 0; i < 26; i++) {
                if (charCountS1[i] !== charCountS2[i]) {
                    hasMatch = false;
                }
            }
            if (hasMatch) {
                return true;
            } 
            // now theyre equal becuase right = 2 - 0 + 1 > s1.length
            // 3 so now its equal so 
            // s1 = abc
            // s2 = lec
        }
        return false;
    }
}
