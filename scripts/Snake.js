import { getInputDirection } from "./gameInputs.js";

export class Snake {
    speed = 10;
    body = [
        {
            x: 11,
            y: 10,
        },
        {
            x: 12,
            y: 10,
        },
        {
            x: 13,
            y: 10,
        },
    ];

    constructor(board) {
        this.board = board;
    }

    getSnakeHead() {
        return this.body[0];
    }

    update() {
        const inputDirection = getInputDirection();

        for (let i = this.body.length - 2; i >= 0; i--) {
            this.body[i + 1] = { ...this.body[i] };
        }

        this.body[0].x += inputDirection.x;
        this.body[0].y += inputDirection.y;
    }

    draw() {
        this.body.forEach((piece) => {
            const $snakePiece = document.createElement("div");
            $snakePiece.classList.add("snake");

            $snakePiece.style.gridRowStart = piece.y;
            $snakePiece.style.gridColumnStart = piece.x;

            this.board.$html_board.appendChild($snakePiece);
        });
    }

    growSnake() {
        // adicionando uma copia do último elemento no fim do array
        this.body.push({
            ...this.body[this.body.length - 1],
        });
    }

    hasSelfCollision() {
        return this.body.some((piece, index) => {
            if (index === 0 || this.body.length <= 3) return false;
            return (
                this.body[0].x == piece.x &&
                this.body[0].y == piece.y
            );
        });
    }

    checkCollision(position) {
        return this.body.some((piece) => {
            return position.x === piece.x && position.y === piece.y;
        });
    }
}
