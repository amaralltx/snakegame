let inputDirection = {
    x: -1,
    y: 0
}

let lastDirection = {
    x: 0,
    y: 0
}

const data = new Date();
let oldDate = new Date(); 
window.addEventListener('keydown', e => {

    if(new Date().getTime() - oldDate.getTime() > 50){
        switch (e.key) {
            case "w":
            case 'ArrowUp':
                if(lastDirection.y !== 0) break
                inputDirection.x = 0;
                inputDirection.y = -1;
                break;
            case "s":
            case 'ArrowDown':
                if(lastDirection.y !== 0) break
                inputDirection.x = 0;
                inputDirection.y = 1;
                break;
            case "a":
            case 'ArrowLeft':
                if(lastDirection.x !== 0) break
                inputDirection.x = -1;
                inputDirection.y = 0;
                break;
                case "d":
            case 'ArrowRight':
                if(lastDirection.x !== 0) break
                inputDirection.x = 1;
                inputDirection.y = 0;
                break;
            case 'Space':
            default:
                break;
        }
    }

    oldDate = new Date();
})

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function resetInputDirection(){
    inputDirection = {
        x: -1,
        y: 0
    }
}

export function updateDirection(){
    inputDirection =  lastDirection;
}

export function getInputDirection(){
    lastDirection = inputDirection;
    return inputDirection;
}

export function setInputDirection(input){
    lastDirection = inputDirection;
    inputDirection = input;
}