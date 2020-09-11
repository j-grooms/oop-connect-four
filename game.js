import { Column } from "./column.js";

 export class Game {
    constructor(player1, player2){
        this.playerOneName = player1;
        this.playerTwoName = player2;
        this.currentPlayer = 1;
        this.columns = [new Column, new Column, new Column,
            new Column, new Column, new Column, new Column]
        this.winnerNumber = 0;
    }
    getName() {
        if (this.winnerNumber === 0) {
            return `${this.playerOneName} vs. ${this.playerTwoName}`
        }
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}`
        }
    }
    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer)
        if (this.currentPlayer === 1){
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
        this.checkForTie();
    }
    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }
    isColumnFull(columnNum) {
        // console.log('isColumnFull')
        return this.columns[columnNum].isFull()
    }
    checkForTie() {

        if (this.columns.every((element) => element.isFull())) {
            this.winnerNumber = 3;
        }
        // console.log('tie', this.winnerNumber)
    }
}
