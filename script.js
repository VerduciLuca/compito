// JavaScript code for the Tic Tac Toe game
let currentPlayer = "X";
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function makeMove(row, col) {
    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
