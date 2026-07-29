class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /*
            so if i was to do memoizaiton i would need to find
            all teh houses i can rob at this point assuming that if the 
            i + 2 === nums.length - 1
            and i === 0 we CANNOT sum these together because they woudl be next to each other
            
            [2,9,8,3,6]
            you can rob:
            9 + 3 = 12
            8 + 6 = 14
            9 + 6 = 15 <- this is the best we can do 
            2 + 8 = 10
            2 + 3 = 6

            it would mean that we can just keep finding if we need to skip
            or rob the current house and skip 2 over
            but we also have to keep in mind if i === 0 we should not include the last one
            i think the only way we can know is if our startIndex = 0 or 1... so maybe
            we have to do something like 
            mabye we just pass in the start index as a parameter to know if start Index === 0 and nums.length === nums.length - 1 then we know we can return 0
        */
        if (nums.length === 1) {
            return nums[0];
        }
        return Math.max(
            this.robMemo(nums.slice(0, nums.length - 1), 0, new Map()),
            this.robMemo(nums.slice(1), 0, new Map())
        );
    }

    robMemo(nums, currIndex, memo) {
        if (currIndex >= nums.length) {
            return 0;
        }
        if (memo.has(currIndex)) {
            return memo.get(currIndex);
        }
        const robThis = nums[currIndex] + this.robMemo(nums, currIndex + 2, memo);
        const skipThis = this.robMemo(nums, currIndex + 1, memo);
        const max = Math.max(robThis, skipThis)
        memo.set(currIndex, max);
        return max;
        
    }
}
