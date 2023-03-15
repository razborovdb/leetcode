function main() {
    
    

    var generateParenthesis = function(n) {
        var result = [];
        var s = "";
        gen(n, n, s, result)
    
        return result;
    
    };

    const result = generateParenthesis(3);

    result.forEach(str => {
        console.log(str);
    });

}



function gen(open, close, s, result) {
    if (open == 0 && close == 0) {
        result.push(s);
    }

    if (open > 0) {
        gen(open-1, close, s + "(", result);
    }
    if (open < close) {
        gen(open, close-1, s + ")", result);
    }
} 

main();

