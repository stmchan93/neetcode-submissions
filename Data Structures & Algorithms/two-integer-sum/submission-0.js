class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.get(nums[i]) !== undefined) {
                return [map.get(nums[i]), i];
            } else {
                map.set(target - nums[i], i);
            }
        }
    }
}
