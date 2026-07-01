class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 4#abcd3#123
        let result = "";
        for(let i = 0; i < strs.length; i++) {
            result += strs[i].length + '#' + strs[i];
        }
        console.log("Result: ", result)
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let left = 0;
        let right = 0;
        const res = [];
        while (right < str.length) {
            while (str[right] !== '#') {
                right++;
            }
            //5#Hello5#World
            const strLen = Number(str.substring(left, right));
            const currStr = str.substring(right + 1, right + 1 + strLen);
            console.log("Right offset: ", right + 1 + strLen);
            res.push(currStr);
            left = right + 1 + strLen;
            right = left;
        }
        return res;
    }
}
