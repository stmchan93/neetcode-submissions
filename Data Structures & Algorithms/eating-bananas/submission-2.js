class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // you basically want to maximize the number of banans
        // you can eat you watn to eat the minimum number o bananas
        // in h time so in the example of 1:
        // 1, 4, 3, 2 -> 1, 2, 2, 1 even though its less than h you can 
        // be ablet o eat all of hte banans in leess than or equal to h hours
        // a brute force solution would be to try to try all the numbers from 1 -> 
        // the maximum number of bananas in the pile and the first number
        // you get that is at h or less than h hours, you will deem as the 
        // time it takes to eat your bananas. this would be O(N^2).
        // but hte better way would be to find the maximum number of banans
        // you can eat, and then do binary search from 1 to the maximum number of 
        // bananas you can eat to find when the value will be <= h. 
        // the implementation would be:
        // loop through all the piles to find the maximum number of bananas you can eat
        // then once you have that, do binary search from 1-> max
        // and check the mid point, and you would do math.ceil(1/mid) for all the 
        // numbers and see if they sum up to h, if they do, you found your answer
        // if its greater than h, you would keep trying with mid = right - 1
        // or if its less than h you would keep track of that answer (just bc u need
        // the number that is closest to h) and keep trying.
        // this would n + nlogn which owuld be nlogn 

        let maxPiles = -Infinity;
        for(let i = 0; i < piles.length; i++) {
            if (piles[i] > maxPiles) {
                maxPiles = piles[i];
            }
        }
        let left = 1;
        let right = maxPiles;
        let ans = Infinity;
        while(left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            // mid = 12 
            let sum = 0;
            for(let i = 0; i < piles.length; i++) {
                sum += Math.ceil(piles[i] / mid);
            }
            console.log("Sum: ", sum)
            console.log("mid: ", mid)
             if (sum > h) {
                // we need to increase the frequency in which coco eats bananas
                // it would basically take her too many hours to eat the bananas
                // so we cannot accept an answer like this
                left = mid + 1;
            } else {
                // if the sum is less than h its a potential answer
                ans = mid;
                right = mid - 1;
            }
        }
        return ans;
    }
}
