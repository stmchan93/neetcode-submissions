class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        // sort it so that we an know which ones are overlapping
        // then we take a look at each one we say
        // 1.  3
        // 1.      5
        //           6 7
        // 1 2 3 4 5 6 7
        // we know that they are overlapping if prevInterval.end <= nextInterval.end
        // so we merge
        // 
        // 1 2 
        //   2 3
        // 1 2 3
        // 1 2 
        //     3 4
        // 1 2 3 4
        // maybe keep a running minStart and maxEnd
        // i keep gettting the min/max of the current interval
        // i compare that with the next interval
        // if at some point the the maxEnd < interval[curr]
        // then we know we finished merging, we should push this array 
        // into the result and keep going, set minStart and maxEnd to itnerval[curr]
        let i = 1;
        let minStart = intervals[0][0];
        let maxEnd = intervals[0][1];
        while (i < intervals.length) {
            // 6, 7
            if (maxEnd < intervals[i][0]) {
                // 5 < 6
                res.push([minStart, maxEnd]);
                minStart = intervals[i][0];
                maxEnd = intervals[i][1];
            }
            minStart = Math.min(minStart, intervals[i][0]);
            maxEnd = Math.max(maxEnd, intervals[i][1]);
            i++;
        }
        res.push([minStart, maxEnd]);
        return res;

    }
}
