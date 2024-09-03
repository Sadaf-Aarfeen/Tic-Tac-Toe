let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGmeBtn = document.querySelector(".new-game-button");
let message = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turn0 === true) {
        box.innerText = "0";
        turn0 = false;
    }
    else {
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    checkWinner();
});
});

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (Winner) =>{
    message.innerText = `Congratulations ${Winner} is the WINNER`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
     if(pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 ===pos3) {
            showWinner(pos1);
        }
     }
    }
};

resetbtn.addEventListener("click", resetGame);
newGmeBtn.addEventListener("click", resetGame);
