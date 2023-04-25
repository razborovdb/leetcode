var main = function() {
    const num1 = "123";
    const num2 = "456";
    console.log(multiply(num1, num2));


}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var result = "";
    if (num1 == "0" || num2 == "0") {
        return "0";
    }
    
    var start = "";
    for (let i = num1.length - 1; i >= 0; i--) {
        var next = Number.parseInt(num1.substring(i,i+1));
        var s = start;
        var move = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            var next2 = Number.parseInt(num2.substring(j,j+1));
            var mult = next * next2 + move;

            move = Math.floor(mult / 10);

            s = (mult % 10).toString() + s;
        }
        if (move > 0) {
            s = move.toString() + s;
        }
        console.log("s = ", s);
        result = sum(result, s);
        start = start + "0";
    }
    

    return result;
};

var sum = function(s1, s2) {
    var i = s1.length - 1;
    var j = s2.length - 1;

    var result = "";
    var move = 0;

    while (i >= 0  && j >= 0) {
        const v1 = Number.parseInt(s1.substring(i,i+1));
        const v2 = Number.parseInt(s2.substring(j,j+1));

        const sum = v1 + v2 + move;

        move = Math.floor(sum / 10);

        result = (sum % 10).toString() + result;
        i--;
        j--;

    }

    while (i >= 0 ) {
        const v1 = Number.parseInt(s1.substring(i,i+1));

        const sum = v1 + move;

        move = Math.floor(sum / 10);

        result = (sum % 10).toString() + result;
        i--;

    }

    while (j >= 0 ) {
        const v1 = Number.parseInt(s2.substring(j,j+1));

        const sum = v1 + move;

        move = Math.floor(sum / 10);

        result = (sum % 10).toString() + result;
        j--;

    }





    if (move > 0) {
        result = (move % 10).toString() + result;
    }


    return result;
}

main();