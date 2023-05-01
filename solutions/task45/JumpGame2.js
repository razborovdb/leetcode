var main = function() {
    var nums = [2,3,1,1,4];
    console.log(jump(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var result = 0;
    var last = 0;
    var max = 0;
    for (let i = 0; i < nums.length-1; i++) {
        max = Math.max(max, i+nums[i]);
        if (last == i) {
            result++;
            last = max;
        }
    }
    return result;
};

main();