 export class Game {
    constructor(player1, player2){
        this.playerOneName = player1;
        this.playerTwoName = player2;
        this.currentPlayer = 1;
    }
    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`
    }
    playInColumn() {
        if (this.currentPlayer === 1){
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
    }
}
