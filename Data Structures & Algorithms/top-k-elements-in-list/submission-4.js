class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // top k frequent elements 
    // we need to find the top k elements that appear in the array
    // first example, we see that k = 2 that means we know that 3 and 2 are the numbers that appear the most
    // brute force solution would be to loop through the entire array, find what value appears the most, then disregard it,
    // and do this k times to find the next k values that appear in the array
    // this would be O(k * n) 
    // i think this you keep having to find the elements that appear the most k times 
    // another brute force would be to get all the counts and store the them into a map
    // but hten u have to loop through the map k times to find the highest frequency, then the next highest frequency
    // can we do better? instead we could store all the frequencies in an array
    // and map teh frequencies by the count in an array
    // we loop through the map and we store the frequencies -> number and then we just go from the back of the frequency
    // array to find all the highest count numbers until the size of hte array === k

    topKFrequent(nums, k) {
        const res = [];
        const freqMap = new Map();
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);
        for(let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            } else {
                freqMap.set(nums[i], 1);
            }
        }
        for(const [key, value] of freqMap) {
            console.log("Freq array: ", freqArr)
            freqArr[value].push(key);
        }
        for(let i = freqArr.length - 1; i >= 0; i--) {
            for(let j = 0; j < freqArr[i].length; j++) {
                res.push(freqArr[i][j]);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}
