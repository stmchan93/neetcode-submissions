class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        /*
            loop through the nums array and try to find every combination sum
            you possibly can you just need to try every index and make sure if u have a combination
            you return it into our result array
        */
        const result = [];
        this.findCombinationSum(nums, target, result, 0, 0, []);
        return result;
    }

    findCombinationSum(nums, target, result, index, currSum, subarray) {
        if (currSum > target) {
            return;
        }
        if (target === currSum) {
            result.push([...subarray]);
            return;
        }
        for(let i = index; i < nums.length; i++) {
            currSum += nums[i];
            subarray.push(nums[i]);
            this.findCombinationSum(nums, target, result, i, currSum, subarray);
            subarray.pop();
            currSum -= nums[i];
        }
    }
}
