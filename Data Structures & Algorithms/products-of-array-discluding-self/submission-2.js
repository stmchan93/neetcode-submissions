class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // the brute force way is to loop through every single number with a double for loop
    // and multiply the number by every n umber except itself
    // its o(n^2 solution)
    // a better way would be to loop through the array forwards and backwards
    // when you go forwards, you store the product of the number prior to that number
    // you do the same going from back to front, you store hte product of the number prior to that number
    // into the output array and multiply it by the current number in the output array
    // that way you get the proudct of the numbers prior to the number multiplied by the numbers
    // prior to the numbres going forward and back

    productExceptSelf(nums) {
        const res = Array(nums.length).fill(1);
        let prev = 1;
        for(let i = 0; i < nums.length; i++) {
            // go forward and store the product of the numbers prior to the index
            res[i] = prev;
            prev *= nums[i];
        }
        prev = 1;
        for(let j = nums.length - 1; j >= 0; j--) {
            res[j] *= prev;
            prev *= nums[j];
        }
        return res;
    }
}
