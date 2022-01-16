import {Board} from "./game-boardm.mjs"

const game_board = new Board();

const $git_btn = document.querySelector('#git');

$git_btn.addEventListener('click', e => {
    e.preventDefault();
    window.open('https://github.com/amaralltx');
});