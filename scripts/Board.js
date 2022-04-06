export class Board{
    width = 22;
    heith = 22;
    dimension = 22;
    score = 0;
    $html_board = document.querySelector('#board');

    generateRandomPosition(){
        return {
            x: Math.floor(Math.random() * this.width),
            y: Math.floor(Math.random() * this.heith),
        }
    }
}