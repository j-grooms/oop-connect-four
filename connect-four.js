window.addEventListener('DOMContentLoaded', (event) => {
    let game = undefined;
    const formHolder = document.getElementById('form-holder');
    const p1Name = document.getElementById('player-1-name');
    const p2Name = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');

    formHolder.addEventListener('keyup', (e) => {
            if ((p1Name.value.length > 0) && (p2Name.value.length > 0)) {
                    newGame.removeAttribute("disabled")
            }
        })

});
