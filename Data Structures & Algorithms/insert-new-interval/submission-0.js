class Solution {
insert(intervals, newInterval) {
    const result = [];
    let newStart = newInterval[0];
    let newEnd = newInterval[1];
    let placed = false;

    for (let i = 0; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        /* BLANK 1: this interval ends before the new one starts */
        if (e < newStart) {
            result.push(intervals[i]);                 // BEFORE: untouched
            /* BLANK 2: this interval starts after the new one ends */
        } else if (s > newEnd) {
            if (!placed) {
                result.push([newStart, newEnd]);
                placed = true;
            }
            result.push(intervals[i]);                 // AFTER: untouched
        } else {
            newStart = Math.min(s, newStart);
            newEnd   = Math.max(e, newEnd);
        }
    }
    if (!placed) result.push([newStart, newEnd]);      // tail: new goes last
    return result;
}
}
