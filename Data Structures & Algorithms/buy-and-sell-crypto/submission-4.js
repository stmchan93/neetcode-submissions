class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // sliding window question
    // a brute force solution would be to just go through every
    // element and subtract like right - left until you do this for every element in the array
    // i think there is a ton of repeated work with the inner loop so can we do better
    // a better solution might be find the local min and the local max at the left and right pointers
    // to find the maximum profit. so lets say we start at the ends, left left and right.
    // left = 10, right = 1;
    // we know that it would yield a value of -9 and i guess that in this case, we would likely
    // get a value of -9 and we dont want that so we want to move our pointers over. in hte next
    // scenario we would try buying at 1 and selling at 5. if that works we would get a value of 4.
    // this gives us profit! which is what we want. so we would then just see if we could sell on the next day
    // so we would move our right pointer over, until we geot back to 1
    maxProfit(prices) {
        let minSoFar = prices[0];
        let res = 0;
        for(let i = 1; i < prices.length; i++) {
            res = Math.max(res, prices[i] - minSoFar);
            minSoFar = Math.min(prices[i], minSoFar);
        }
        return res;
    }
}
