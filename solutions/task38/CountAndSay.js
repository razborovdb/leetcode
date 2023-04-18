var main = function() {
    const n = 5;
    console.log(countAndSay(n));
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) {
        return "1";
    }
    var s = countAndSay(n-1);
    var result = "";
    while (s.length > 0) {
        const c = s.charAt(0);
        var count = 1;
        while (s.length > count && s.charAt(count) == c) {
            count++;
        }
        result = result + count.toString() + c;
        s = s.substring(count);
    }
    return result;
};

main();