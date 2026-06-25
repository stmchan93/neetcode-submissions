class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute force could be... loop through the nums array and get hte count of every number
        // then loop through the count array k times and find the count fo each number and keep a max
        // and once you find the max count of the array, then you remove that number from being counted for in a set
        // and you keep finding the next max
        // repeated work: looping through the count array k times so can we do better?
        // what we can do is we can count all of the numbers by frequency and then develop a map 
        // of count to numbres and bucket htem that way
        const res = [];
        const freqMap = new Map();
        const bucketFreq = Array.from({ length: nums.length + 1 }, () => []);
        for(let i = 0; i < nums.length; i++) {
            if (!freqMap.has(nums[i])) {
                freqMap.set(nums[i], 1);
            } else {
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            }
        }
        console.log("Ferq: ", freqMap)
        for(const key of freqMap.keys()) {
            const freq = freqMap.get(key);
            console.log("Freq: ", freq)
            if (bucketFreq[freq].length === 0) {
                bucketFreq[freq] = [key]
            } else {
                bucketFreq[freq].push(key);
            }
        }
        for(let i = nums.length; i >= 1; i--) {
            if (bucketFreq[i].length === 0) {
                continue;
            }
            for(let j = 0; j < bucketFreq[i].length; j++) {
                res.push(bucketFreq[i][j]);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}
