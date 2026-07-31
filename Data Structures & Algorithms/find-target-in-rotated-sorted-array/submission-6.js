class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /*
             if we check the right hand side and mid is LESS than the right
             then we know our array is SORTED here so we know that if our target is GERATER than our 
             mid then we know its on the right hand side
             otherwise its on the left hand side

             if we check our mid and it is GREARER Than our left hand side
             and our target is less than mid we know its on the left hand side
             otherwiese its on the right hand side
        */
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            console.log("Mid: ", mid)
            if (nums[mid] === target) {
                return mid;
            } 
            // mid === 4
            // left = 3
            // right = 5
            if (nums[mid] <= nums[right]) {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } 
            else if (nums[mid] >= nums[left]) {
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
