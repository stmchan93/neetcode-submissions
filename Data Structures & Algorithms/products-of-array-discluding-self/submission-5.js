class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /*
            the multiplication of every number is every number multipled by 
            itself multipled by each other
            meaning like 1 * 2 * 6 = 12 which gives the value of 4
            or 1 * 2 * 4 = 8 for 6
            or 6 * 4 * 2 = 48 for 1

            i think waht we need to do is keep a prefix number, and multiply that number by the 
            first number. once that is multiplied, we then go the next position where we multiply
            our prefix number by teh next number, and we know that is the value of all the numbers muliplied PRIOR to that number. we then store this into an array, and do it going bakcwards to make sure
            that we have all the numbers multiplied by all the numbers going backwrards prior to that number
            sso that we have the numbers at htat position multiplied before AND after it
        */
        let res = new Array(nums.length).fill(1);
        let prefix = 1;
        for(let i = 0; i < nums.length; i++) {
            // multiply the prefix multiplied by the current number and keep the numbers prior to that
            // in res
            res[i] = prefix;
            prefix *= nums[i];
        }
        prefix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            res[i] = res[i] * prefix;
            prefix *= nums[i];
        }
        return res;
    }
}
