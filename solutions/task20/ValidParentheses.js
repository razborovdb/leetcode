
function main() {
    var s = "()[]{}";

    console.log(solution(s));
}

function solution(s) {
    const stack = [];

    

    i = 0
    while (i < s.length) {
        const c = s[i];
        if (c == '(' || c == '{' || c == '[') {
            stack.unshift(c);
        } else if (c == ')' || c == '}' || c == ']' ){
            if (stack.length == 0) {
                return false;
            }
            const from = stack.shift();
            if ( (from != '(' && c == ')') || (from != '[' && c == ']') || (from != '{' && c == '}') ) {
                return false;
            }

        }

        i++;
    }

    if (stack.length != 0) {
        return false;
    }

    return true;
}

main();