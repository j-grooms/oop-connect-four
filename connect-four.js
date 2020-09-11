import { Game } from './game.js';
let game = undefined;
const boardHolder = document.getElementById('board-holder')
const gameName = document.getElementById('game-name');
const clickTargets = document.getElementById('click-targets')
function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
        if (game.currentPlayer === 1){
            clickTargets.classList.remove("red")
            clickTargets.classList.add("black")
        } else {
            clickTargets.classList.remove("black")
            clickTargets.classList.add("red")
        }
    }
    for (let i = 0; i <= 5; i++){
        for(let j = 0; j <= 6; j++){
            let square = document.getElementById(`square-${i}-${j}`);
            let slot = game.getTokenAt(i, j)
            if (slot === 1) {
                if (!square.hasChildNodes()){
                    let div = document.createElement('div');
                    div.classList.add('black', 'token')
                    square.appendChild(div);
                }
            } else if (slot === 2) {
                if (!square.hasChildNodes()){
                    let div = document.createElement('div');
                    div.classList.add('red', 'token')
                    square.appendChild(div);
                }
            }

        }
    }
    for (let i = 0; i <= 6; i++){
        let column = document.getElementById(`column-${i}`)
        if (game.isColumnFull(i)) {
            column.classList.add('full')
        } else {
            column.classList.remove('full')
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const formHolder = document.getElementById('form-holder');
    const p1Name = document.getElementById('player-1-name');
    const p2Name = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');

    clickTargets.addEventListener('click', (e)=>{
        let colNum = e.target.id.slice(7)

        game.playInColumn(colNum);
        updateUI();
    })

    formHolder.addEventListener('keyup', (e) => {
        if ((p1Name.value.length > 0) && (p2Name.value.length > 0)) {
            newGame.removeAttribute("disabled")
        }
    })

    newGame.addEventListener('click', (e) => {
        game = new Game(p1Name.value, p2Name.value, 'Connect 4')
        p1Name.value = '';
        p2Name.value = '';
        newGame.setAttribute('disabled', 'true');
        updateUI();

    })
});
