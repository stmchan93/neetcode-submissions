class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // meta: look at the left and right side of the array
        // if the mid is greater than the left, you dont know if the array is rotated
        // so you need to check the right, and if the right is less than the left, you know
        // the rotation is between the midpoint and the right side of the array
        // if the mid opint is greater than the right hand side we know there is a rotation there
        // if the mid point is LESS than the right side then we know that the rotation is on the left half
        // we keep doing this search until we acutally find the location for this

        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2)
            if (nums[mid] > nums[right]) {
                // rotation is on this side we knwo that the mid cannot be the minimum
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                // if nums[mid] is less than nums right, 
                // right could be mid
                right = mid;
            }
        }
        return nums[left];
    }
}
