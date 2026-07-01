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
        let res = [];
        for(let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                const strLen = Number(str.substring(left, i))
                console.log("strLen: ", strLen);
                // strLen = 5
                res.push(str.substring(i + 1, i + 1 + strLen));
                left = i + 1 + strLen;
                i = left;
            }
        }
        return res;
    }
}
