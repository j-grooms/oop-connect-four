import { ColumnWinInspector } from "./column-win-inspector.js"
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
        if (this.winnerNumber === 1) {
            return `${this.playerOneName} wins!`
        }
        if (this.winnerNumber === 2) {
            return `${this.playerTwoName} wins!`
        }
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}!`
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
        this.checkForColumnWin();
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
    checkForColumnWin(){
        if (this.winnerNumber !== 0){
            return
        }
        this.columns.forEach((column)=>{
          let columnInspect = new ColumnWinInspector(column)
          if (columnInspect.inspect()){
              this.winnerNumber = columnInspect.inspect()
              console.log(this.winnerNumber)
          }
        })
        // for (let i = 0 ; i <= 7 ; i++){

        // }
    }
}
