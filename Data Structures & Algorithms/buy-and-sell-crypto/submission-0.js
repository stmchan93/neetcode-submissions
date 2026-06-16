class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // youre saying like. keep track of hte max profit you've found so far
        // as well as the minimum price that you've seen so far just so u know that 
        // to maximize profit you need the minimum buy value so that is useful to track
        // so we can subtract out the proper maximum
        let minSoFar = 101;
        let maxProfit = 0;
        for(let i = 0; i < prices.length; i++) {
            if (prices[i] < minSoFar) {
                minSoFar = prices[i]; // minSoFar = 1
            }
            maxProfit = Math.max(maxProfit, prices[i] - minSoFar);
        }
        return maxProfit;

    }
}
