var main = function() {
    const board = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

    console.log(isValidSudoku(board));
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rows = new Map();
    var cols = new Map();
    var rc = new Map();
    for (i = 0; i < 9; i++) {
        rows.clear();
        cols.clear();
        for (j = 0; j < 9; j++) {
            if(board[i][j] != '.') {
                const val = board[i][j];
                if (rows.has(val)) {
                    return false;
                }
                rows.set(val,1);
            }
            if(board[j][i] != '.') {
                const val = board[j][i];
                if (cols.has(val)) {
                    return false;
                }
                cols.set(val,1);
            }
        }
    }
    for (i = 0; i < 9; i=i+3) {
        rows.clear();
        
        for (j = 0; j < 9; j=j+3) {
            rc.clear();
            for (k = 0; k < 3; k++) {
                for (l = 0; l < 3; l++) {
                    if(board[i+k][j+l] != '.') {
                        const val = board[i+k][j+l];
                        if (rc.has(val)) {
                            return false;
                        }
                        rc.set(val,1);
                    }
                }

            }
        }
    }
    return true;
};

main();