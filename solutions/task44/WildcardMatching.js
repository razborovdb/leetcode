var main = function() {
    const s = "aa";
    const p = "a";
    console.log(isMatch(s, p));
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var iS = 0, iP = 0, lastWildCartIndex = -1, sBackTrackIndex = -1, nextToWildCardIndex = -1;

    while (iS < s.length ) {
        if (iP < p.length && p.charAt(iP) == '?' || p.charAt(iP) == s.charAt(iS)) {
            iP++;
            iS++;
        } else if (iP < p.length && p.charAt(iP) == '*') {
            lastWildCartIndex = iP;
            nextToWildCardIndex = ++iP;
            sBackTrackIndex = iS;
        } else if (lastWildCartIndex == -1) {
            return false;
        } else {
            iP = nextToWildCardIndex;
            iS = ++sBackTrackIndex;
        }
    }


    for (let i = iP; i < p.length; i++) {
        if (p.charAt(i) != '*') {
            return false;
        }
    }
    return true;
};

main();