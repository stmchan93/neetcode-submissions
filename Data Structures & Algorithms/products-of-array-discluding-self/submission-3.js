class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force double for loop and if i === j then you just continue, otherweise
        // you just multiply the value times the next iteration so that you get the next current result
        // repeated work here is just multiplying the numbers that are not equal to i over and over again 
        // if there's some way to persist these numbers that would be helpful
        // i think one way to do this and to accomplish this is to store some sort of prefix
        // what we can do is go from the left to the right, and store the product of of the numbers
        // to the left of the current number in an array
        // and then going right we can just mulitply the the number of the values going left multiplied by the 
        // numbers if you were to go from the right so that you can get all the numbers multiplied by
        // the numbers to the left and right of the current number.
        const res = Array(nums.length).fill(1);
        // going from left to right, the first index 0, there is no number to left of it so it just needs to be 0
        let prefix = 1;
        for(let i = 0; i < nums.length; i++) {
            if (i > 0) {
                // keep a cumulative prefix to multiply by the previous number 
                prefix *= nums[i - 1]
            } 
            // the product of all the values to the left of i 
            res[i] = prefix;
        }
        prefix = 1;
        for(let j = nums.length - 1; j >= 0; j--) {
            if (j < nums.length - 1) {
                prefix *= nums[j + 1];
            }
            // multiply the products of the value left * values of product multiplied by the right
            res[j] *= prefix;
        }
        return res;
    }
}
