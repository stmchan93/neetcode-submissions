class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.climbStairsMemo(n, new Map());
    }

    climbStairsMemo(n, memo) {
        if (n === 2) {
            return 2;
        }
        if (n === 1) {
            return 1;
        }
        if (memo.has(n)) {
            return memo.get(n);
        }
        const result = this.climbStairsMemo(n - 1, memo) + this.climbStairsMemo(n - 2, memo);
        memo.set(n, result);
        return result;
    }
}
