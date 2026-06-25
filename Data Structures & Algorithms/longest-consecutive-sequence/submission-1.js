class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    
    // brute force is to sort the array and count from some number and to see if that number is +1 of the
    // previous number. the problem with this ist hat its O(nlogn + n) which is unacceptable
    // the better solution is to store the count of the element in a map and just to keep seeing if the next
    // number + 1 of it is in the map, if it is then we increment our output. if it's not, we reset our 
    // output to 0
    // first we need to loop through and store the map first so thats O(n)
    // next we need to loop through the araray again adn see if hte number is in the array
    longestConsecutive(nums) {
        const set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }
        let res = 0;
        let currMax = 0;
        for(let i = 0; i < nums.length; i++) {
           if (set.has(nums[i] - 1)) {
                continue;
           }
           let currNum = nums[i];
           while (set.has(currNum)) {
                currNum++;
                currMax++;
                res = Math.max(currMax, res);
           }
           currMax = 0;
        }
        return res;
    }
}
