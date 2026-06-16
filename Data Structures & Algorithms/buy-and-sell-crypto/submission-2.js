class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // what you do is just keep track of hte min so far
        // and you always subtract it by the next sell day
        let minSoFar = prices[0];
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
