/**
 * Main class that handles the game
 * @module GameController
 * @param {Game} currentGame - Instance of the Game class
 * @param {string} currentPlayer - The current player of the game (X or O)
 * @param optionClicked - Handles the player clicking an option
 * @param reset - Resets the game
 */
class GameController {
    /**
     * Constructs with two variables, currentGame and currentPlayer
     */
    constructor() {
        this.currentGame = new Game();
        this.currentPlayer = "X";
    }

    /** 
     * Handles the square being selected by the player 
     * @param option - What square the player chose
     * @param player - Which player chose the square
     */
    optionClicked(option, player) {
        if (this.currentGame.checkGame() == 0) {
            if (this.currentGame.markSquare(player, option.id.split("-"))) {
                option.innerHTML = player;
                console.log(this.currentGame.checkGame());
                this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";
            }
       }
    }

    /**
     * Resets the game
     */
    reset() {
        this.currentGame = new Game();
        for (var box of document.getElementById("game").children)
            box.innerHTML = "";
        document.getElementById("winner").innerHTML = "";
        this.currentPlayer = "X";
    }
    
}

// Main game variable
const game = new GameController();

// Event handler to reset the game
document.getElementById("reset").addEventListener("click", () => {
    game.reset();
    console.clear();
});

// Adds event handlers to every square to handle player interaction and winner
for (var box of document.getElementById("game").children) {
    box.addEventListener("click", function() {
        // Handles if a player clicked an available square
        game.optionClicked(this, game.currentPlayer);

        // If someone has won the game, display the winner
        let gameState = game.currentGame.checkGame();
        if (gameState != 0)
            if (gameState === null)
                document.getElementById("winner").innerHTML = "Cat's Game!";
            else
                document.getElementById("winner").innerHTML = game.currentPlayer == "X" ? "O" : "X";
    });
}