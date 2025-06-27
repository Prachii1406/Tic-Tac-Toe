let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let mssg=document.querySelector(".mssg");
let m=document.querySelector("#m");

let turno=true;//player 0
const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

const resetgame=()=>{
    turno=true;
    enableboxes();
    mssg.classList.add("hide");


};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turno){
        box.innerText="O";
        turno=false;
    }else{
        box.innerText="X";
    
        turno=true;
    }
    
    box.disabled=true;
    checkWinner();

    });
   
});
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner = (winner) =>{
    m.innerText= 'Congratulations winner!';
    mssg.classList.remove("hide");
    disableboxes();
};

const checkWinner =()=>{
    for(pattern of winpatterns){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};
reset.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);

let b=document.querySelector(".box");
if(b.innerText==="X"){
    b.style.backgroundColor="green";
}else if (b.innerText==="O"){
    b.style.backgroundColor="red";

}else{
    b.style.backgroundColor=" #ffffc7";

}