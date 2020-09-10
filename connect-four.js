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
}

window.addEventListener('DOMContentLoaded', (event) => {
    const formHolder = document.getElementById('form-holder');
    const p1Name = document.getElementById('player-1-name');
    const p2Name = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');

    clickTargets.addEventListener('click', ()=>{
        game.playInColumn();
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
        console.log(game)
    })
});
