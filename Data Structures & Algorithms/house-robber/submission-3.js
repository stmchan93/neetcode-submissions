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
        let rob1 = 0;
        let rob2 = 0;
        for(let i = 0; i < nums.length; i++) {
            let temp = Math.max(rob2 + nums[i], rob1);
            rob2 = rob1;
            rob1 = temp;
        }
        return rob1;
    }
}
