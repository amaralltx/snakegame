export class Board {

    constructor(args) {
        let $game_board = document.querySelector(".game-board");

        for (let i = 0; i < 15; i++){
            const $tr = document.createElement('tr');
            for (let j = 0; j < 15; j++){
                const $td = document.createElement('td');
                if(i % 2 == 0){
                    if(j % 2 == 0){
                        $td.classList.add('td-escura');
                    }
                    else {
                        $td.classList.add('td-clara');
                    }
                }
                else {
                    if(j % 2 == 0){
                        $td.classList.add('td-clara');
                    }
                    else {
                        $td.classList.add('td-escura');
                    }
                }
                $tr.appendChild($td);
            }
            $game_board.appendChild($tr)
        }
    }
} 