class GameController {
    constructor() {
        this.currentGame = new Game();
        this.currentPlayer = "X";
    }

    optionClicked(option, player) {
        option.innerHTML = player;
        console.log(option);
        this.currentGame.markSquare(player, option.id.split("-"));
        console.log(this.currentGame.checkGame());
    }

    reset() {
        this.currentGame = new Game();
    }
    
}

let game = new GameController();

for (var box of document.getElementById("game").children) {
    box.addEventListener("click", () => {
        game.optionClicked(box, game.currentPlayer);
    });
}