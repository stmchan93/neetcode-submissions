class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // 1   3
        //       4    6
        //    2    5
        // i think we know if an interval is overlapping if
        // the start of the new interval is less than the end of hte next interval
        // so what i think we need to do is first of all loop through all the intervals
        // and create a new set of intervals because inserting into the existing list of intervals
        // is messy, you would havet o figur eout when to creat enew intervals, delete, etc
        // then we would, as long as the end of the current interval is < the new interval
        // we just push it into our array. then when we get to the point where we can insert
        // we take the smaller of the starts, and the bigger of the end to merge the interval
        // then you insert hte rest of hte intervals that have a start that is greater than the new
        // interval's end
        
        let newIntervalStart = newInterval[0];
        let newIntervalEnd = newInterval[1];
        const result = [];
        let i = 0; 
        while (i < intervals.length && intervals[i][1] < newIntervalStart) {
            result.push(intervals[i]);
            i++;
        }
        // ok here we figure out either we need to merge or we need to push the new interval into the list of arrays
        // in the case that we need to do a merge...
        // start = 6
        // end = 9
        // we know they're overlaapping at this point
        while (i < intervals.length && intervals[i][0] <= newIntervalEnd) {
            newIntervalStart = Math.min(newIntervalStart, intervals[i][0])
            newIntervalEnd = Math.max(newIntervalEnd, intervals[i][1])
            i++;
        }
        result.push([newIntervalStart, newIntervalEnd]);
        // we know that they are NOT overlapping if the newIntervalEnd is LESS thant he new interval's start
        // if this is true we know they are NOT overlapping
        while (i < intervals.length && newIntervalEnd < intervals[i][0]) {
            result.push(intervals[i]);
            i++;
        }
        return result;
    }

}
