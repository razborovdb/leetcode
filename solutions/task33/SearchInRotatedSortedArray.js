function main() {
    // answer 4
    var nums =  [4,5,6,7,0,1,2];
    var target = 0;
    var i = search(nums, target);


    console.log(i)

    // answer 0
    nums =  [1,3];
    target = 1;
    i = search(nums, target);


    console.log(i)



}

var search = function(nums, target) {
    var i = 0;
    var j = nums.length - 1;
    while (i <= j) {
        var mid = (i + j) >> 1;
        if (nums[mid] == target) return mid;
        if (nums[mid] < nums[i]) {
            if (nums[mid] < target && nums[j] >= target) i = mid+1;
                else j = mid-1;
        } else {
            if (nums[mid] > target && nums[i] <= target) j = mid-1;
                else i = mid+1;
        }

    }

    return -1;
};

main();