class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        let res = 0;
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }
        for(let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                // we know that this can be the start of a sequence
                let count = 1;
                while(set.has(nums[i] + count)) {
                    count++;
                }
                res = Math.max(res, count);
            }
        }
        return res;
    }
}
