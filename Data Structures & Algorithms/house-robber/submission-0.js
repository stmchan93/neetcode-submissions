class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /*
            brute force: try every other combination of numbers and store the max to find
            the maximum number of houses you could rob and keep comparing the max

            a better solution would be a greedy solution which owuld be to try try every combination
            but we would try to. memoize previous combinations that we've treid so that
            we dont recalculate if we've tried to steal from that house previously 

            what we can try to do is create a new method where we pass in nums, the current index we're
            at, and then like for example:

            [1, 2, 3, 4, 5, 6, 7, 8]

            we could try combinations:
            0, 2, 4, 6
            or
            1, 3, 5, 7
            or
            0, 3, 5, 7 for exmaple
            but if we've already sumemd 3, 5, 7 before we can store this and memoize it
            so that we wouldn't have to recalculate it and we can try every combination
            to see if we could rob the right number of houses
            i think i dont know which combinations to store.
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
        // now ask yourself what is the best i can do at this poistion
        // either i can rob or skip
        const rob = nums[index] + this.robMemo(nums, index + 2, memo);
        const skip = this.robMemo(nums, index + 1, memo);
        const max = Math.max(rob, skip);
        memo.set(index, max);
        return max;
    }
}
