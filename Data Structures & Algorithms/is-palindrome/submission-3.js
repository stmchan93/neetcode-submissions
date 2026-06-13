class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // i would have two pointers start at start + end of string
    // i would just see if they equal eahc ohter and the moment they don't its not a palindrome anymore
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let start = 0;
        let end = s.length - 1;
        for(let i = 0; i < s.length; i++) {
            if (start === end || start > end) {
                return true;
            } else if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
