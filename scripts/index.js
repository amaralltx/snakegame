import { Apple } from "./Apple.js";
import { Board } from "./Board.js";
import { Snake } from "./Snake.js";
import {resetInputDirection, setInputDirection, updateDirection} from "./gameInputs.js";

let gameStatus = "start"
let lastRender = 0;
const board = new Board();
const snake = new Snake(board);
const apple = new Apple(board, snake);
const $game = document.querySelector("#game");
const $start_screen = document.querySelector("#start-screen");
const $end_screen = document.querySelector("#end-screen");
const $info_modal = document.querySelector("#info-modal");
function game(currTime) {
    
    switch (gameStatus) {
        case "start":
           window.requestAnimationFrame(game);

            const secondsLastRenderInit = (currTime - lastRender) / 1000;
            // Se o tempo desde a última renderização for menor que o tempo de cada atualização, retorna sem fazer nada
            if (secondsLastRenderInit < 1 / snake.speed) return;

            lastRender = currTime;

            updateDirection();

        
        break;
        case "running":
            window.requestAnimationFrame(game);
            updateDirection();
            const secondsLastRender = (currTime - lastRender) / 1000;

            // Se o tempo desde a última renderização for menor que o tempo de cada atualização, retorna sem fazer nada
            if (secondsLastRender < 1 / snake.speed) return;

            lastRender = currTime;

            update();

            draw();
            break;   

        case "gameover":
            document.querySelector("#game-over-sound").play();
            document.querySelector("#final-score").innerHTML = `${board.score}pts`;
            $game.style.visibility = "hidden";
            $end_screen.style.visibility = "visible";
            break;

        case "paused":
            $game.style.opacity = 0.8;
            $start_screen.style.visibility = "visible";
            setInputDirection({x: 0, y: 0});
            gameStatus = "start";
            break;
        case "finished":
            document.querySelector("#win-sound").play();
            window.alert("You win");
            break;    
        default:
            break;
    }
}

function update() {
    board.$html_board.innerHTML = "";
    snake.update();
    apple.update();
    checkGameOver();
}

function draw() {
    snake.draw();
    apple.draw();
}

function restart(){
    gameStatus = "start"
    board.restartBoard();
    snake.restartSnake();
    snake.action = "stoped";
    apple.restartApple();
    resetInputDirection();
    $end_screen.style.visibility =  "hidden";
    $start_screen.style.visibility = "visible";
    $game.style.opacity = 0.8;
    $game.style.visibility = "visible"
    window.requestAnimationFrame(game);
}

function pauseGame(){
    gameStatus = "paused";
}
function checkGameOver() {
    if (board.isOutBoard(snake.getSnakeHead()) ||
    snake.hasSelfCollision()) {
        gameStatus = "gameover";
    }
}

document.addEventListener("keydown", e => {
    if(gameStatus == "running" && e.code == "Space") gameStatus = "paused";
    else if(gameStatus == "start"){
        $game.style.opacity = 1;
        $start_screen.style.visibility = "hidden";
        gameStatus = "running";
        snake.action = "running";
        window.requestAnimationFrame(game);
    }
})
// ICONS 
const $profile_icon = document.querySelector("#profile-icon");
$profile_icon.addEventListener("click", e => {
    window.open("https://github.com/amaralltx");
})
const $info_icon = document.querySelector("#info-icon");
$info_icon.addEventListener("click", e => {
    //abre modal com informações do projeto
    if($info_modal.style.visibility == "visible"){
        $info_modal.style.visibility = "hidden"
    } else {
        $info_modal.style.visibility = "visible";
    }
})
const $menu_pause = document.querySelector("#menu-pause"); 
$menu_pause.addEventListener("click", e => {
    pauseGame();
})

const $menu_restart = document.querySelector("#menu-restart");
$menu_restart.addEventListener("click", e => {
    restart();
})

const $screen_restart = document.querySelector("#screen-restart");
$screen_restart.addEventListener("click", e => {
    restart();
})
