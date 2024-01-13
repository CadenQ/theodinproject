/**
 * This module contains all logical operations to run the game itself
 * @module Game
 * @param gameboard - A 2D array containing the content of each square
 * @param checkSquare - Checks if a square is available to play in
 * @param markSquare - Marks a square with the given player if the square is available
 * @param checkGame - Checks if there is a winner
 */
class Game {
    /**
     * Constructor of the game, instantiates the gameboard
     */
    constructor() {
        /** Gameboard that contains all values of the squares */
        this.gameboard = [[null, null, null], [null, null, null], [null, null, null]];
    }

    /**
     * Checks if a square is available to play in
     * @param {Array} square 
     * @returns boolean of if the square is available 
     */
    checkSquare(square) {
        if (this.gameboard[square[0]][square[1]] !== null)
            return false;
        return true;
    }

    /**
     * Marks a square with the given player if the square is available
     * @param {string} player 
     * @param {Array} square 
     * @returns true if a square was marked, and false if a square wasn't marked 
     */
    markSquare(player, square) {
        if (this.checkSquare(square)) {
            this.gameboard[square[0]][square[1]] = player;
            return true;
        }

        return false;
    }

    /**
     * Checks if there is a winner
     * @returns X if X won, O if O won, null if it's a Cat's Game, and 0 if no one has won yet
     */
    checkGame() {
        // Check rows
        for (var row of this.gameboard) {
            if (row.every(n => n == "X"))
                return "X";
            else if (row.every(n => n == "O"))
                return "O";
        }

        // Check columns
        for (let i = 0; i < this.gameboard.length; i++) 
            if (this.gameboard[0][i] !== null && this.gameboard[0][i] == this.gameboard[1][i] && this.gameboard[1][i] == this.gameboard[2][i]) 
                return this.gameboard[i][0];
            

        // Check diagonals
        if ((this.gameboard[0][0] !== null && this.gameboard[0][0] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][2]) ||
            (this.gameboard[0][2] !== null && this.gameboard[0][2] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][0]))
            return this.gameboard[1][1];

        let catsGame = 0;
        // Check cat's game
        for (var row of this.gameboard) 
            if (row.every(n => n !== null)) 
                catsGame++;
        
        return catsGame == 3 ? null : 0;    
    }
}