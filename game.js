export class Game {
    constructor(player1, player2){
        this.playerOneName = player1;
        this.playerTwoName = player2;
    }
    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`
    }
}
