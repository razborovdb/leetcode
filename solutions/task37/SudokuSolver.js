var main = function() {
    const board = [["5","3",".",".","7",".",".",".","."],
                    ["6",".",".","1","9","5",".",".","."],
                    [".","9","8",".",".",".",".","6","."],
                    ["8",".",".",".","6",".",".",".","3"],
                    ["4",".",".","8",".","3",".",".","1"],
                    ["7",".",".",".","2",".",".",".","6"],
                    [".","6",".",".",".",".","2","8","."],
                    [".",".",".","4","1","9",".",".","5"],
                    [".",".",".",".","8",".",".","7","9"]];
    
    solveSudoku(board);

    for (i = 0; i < 9; i++) {
        var s = "";
        for (j = 0; j < 9; j++) {
            s = s + board[i][j] + "; ";
        }
        console.log(s);
    }
    
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
    solve(board, 0, 0);
};


var solve = function(board, row, col) {
    const n = 9;

    if (row == n-1 && col >= n) {
        return true;
    }

    if (col >= 9) {
        row ++;
        col = 0;
    }


    if (board[row][col] != ".") {
        return solve(board, row, col+1);
    }

    for (let x = 1; x < 10; x++) {
        
        if (isSafe(board,row,col, x.toString())) {
            board[row][col] = x.toString();
            if (solve(board, row, col+1)) {
                return true;
            }
        }
        board[row][col] = ".";
        
    }

    return false;

}

var isSafe = function(board, row, col, num) {
    //console.log("row = ", row,"col = ", col,"num = ", num);
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == num) {
            return false;
        }
        if (board[i][col] == num) {
            return false;
        }
    }

    

    const startRow = row - row % 3;
    const startCol = col - col % 3;

    for (let i = startRow; i < startRow+3; i++) {
        for (let j = startCol; j < startCol+3; j++) {
            if (board[i][j] == num) {
                return false;
            }
        }
    }


    return true;
}

main();