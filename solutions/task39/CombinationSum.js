var main = function() {
    const candidates = [2,3,6,7];
    const target = 7;
    const answer = combinationSum(candidates, target);

    console.log(answer);
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var answer = new Array;
    var temp = new Array;
    findNumbers(candidates, target, 0, answer, temp);
    return answer;
};

var findNumbers = function(candidates, target, index, answer, temp) {
    if (target == 0) {
        const added = temp.map(value => value);
        answer.push(added);
        return;
    }
    for (let i = index; i < candidates.length; i++) {
        if (target - candidates[i] >= 0) {
            temp.push(candidates[i]);
            findNumbers(candidates, target - candidates[i], i, answer, temp);
            temp.pop();
        }
    }
}

main();