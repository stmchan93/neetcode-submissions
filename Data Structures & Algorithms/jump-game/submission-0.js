class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        return this.canJumpMemo(nums, 0, new Map());
    }

    canJumpMemo(nums, idx, memo) {
        if (idx === nums.length - 1) {
            return true;
        }
        const numJumps = nums[idx];
        if (numJumps === 0) {
            return false;
        }
        if (memo.has(idx)) {
            return memo.get(idx);
        }
        for(let i = 1; i <= numJumps; i++) {
            if (this.canJumpMemo(nums, idx + i, memo)) {
                memo.set(idx, true);
                return true;
            }
        }
        memo.set(idx, false);
        return false;
    }
}
