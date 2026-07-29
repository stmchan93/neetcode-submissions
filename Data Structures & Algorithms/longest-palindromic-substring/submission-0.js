class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        /*
            brute force: check every substring that is a palindrome and if it is then we store is as the "max" based on the length
            a better way mgiht be to do a sliding window approach where you keep adding characters into the window
            and then you check to see if its a palindrome
            if it is then you return true.
            i think this is O(n^2) 
        */
        let max = -Infinity;
        let result = "";
        for(let left = 0; left < s.length; left++) {
            for(let right = 0; right < s.length; right++) {
                if (this.isPalindrome(left, right, s)) {
                    if (right - left + 1 > max) {
                        result = s.substring(left, right + 1);
                        max = right - left + 1;
                    }
                }
            }
        }
        return result;
    }

    isPalindrome(left, right, s) {
        while (left <= right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
