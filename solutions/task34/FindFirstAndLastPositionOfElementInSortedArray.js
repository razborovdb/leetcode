function main() {

    var nums =  [5,7,7,8,8,10];
    var target = 8;
    var i = searchRange(nums, target);


    console.log(i)

}

/**
        * @param {number[]} nums
        * @param {number} target
        * @return {number[]}
    */
var searchRange = function(nums, target) {
    var i = 0;
    var j = nums.length - 1;
    var start = -1;
    var stop = -1;

    if (nums.length == 0) {
        return [-1, -1];
    }

    while (i <= j) {
        var mid = (i+j) >> 1;
        if (nums[mid] == target) {
            start = findStart(nums, i, mid, target);
            stop = findStop(nums, mid, j, target);
            break;
        }
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return [start,stop];
}

var findStart = function(nums, strt, stp, target) {
    var i = strt;
    var j = stp;
    var minIndex = stp;

    while (i <= j) {
        var mid = (i+j) >> 1;
        if (nums[mid] == target) {
            minIndex = mid;
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }

    return minIndex;

}

var findStop = function(nums, strt, stp, target) {
    var i = strt;
    var j = stp;
    var maxIndex = stp;

    while (i <= j) {
        var mid = (i+j) >> 1;
        if (nums[mid] == target) {
            maxIndex = mid;
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return maxIndex;

}

main();