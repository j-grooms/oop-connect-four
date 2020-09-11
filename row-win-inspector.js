export class RowWinInspector {
    constructor([column1, column2, column3, column4]){
        this.column1 = column1.tokens
        this.column2 = column2.tokens
        this.column3 = column3.tokens
        this.column4 = column4.tokens
    }
    inspect(){
        for (let i = 0 ; i < 6; i++){
            if ((this.column1[i] !== null) &&
                (this.column1[i] === this.column2[i]) &&
                (this.column1[i] === this.column3[i]) &&
                (this.column1[i] === this.column4[i]) ){
                return this.column1[i];
        }
    }
}
}
