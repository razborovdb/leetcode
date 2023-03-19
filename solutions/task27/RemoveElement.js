function main() {
    var nums =  [0,1,2,2,3,0,4,2];


    result = removeElement(nums, 2);

    for (i=0; i<result;i++ ) {
        console.log(nums[i]);
        
    }
}


var removeElement = function(nums, val) {
    if (nums == null) return 0;
    if (nums.length == 0) return 0;

    index = 0;
    for(i=0; i< nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    } 
    return index;
};

main()