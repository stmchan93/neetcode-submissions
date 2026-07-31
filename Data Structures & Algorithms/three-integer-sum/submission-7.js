class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
            meta: sort hte array to make sure that the orders are numbered
            this enables us to do a 2 pointer solution so that we know when to increment/decrement
            the values of these numbers
            if the value is greater than 0, then we increment the left pointer
            if its less, than we decrement the right pointer
            we do this for every combination of numbers. i think what we also need to make sure that
            if we see a number htat we've seen before and tested its combination
            then we just increment past that number
        */
        const res = [];
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (k > 0 && nums[k] === nums[k + 1]) {
                        k--;
                    }
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }        
        return res;
    }
}
