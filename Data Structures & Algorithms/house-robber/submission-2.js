class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /*
            it sounds like for house robber, you can either take the current value + the
            sum of the max of the subsequent vlaues
            OR you can just sum the max of the subsequent values AFTER that current value

            the reason is, in 1, 1, 3, 3, 5

            you can take 1 then take the max of 3, 3, 5 but with the same algoirhtm

            there are a few ways to do it...
        */
        const dp = new Array(nums.length + 2).fill(0);
        for(let i = nums.length - 1; i >= 0; i--) {
            dp[i] = Math.max(nums[i] + dp[i + 2],  dp[i + 1]);
        }
        return dp[0];
    }
}
