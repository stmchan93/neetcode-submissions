class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // brute force would be to O(n) to search through the array and find the target
        // however, the better way would be to use some form of binary search to find our target
        // 3 4 5 6
        //          1 2
        // mid = Math.floor(left + (right - left) / 2) = 2
        // left = 0
        // right = 5
        /*
            I guess the idea is you need to find the half of where we are sorted
            and based on where we are sorted we can check to see if target is in there by the normal binary search
            checks on target
            the idea is, once we have the sorted half, which we know that nums[left] <= nums[mid] we know
            the left half is sorted
            IF it is, we compare to see where target is. if target is in between nums[left] <= nums[mid], then
            // we know we shoudl search on the left hand side of the array (so we do right = mid - 1)
            othwerise we know left = mid + 1.
            we do a similar check on the right hand side and return
        */
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            // [3,4,5,6,1,2]
            // mid = 2
            // left = 0
            // right = 5
            // nums[mid] = 5
            // 3 <= 5? if so YES
            // then we check 3 <= 1 < 5
            // NO so left = 3
            // now that left = 3
            // rigth = 5
            // mid = 3 + (5 - 3) / 2 = 4
            // nums[4] = 1 
            console.log("Left: ", left);
            console.log("right: ", right);
            console.log("mid: ", mid);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[left] <= nums[mid]) {
                console.log("nums[left]: ", nums[left]);
                console.log("nums[mid]: ", nums[mid]);

                // we know this part of the array is SORTED so we know that if target is < mid
                // we know it's on the left hand side of the array otherwiese its on the right
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // we know at this point that the right hand side is sorted, and if it is,
                // we check to see if the target is <= nums[right], if it is, then we 
                // check on the right hand side of the array, otherwiese we know that it's on the left
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
