class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        console.log("Nums: ", nums)
        for(let i = 0; i < nums.length; i++) {
            let k = i + 1;
            let j = nums.length - 1;

            // no duplicate triplets meaning the same 3 values should not be the same...
            // duplicate triplets means that they can sum to same value even if values are different
            // but the RESULTS cannot be the same
            // you can have duplicate values like -1, -1, 2 for example
            if (i > 0 && nums[i] === nums[i - 1]) {
                // you have to check if you've already processed the "anchor" (i.e. 1) if so skip bc it 
                // will end up with a duplicate
                continue;
            }
            while (k < j || j > k) { 
                let sum = nums[i] + nums[k] + nums[j];
                if (sum === 0) {
                    res.push([nums[i], nums[k], nums[j]]);
                    k++;
                    j--;
                    while (k < j && nums[k] === nums[k - 1]) {
                        k++;
                    }
                } else if (sum < 0) {
                    k++;
                } else {
                    j--;
                }
            }
        }
        return res;
    }
}
