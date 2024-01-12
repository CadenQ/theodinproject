class Game {
    constructor() {
        this.gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }
    
    markSquare(player, square) {
        console.log(square);
        console.log(this.gameboard);
        this.gameboard[parseInt(square[0])][parseInt(square[1])] = parseInt(player);
    }

    checkGame() {
        // Check rows
        this.gameboard.forEach(element => {
            if (element.every(n => n == 1))
                return 1;
            else if (element.every(n => n == 2))
                return 2;
        });

        // Check columns
        for (let i = 0; i < this.gameboard.length; i++) 
            if (this.gameboard[i][0] == this.gameboard[i][1] && this.gameboard[i][1] == this.gameboard[i][2])
                return this.gameboard[i][0];

        // Check diagonals
        if ((this.gameboard[0][0] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][2]) ||
            (this.gameboard[0][2] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][0]))
            return this.gameboard[1][1];
        
        return 0;    
    }
}