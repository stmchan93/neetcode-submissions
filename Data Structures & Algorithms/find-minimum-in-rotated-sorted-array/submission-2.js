class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // log(n) time we have to do some binary search
        // we basically need to find the cutoff between when the values
        // stopo increasing and start decreasing
        // the way we can find that out is by comparing the mid with the right hand side
        // we can check to see
        // nums[mid] > nums[right]
        // if this is the case, then we know that since we need to find THE MINIMUM value
        // we know that the value is WITHIN this range from mid+ 1 to right
        // then we can check if nums[mid] < nums[right] if it is, we know that the values are
        // increasing here and we knwo that the target minimum valeu COUDL BE within mid or lower
        // we don't do any comparision with nums[left] because with the left hand side, 
        // if nums[left] < nums[mid] we know the values are INCREASING but we don't know if it's
        // on the left OR on the right of mid because there could have been a rotation there
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            // nums[2] > nums[5]
            // left = 3
            // right = 5
            // mid = 4
            if (nums[mid] > nums[right]) {
                // we know our rotation is here so we know our minimum is likely in here
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                // we know in this case that mid is < right so we know that the target is mid or lower
                right = mid;
            }
        }
        return nums[left];
    }
}
