// 7 columns
export class Column {
    constructor(){
        this.tokens = [null, null, null, null, null, null];
    }
    add(currentPlayer) {
        for (let i = 5; i >= 0; i--) {
            let rowSearch = this.tokens[i];
            if (rowSearch === null) {
               this.tokens[i] = currentPlayer;
               return;
            }
        }

    }
    getTokenAt(rowNum) {
        return this.tokens[rowNum];
    }
    isFull(){
        for (let i = 0; i <=5; i++){
            let el = this.tokens[i]
            if (el === null){
                return false
            }
        }
        return true
    }
}
