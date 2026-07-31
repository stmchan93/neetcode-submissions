class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /*
            to calculate this, we need to find the lowest day PRIOR to the 
            because we need to say something like hey, if we start at 
            10 and 1, and we subtract, we know that 10 is a very large number to buy at 
            then we know that this would result in a loss but thats the best we can get
            but we can make 0 if we chose NOT to make that transaciton. 
            if we start left = 0
            right = left + 1
            we can subtract and say hey, if we start here and we sell at this spot from 10 -1 
            we will get -9. we know that we should just not sell here. 
            maybe what we can do is loop through the array, and keep our left pointer as
            the day we sell. if we do lets say 10 - 1, we get -9. we say hey, this is a spot
            where we would get -9 but lets seee if we can do better.
            then we go to the next iteration, and if the number is GREATER than zero 
        */
        let left = 0;
        let minSoFar = Infinity;
        let result = 0;
        for(let i = 1; i < prices.length; i++) {
            if (prices[left] < minSoFar) {
                minSoFar = prices[left];
            }
            const currProfit = prices[i] - minSoFar;
            result = Math.max(result, currProfit);
            left++;
        }
        return result;
    }
}
