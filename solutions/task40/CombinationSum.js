var main = function() {
    const candidates = [10,1,2,7,6,1,5];
    const target = 8;
    const answer = combinationSum2(candidates, target);

    console.log(answer);
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var answer = new Array;
    var temp = new Array;

    candidates.sort();
    findNumbers(candidates, target, answer, temp, 0);

    return answer;
};

var findNumbers = function(candidates, target, answer, temp, index) {
    if (target == 0) {
        const list = temp.map(value => value);
        answer.push(list);
    }

    for (let i = index; i < candidates.length; i++) {
        if (i != index && candidates[i] == candidates[i-1]) {
            continue;
        }
        if(target - candidates[i] >= 0) {
            temp.push(candidates[i]);
            findNumbers(candidates, target - candidates[i], answer, temp, i+1);
            temp.pop();
        }
    }
}

main();