function main() {
    var nums =  [0,0,1,1,1,2,2,3,3,4];


    result = removeDuplicates(nums);

    for (i=0; i<result;i++ ) {
        console.log(nums[i]);
        
    }
}


var removeDuplicates = function(nums) {
    if (nums == null) return 0;
    if (nums.length <= 1) return nums.length;
    prev = nums[0];
    index = 1;
    for(i=1; i< nums.length; i++) {
        if (nums[i] != prev) {
            prev = nums[i];
            nums[index] = nums[i];
            index++;
        }
    } 
    return index;
};

main()