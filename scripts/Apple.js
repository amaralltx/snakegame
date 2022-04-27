export class Apple {
    // quanto maior o y mais pra baixo
    // quanto maior o x mais pra direita
    applePosition = {
        x: 0,
        y: 0,
    };
    constructor(board, snake) {
        this.board = board;
        this.snake = snake;
        this.spawnApple();
    }

    update() {
        if(this.applePosition.x == 0) this.applePosition.x++
        if(this.applePosition.y == 0) this.applePosition.y++
        if (
            this.snake.getSnakeHead().x == this.applePosition.x &&
            this.snake.getSnakeHead().y == this.applePosition.y
        ) {
            this.applePosition = this.genarateRandomPosition();
            this.board.addScore();
            this.snake.growSnake();
            document.querySelector("#eat-sound").play();
        }
    }

    draw() {
        const $applePiece = document.createElement("div");
        $applePiece.classList.add("apple");

        $applePiece.style.gridRowStart = this.applePosition.y;
        $applePiece.style.gridColumnStart = this.applePosition.x;

        this.board.$html_board.appendChild($applePiece);
    }

    spawnApple() {

        while (this.applePosition.y === 10 || this.applePosition.y === 0 || this.applePosition.x === 0) {
            this.applePosition.x = Math.floor(Math.random() * this.board.width)+1;
            this.applePosition.y = Math.floor(Math.random() * this.board.heith)+1;
        }
    }

    restartApple() {
        this.applePosition = this.genarateRandomPosition();
        this.draw();
    }

    genarateRandomPosition() {
        let newApplePosition;

        while (
            newApplePosition === undefined ||
            this.snake.checkCollision(newApplePosition)
        ) {
            newApplePosition = this.board.generateRandomPosition();
        }

        return newApplePosition;
    }
}
