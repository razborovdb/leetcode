function main() {
    // answer 3,2,1
    var nums = [3,1,2];
    nextPermutation(nums);

    nums.forEach(element => {
        console.log(element)
    });


}

var swap = function(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var reverse = function(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}


var nextPermutation = function(nums) {
    if (nums.length < 2) return;

    var i = nums.length-2;

    while (i >= 0 && (nums[i] >= nums[i+1])) {
        i--;
    }

    var needSwap = i;

    reverse(nums,i+1, nums.length-1);

    if (i >= 0) {
        while (i < nums.length-1 && nums[i] <= nums[needSwap]) {
            i++;
        }
        swap(nums,i,needSwap);
    }


};

main()