class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0; 
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
            const minStart = Math.min(intervals[i][0], newInterval[0]);
            const maxEnd = Math.max(intervals[i][1], newInterval[1]);
            newInterval[0] = minStart;
            newInterval[1] = maxEnd;
            i++;
        }
        console.log("New Interval: ", newInterval);
        res.push(newInterval);
        while(i < intervals.length && intervals[i][0] > newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }
        return res;
    }
}
