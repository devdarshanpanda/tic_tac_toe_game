let box=document.querySelectorAll(".box");
// let box_text=document.querySelectorAll(".box-text")
let win_msg=document.querySelector(".win")
// console.log(box);

let turn="X"

function changeTurn(){
     if(turn=="X"){
        return turn="0"
    }else if(turn=="0"){
        return turn="X"
    }
}

// function checkWin(){
//     let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

//     win.forEach((item)=>{
        
//         if(box_text[item[0]].textContent==box_text[item[1]].textContent && box_text[item[2]].textContent== box_text[item[1]].textContent && box_text[item[0]].textContent !==""){
           
//         win_msg.textContent=`${box_text[item[0]].textContent} win`;
      
//         }
//     })
// }



//     box.forEach((element,i) => {
//     element.addEventListener("click",()=>{
//         box_text[i].textContent=turn
//         changeTurn()
//         checkWin()
//         document.querySelector(".info").textContent=turn;
//     })
// });

function checkWin(){
    let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    win.forEach((item)=>{
        
        if(box[item[0]].textContent==box[item[1]].textContent && box[item[2]].textContent== box[item[1]].textContent && box[item[0]].textContent !==""){
           
        win_msg.textContent=`${box[item[0]].textContent} win`;
        disabledCell();
        }
    })
}

function startGame(){

box.forEach((element,i) => {
    element.addEventListener("click", clicking)
    element.style.backgroundColor=""
});
}

function clicking(e){
    console.log(e.target);
    e.target.textContent=turn
    changeTurn()
    checkWin()
    checkTie()
    document.querySelector(".info").textContent=turn;
}


function checkTie(){
    let emptyCell=0;
    box.forEach((e)=>{
   if( e.textContent==""){
    emptyCell++
   }
})
    if( !checkWin() && emptyCell==0){
        win_msg.textContent="Match Tied"
    }
}


function disabledCell(){
    box.forEach((e)=>{
        e.removeEventListener("click",clicking)
        e.style.backgroundColor="#0d9ceb2e"
    })
}
// disabledCell()

let restart=document.getElementById("restart");
restart.addEventListener("click",()=>{
    box.forEach((e)=>{
        e.textContent="";
    })
    startGame()
    document.querySelector(".info").textContent="X"
    changeTurn()
    win_msg.textContent=""
    
})

startGame()