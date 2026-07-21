class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // meta: backtrack by finding if the sum of the numbers equals to target
        // if its greater, we know it can't be so we recurse out
        // and try other values
        // make sure we dont get dupliates by keeping track of hwere we are in the backtracking recursion
        
        const res = [];
        this.findSum(nums, target, res, 0, 0, []);
        return res;
    }

    findSum(nums, target, res, currIndex, currSum, currNums) {
        if (currSum > target) {
            return;
        }
        console.log("huh")
        if (currSum === target) {
            res.push([...currNums]);
        }
        for(let i = currIndex; i < nums.length; i++) {
            currSum += nums[i];
            currNums.push(nums[i]);
            this.findSum(nums, target, res, i, currSum, currNums);
            currSum -= nums[i];
            currNums.pop();
        }
    }

}
