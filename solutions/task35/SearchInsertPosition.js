var main = function() {
    const nums = [1,3,5,6];
    const target = 5;
    const result = searchInsert(nums, target);
    console.log("----------------------------------------");
    console.log(result);

}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return searchPosition(nums, 0, nums.length - 1, target);
};

var searchPosition = function(nums,start,end,target) {
    if (start > end) return start;
    var middle = (start+end) >> 1;
    if (nums[middle] == target) {
        return middle;
    }
    if (nums[middle] < target) {
        return searchPosition(nums, middle+1, end, target);
    }
    return searchPosition(nums, start, middle-1, target);
}

main();