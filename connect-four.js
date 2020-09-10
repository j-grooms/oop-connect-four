import { Game } from './game.js';
let game = undefined;
const boardHolder = document.getElementById('board-holder')
const gameName = document.getElementById('game-name');
function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = getName();
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const formHolder = document.getElementById('form-holder');
    const p1Name = document.getElementById('player-1-name');
    const p2Name = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');



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
