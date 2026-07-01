class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // every time we see a valid open parantehsis, we push the open paraenteshsi into a stack
        // and then everytime we see a closing one, we pop off the stack and check if the values are
        // valid i.e. like ( matches with ) or { matches with } and if it does, then we continue,
        // if not we know that the string does not have a valid parentehsis

        const isValidMatch = (currChar, poppedChar) => {
            if (currChar === ')' && poppedChar === '(') {
                return true;
            } else if (currChar === '}' && poppedChar === '{') {
                return true;
            } else if (currChar === ']' && poppedChar === '[') {
                return true;
            }
            return false;
        }

        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.push(s[i]);
            } else if (s[i] === '}' || s[i] === ']' || s[i] === ')') {
                const poppedValue = stack.pop();
                if (!isValidMatch(s[i], poppedValue)) {
                    return false;
                }
            } else {
                return false;
            }
        }
        if (stack.length !== 0) {
            return false;
        }
        return true;
    }


}
