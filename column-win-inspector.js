export class ColumnWinInspector {
    constructor(column){
        this.column = column.tokens
    }
    inspect(){
        for (let i = 0 ; i < 7; i++){
            if ((this.column[i] !== null) &&
                (this.column[i] === this.column[i+1]) &&
                (this.column[i] === this.column[i+2]) &&
                (this.column[i] === this.column[i+3]) ){
                return this.column[i]
        }
    }
}
}
