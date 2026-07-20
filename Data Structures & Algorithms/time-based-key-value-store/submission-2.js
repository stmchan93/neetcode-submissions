class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    // alice: [{ value: happy, timestamp: 1 }, { value: sad, timestamp: 3 }]
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [{ value: value, timestamp: timestamp }]);
        } else {
            this.keyStore.get(key).push({ value: value, timestamp: timestamp });
        }
        return null;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    // loop through based on timestamp O(n) solution it cant ake a loong timestmap so this is brute force
    // better approach would be binary search
    // binary search based on the ttimestamp of the array
    // if we find the value we're looking for, we obviously return the value there
    // if our mid > than the value we are looking for we know that we have to look at right = mid - 1
    // otherwise mid = left + 1
    // however we might not find what we're looking for
    // i think what we can do is we can have lets say 2 1 3 5
    // 1 3 5
    // mid = arr[1]
    // left = 0
    // right = 2
    // mid = 1
    // arr[1] === 2? nope!
    // my answer is in the left hand side of the array
    // we go to arr[1] > 2
    // then we know our answer is on the right hand side
    // answer = mid - 1 becuase we know that the answer is always going to be on the "left"
    // hand side and every tiem we keep searching left, we will jsut keep updating ans
    // until we get hte left-most ans we're looking for  as we know that it will be less than 
    // our target
    get(key, timestamp) {
        const timestamps = this.keyStore.get(key);
        let ans = "";
        if (!timestamps) {
            return ans;
        }
        let left = 0;
        let right = timestamps.length - 1;
        console.log("Getting tiemtsap: ", timestamp);
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            console.log("Mid: ", mid)
            console.log("left: ", left)
            console.log("right: ", right)
            console.log("timestamps[mid]: ", timestamps[mid]);
            if (timestamps[mid].timestamp === timestamp) {
                return timestamps[mid].value;
            } else if (timestamps[mid].timestamp > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
                ans = timestamps[mid].value;
            }
        }
        return ans;
    }
}
