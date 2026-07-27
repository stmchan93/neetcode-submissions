class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // we should create a result array
        // loop through all the intervals and have an index that keeps track of hte interval
        // and see if the previous overlaps (meaning that the end of hte prev is greater thant eh start of the curr
        // if it is, we know they overlaop and we should merge them and merge them until
        // we find all overlapping intervals
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            const last = result[result.length - 1];

            if (curr[0] <= last[1]) {
                last[1] = Math.max(last[1], curr[1]);
            } else {
                result.push(curr);
            }
        }
        return result;
    }
}
