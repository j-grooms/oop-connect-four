import { ColumnWinInspector } from "./column-win-inspector.js"
import { Column } from "./column.js";
import { RowWinInspector } from './row-win-inspector.js'


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
        this.checkForRowWin();
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
    }
    checkForRowWin() {
        if (this.winnerNumber !== 0){
            return
        }
        let group1 = this.columns.slice(0, 4);
        let group2 = this.columns.slice(1, 5);
        let group3 = this.columns.slice(2, 6);
        let group4 = this.columns.slice(3, 7);
        let rowInspect1 = new RowWinInspector(group1)
        let rowInspect2 = new RowWinInspector(group2)
        let rowInspect3 = new RowWinInspector(group3)
        let rowInspect4 = new RowWinInspector(group4)
        if (rowInspect1.inspect()) {
            this.winnerNumber = rowInspect1.inspect();
        }
        if (rowInspect2.inspect()) {
            this.winnerNumber = rowInspect2.inspect();
        }
        if (rowInspect3.inspect()) {
            this.winnerNumber = rowInspect3.inspect();
        }
        if (rowInspect4.inspect()) {
            this.winnerNumber = rowInspect4.inspect();
        }
    }
}
