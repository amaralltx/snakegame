export class Board {
    width = 22;
    heith = 22;
    dimension = 22;
    score = 0;
    $html_board = document.querySelector("#board");
    $html_score = document.querySelector("#score");

    generateRandomPosition() {
        return {
            x: Math.floor(Math.random() * this.width),
            y: Math.floor(Math.random() * this.heith),
        };
    }

    isOutBoard(position) {
        return (
            position.x > this.width ||
            position.x < 1 ||
            position.y > this.heith ||
            position.y < 1
        );
    }

    addScore(){
        this.score++;
        this.$html_score.innerHTML = this.score;
    }
}
