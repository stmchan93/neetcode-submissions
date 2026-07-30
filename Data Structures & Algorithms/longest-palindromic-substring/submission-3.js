class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    max = 0;
    start = 0;
    longestPalindrome(s) {
        for(let i = 0; i < s.length ; i++) {
            this.expand(i, i, s);
            this.expand(i, i + 1, s);
        }
        return s.substring(this.start, this.start + this.max);
    }

    expand(left, right, s) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // check the palindromes from all positions 
            left--;
            right++;
        }
        const length = right - left - 1; // this is becuase we are off by 1 here
        if (length > this.max) {
            this.max = length;
            this.start = left + 1;
        }
    }

}
