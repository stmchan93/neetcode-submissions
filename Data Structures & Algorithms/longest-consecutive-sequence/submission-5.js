class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // so no sorting because i could sort 
        // but thinking about sorting, if all the numbers were sorted
        // then i could just be like hey if the current number is less than 
        // the previous number by 1, when we know we have a consequtive subsequence
        // then we could just keep counting and keep the max of the numbers that we've seen so far
        // that being said, in this case, what we could do is we could stick all 
        // the numbers into a map? and if we come to a a point where there is a number
        // that has a number htat is minus that one then we know we've gotten it
        // but if we want to keep it O(n) time we cant sort
        // im thinking i store it all into a map, 
        // and then on a second pass, i loop throgh the array and if i find that
        // 1 - the elemnt im on exists in the map, then i start counting to see if other 
        // numbers are in it?
        const set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }
        let max = 0;
        for(let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            while(!set.has(curr - 1)) {
                let count = 0;
                while(set.has(curr)) {
                    count++;
                    max = Math.max(count, max);
                    curr++;
                }
            }
        }
        return max;
    }
}
