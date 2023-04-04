function main() {

    var s = "wordgoodgoodgoodbestword";
    var words = ["word","good","best","good"];
    var list = findSubstring(s, words);

    list.forEach(element => {
        console.log(element)
    });


}


var findSubstring = function(s, words) {
    var result = []

    var len = words[0].length
    var allLen = len * words.length

    var map = new Map();

    words.forEach(value => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    })

    for (i = 0; i < s.length - allLen + 1; i++) {
        var subS = s.substring(i, i + allLen);
        var newMap = new Map();
        while (subS.length >= len) {
            var ss = subS.substring(0,len);
            if (newMap.has(ss)) {
                newMap.set(ss, newMap.get(ss) + 1)
            } else {
                newMap.set(ss, 1)
            }
            subS = subS.substring(len)
        }
        //console.log(newMap)
        var sss = (m1, m2) => m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key))

        if (sss(map, newMap)) {            
            result.push(i)
        }
    }


    return result;
};

main()