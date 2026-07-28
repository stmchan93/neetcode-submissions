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

        return this.robMemo(nums, 0, new Map());
    }

    robMemo(nums, index, memo) {
        if (index >= nums.length) {
            return 0;
        }
        if (memo.has(index)) {
            return memo.get(index);
        }
        const robThis = nums[index] + this.robMemo(nums, index + 2, memo);
        const skipThis = this.robMemo(nums, index + 1, memo);
        const max = Math.max(robThis, skipThis);
        memo.set(index, max);
        return max;
    }
}
