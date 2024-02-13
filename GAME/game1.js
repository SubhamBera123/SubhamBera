let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset_btn");
let msgContainer = document.querySelector(".msg_container");
let newGameBtn = document.querySelector("#new_btn");
let msg = document.querySelector("#msg");

let turnO =true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
      if(turnO)
      {
        box.innerText="O";
        turnO=false;
      }
      else
      {
        box.innerText="X";
        turnO=true;
      }
      box.disabled = true;

      check_winner();
    });
});

const show_disable=()=>{
  for(let box of boxes)
  {
      box.disabled = true;
  }
}

const showWinner=(Winner)=>{
  msg.innerText =`CONGRATULATION 🎉🎉🎉\nWinner is ${Winner}`;
  msgContainer.classList.remove("hide");
  show_disable();
}

const check_winner = ()=>{
  for(pattern of winPatterns)
  {
    let pos1_val=boxes[pattern[0]].innerText;
    let pos2_val=boxes[pattern[1]].innerText;
    let pos3_val=boxes[pattern[2]].innerText;

   if(pos1_val!="" && pos2_val!="" && pos3_val!="")
   {
    if(pos1_val===pos2_val && pos2_val===pos3_val)
    {
      console.log("Winner",pos1_val);
      showWinner(pos1_val);
    }
   }
  }
}

const resetGame =()=>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes=()=>{
  for(let box of boxes)
  {
    box.disabled=false;
    box.innerText="";
  }
}

newGameBtn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame);