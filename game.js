import { Column } from "./column.js";

 export class Game {
    constructor(player1, player2){
        this.playerOneName = player1;
        this.playerTwoName = player2;
        this.currentPlayer = 1;
        this.columns = [new Column, new Column, new Column,
            new Column, new Column, new Column, new Column]
    }
    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`
    }
    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer)
        if (this.currentPlayer === 1){
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
        console.log(this.columns[0])
    }
    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }
}
