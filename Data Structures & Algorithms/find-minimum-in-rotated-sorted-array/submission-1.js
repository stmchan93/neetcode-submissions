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
        // so thats the "brute force" solution but how do we code up a binary search solution
        // for(let i = 0; i < nums.length; i++) {
        //     if (nums[i] > nums[i + 1] && (i + 1) < nums.length) {
        //         return nums[i + 1];
        //     }
        // }
        // return nums[0];
        // maybe theres some way to find a condition to figure out if nums[i] > nums[i + 1]
        // maybe the target is to find if nums[i] > nums[i + 1]
        // left = 3, right = 5
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = Math.floor((right + left) / 2)
             if (nums[right] < nums[mid]) {
                // because we know the minimum value will be in here esp if the mid is greater htan the right
                // and we kno also in this case that mid CANNOT be it if hte values rae decreasing so left = mid + 1
                left = mid + 1;
            } else if (nums[right] > nums[mid]){
                // if nums[right] is GREATER than nums[mid] then we know that  the value
                // is in the LEFT portion of hte array becuase the minimum CoULD be mid
                right = mid;
            }
        }
        return nums[left];
    }
}
