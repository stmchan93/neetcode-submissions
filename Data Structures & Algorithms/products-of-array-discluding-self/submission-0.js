class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [];
        const right = [];
        let prev = 1;
        left[0] = 1;
        for(let i = 1; i < nums.length; i++) {
            prev *= nums[i-1];
            left[i] = prev;
        }
        prev = 1;
        right[nums.length - 1] = 1;
        for(let i = nums.length - 2; i >= 0; i--) {
            prev *= nums[i + 1]
            right[i] = prev;
        }
        for(let i = 0; i < right.length; i++) {
            right[i] *= left[i];
        }
        return right;
    }
}
