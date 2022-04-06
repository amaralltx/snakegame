import { Apple } from "./Apple.js";
import { Board } from "./Board.js";
import { Snake } from "./Snake.js";

let lastRender = 0;
const board = new Board()
const snake = new Snake(board);
const apple = new Apple(board, snake);

function game(currTime){

    // console.log(currTime)

    window.requestAnimationFrame(game);

    const secondsLastRender = (currTime - lastRender) / 1000;

    // Se o tempo desde a última renderização for menor que o tempo de cada atualização, retorna sem fazer nada
    if(secondsLastRender < 1 / snake.speed) return;

    lastRender = currTime;

    update();

    draw();
}

function update(){
    board.$html_board.innerHTML = '';
    snake.update();
    apple.update()
}

function draw(){
    snake.draw();
    apple.draw();
}

window.requestAnimationFrame(game);