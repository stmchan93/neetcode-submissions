class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            const foundNum = target - nums[i];
            if (map.has(foundNum)) {
                return [i, map.get(foundNum)]
            }
            if(!map.has(nums[i])) {
                map.set(nums[i], i);
            }
        }
        return [-1, -1];
    }
}
