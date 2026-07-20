class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    // loop through the nums and test out every possibility to see if it will sum to our target
    // it can be any nmber of numbers
    // its likely a n! algorithm 
    // loop through the nums array, and pass in a results array
    // and we try every combination of nums to see if it equals our target. we keep
    // a current sum that is used to keep the current value of the numbers summed in the array
    // so far. if it equals to our number, we add it into our result. if it does not, 
    // we backtrack and remove numbers and try the next set of combination to keep trying
    combinationSum(nums, target) {
        const res = [];
        this.findCombinationSum(nums, target, [], 0, 0, res);
        return res;
    }

    findCombinationSum(nums, target, currNums, currSum, start, res) {
        if (currSum > target) {
            return;
        }
        if (currSum === target) {
            res.push([...currNums]);
            return;
        }
        for(let i = start; i < nums.length; i++) {
            currSum += nums[i];
            currNums.push(nums[i]);
            this.findCombinationSum(nums, target, currNums, currSum, i, res);
            currSum -= nums[i];
            currNums.pop();
        }
    }
}
