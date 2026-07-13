class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // brute force: we loop through every index to find where the previous value is greater than the 
        // current value and if we do we return the current value becuase we know that the values are always
        // increasing except at the minimum
        // another way to do this is to use binary search because we know the array is sorted
        // i think we can take a look at the boundaries of the array
        // looking at the right hand side, we can check the middle and see if the the right hand side is
        // less than the middle and if it is, we know the minimum is likely there...
        
        // [1,2,3,4,5,6]
        let right = nums.length - 1;
        let left = 0;
        while (right > left) {
            const mid = Math.floor(left + (right - left) / 2);
            // mid = 0 + (5 - 0) / 2 = 2.5
            // right = 5
            // left = 0
            // left = 3
            // right = 5
            // mid = 3 + (5 - 3) / 2 = 4, mid = 4
            // nums[4] > nums[5] NOPE
            // 1, 2
            // 1, 3, NOPE
            // at this point, we know that nums[right] > nums[mid], so we increase left = mid + 1
            // left = 4
            // right = 5
            // 4 + (5 - 4) / 2 = 4
            // nums[4] = 1
            // nums[left] = 1
            // nums[right] = 2
            // 4 5 6 7        <- first run (high)
            //        0 1 2  <- second run (low), min = 0 at the boundary

            if (nums[mid] > nums[right]) {
                // we know that at this point 
                // our minimum is probably in there
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            }
        }
        return nums[left];

    }
}
