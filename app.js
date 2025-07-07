let boxes = document.querySelectorAll(".box");
let player1 = "O";
let player2 = "X";
let currentPlayer = player1;

const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
   
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            box.textContent = currentPlayer;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
         checkWinner();
         
    });
});
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const checkWinner = () => {
    for (let conditions of winConditions) {
        let pos1val = boxes[conditions[0]].textContent;
        let pos2val = boxes[conditions[1]].textContent;
        let pos3val = boxes[conditions[2]].textContent;
        if (pos1val === pos2val && pos2val === pos3val && pos1val !== "") {
            
            alert(`Player ${pos1val} wins!`);
          return;
            disableBoxes();
        }
    }
}

let resetbtn = document.querySelector(".restart");
const resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = "";
    });
    currentPlayer = player1;
}
resetbtn.addEventListener("click", resetGame);
