const box = document.querySelectorAll(".box");
const restartButton = document.querySelector(".restart");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const text = document.querySelector(".statusText");
const scoreX = document.querySelector(".scoreX");
const scoreO = document.querySelector(".scoreO");
const newButton = document.querySelector(".new");
function changeName() {
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;
    if (player1Name) {
        player1.textContent = player1Name;
    }
    if (player2Name) {
        player2.textContent = player2Name;
    }

    if (player1Name && player2Name){
        document.querySelector('.name-inputs').style.display = 'none';
    }
    text.textContent = `${player1.textContent}'s turn!` 
}

let cells = ["","","","","","","","",""];

let valid = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","4","8"],
    ["2","4","6"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"]
];

let firstPlayer = 'X';

box.forEach((box, index) => {
        box.dataset.index = index;  
        box.addEventListener('click', () => game(box,index));
});

function turn(){
        firstPlayer = firstPlayer === 'X' ? 'O' : 'X';
        text.textContent = `${firstPlayer === 'X' ? player1.textContent : player2.textContent}'s turn!`
    controller();
}

function game(box,index){
    if (!cells[index]){
        cells[index] = firstPlayer;
        box.textContent = firstPlayer
        turn();
     
    }
}


let scorex = 0
let scoreo =0
function controller(){
    for(let i=0 ; i < valid.length; i++){
            if (cells[valid[i][0]] === cells[valid[i][1]] && cells[valid[i][1]] === cells[valid[i][2]]) {
            if (cells[valid[i][0]] === 'X') {
                text.textContent = `${player1.textContent} has won this round!`;
                scorex++;
                scoreX.textContent = scorex;
                Disable();
            } else if (cells[valid[i][0]] === 'O') {
                text.textContent = `${player2.textContent} has won this round!`;
                scoreo++;
                scoreO.textContent = scoreo;
                Disable();
            }
            return;
        }
    }
    if (!cells.includes("")) {
        text.textContent = "It's a tie!";
        Disable();
        return;
    }
}

function Disable(){
    box.forEach((box) => {
        box.style.pointerEvents = 'none'; 
    });
}

restartButton.addEventListener("click", function(){
    cells = ["","","","","","","","",""];
    firstPlayer = 'X';
    box.forEach((box) => {
        box.textContent = "";
        box.style.pointerEvents = 'auto'; 
    });
    text.textContent = `${player1.textContent}'s turn!`;
    scorex = 0
    scoreo =0
    scoreO.textContent = scoreo;
    scoreX.textContent = scorex;
})

newButton.addEventListener("click", function(){
    cells = ["","","","","","","","",""];
    firstPlayer = 'X';
    box.forEach((box) => {
        box.textContent = "";
        box.style.pointerEvents = 'auto';
    });
    text.textContent = `${player1.textContent}'s turn!`;
});