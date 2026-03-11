let boxes = document.querySelectorAll(".Box");  //array of all buttons (Boxes)
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerO turn, false-->playerX turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//     });
// });

//Adding event listener to all Box

for(let i = 0; i < document.querySelectorAll(".Box").length; i++){
    document.querySelectorAll(".Box")[i].addEventListener("click",function(){
        
        if(turnO){
            this.innerText = "O";
            turnO = false;
        }else{
            this.innerText = "X";
            turnO = true;
        }
        this.disabled = true; // disableing box after click so that again clicking dont change the sign
        checkWinner();
    })
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("hide");
    }
}

function resetGame(){
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

function showWinner(winner){
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

function checkWinner(){
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
