class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // now we are on teh SEARCH template so we need to change the binary search formula to be based 
        // on finding a number
        // what we need to do is to search through nums and find the portion that is SORTED
        // and based on the portion that is SORTED discard the HALF that DOES NOT CONTAIN THE TARGET YOU WANT
        // so [3,4,5,6,1,2]
        // I find the mind point, ets say its 5 in this case
        // and then our target = 1
        // in this case, i compare, i say hey is array[mid] < array[right]
        // at this point we know our array is SORTED becuase we know mid -> right keeps INCREASING
        // if this is the case, and our target <= right AND our target is > mid then we know its in the 
        // right hand side of the array, othewrise its in the LEFT hand side of hte array
        // the next case would be if array[mid] >= array[left]
        // if this is the case, then we know our array is sorted from left to mid
        // so then we say hey, is target >= array[left] AND target is < mid
        // then we know that our taget is in the LEFT hand side of hte array
        // toehrwise its in the RIGHT hand side
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < nums[right]) {
                // now our array is INCREASING
                if (target <= nums[right] && target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
