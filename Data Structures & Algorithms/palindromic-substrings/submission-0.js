class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    count = 0;
    countSubstrings(s) {
        for(let i = 0; i < s.length; i++) {
            this.expand(i, i, s);
            this.expand(i, i + 1, s);
        }
        return this.count;
    }

    expand(left, right, s) {
        if (s[left] !== s[right]) {
            return;
        }
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            this.count++;
            left--;
            right++;
        }
        // we are at the point where we have expanded one too many
    }
}
