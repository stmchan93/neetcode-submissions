class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // elements are sorted
        // they are unique
        // minimum element we can find from the array
        // if something is sorted and we are SEARCHING for something I gravitate towards binary search
        // we need to find the point where nums[i] > nums[i + 1]
        // wouldn't that just give hte minimum? but i guess thats O(n)
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1] && (i + 1) < nums.length) {
                return nums[i + 1];
            }
        }
        return nums[0];
    }
}
