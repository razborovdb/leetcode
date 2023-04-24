var main = function() {
    var height = [0,1,0,2,1,0,1,3,2,1,2,1];

    console.log(trap(height));
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var left = 0;
    var right = height.length - 1;
    var maxL = 0;
    var maxR = 0;
    var result = 0;

    while(left <= right) {
        if (maxL <= maxR) {
            result += Math.max(0, maxL - height[left]);
            maxL = Math.max(maxL, height[left]);
            left++;
        } else {
            result += Math.max(0, maxR - height[right]);
            maxR = Math.max(maxR, height[right]);
            right--;
        }
    }
    return result;
};

main();