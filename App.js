let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newGame = document.querySelector(".new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turnO = true;// player x ,player o
let winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>
{
    let turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
};






boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
   {
    console.log("button clicked");
if(turnO)
{
    //player o
    box.innerText ="O";
    turnO= false;

}
else{
    box.innerText="X";
    turnO= true;
}

box.disabled=true;

checkWinner();
   } );
});


const enableBox =()=>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText ="";
        }

    };



const disableBox =()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const showWinner=(winner)=>{
    msgContainer.classList.remove("hide");
    msg.innerText= `congratulation ,winner is ${winner}`;
    disableBox();
}


const checkWinner = ()=>
{
for(let pattern of winPattern){
    let pos1Val =boxes[pattern[0]].innerText;
    let pos2Val =boxes[pattern[1]].innerText;
    let pos3Val =boxes[pattern[2]].innerText;
   
    if(pos1Val !=""&& pos2Val !=""&& pos3Val !="")
    {
        if(pos1Val=== pos2Val && pos2Val==pos3Val)
        {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }
}
};
newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);
