class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        let prefix = 1; // this will keep track of the values multiplied prior to i
        for(let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = 1; // value should be 1 because there is nothing prior to i
                // need to do this because nums[0 - 1] = nums[-1]
            } else {
                prefix *= nums[i - 1]; // keep a multiplicative cumulative value of the value prior to i 
                res[i] = prefix; // res[i] tracks all the values prior to i
            }
        }
        prefix = 1; // reset the prefix
        for(let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                // res[i] should be correct here becuase it should be all the values multiplied prior to i
                continue;
            }
            // we have to multiply prefix *= nums[i + 1] because is it the product of the values prior to 
            // i and we just mulitply that by teh current res[i] to get the final value at i
            prefix *= nums[i + 1]
            res[i] *= prefix;
        }
        return res;
    }
}
