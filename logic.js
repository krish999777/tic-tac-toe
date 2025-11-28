const boxes=document.getElementsByClassName("box")
let isGameOver=false
let count=0
let canContinue=true
const end=document.getElementById("End")
for(let i=0;i<boxes.length;i++)
{

        boxes[i].addEventListener("click",function(){
        if(boxes[i].textContent){
            return
        }
        if(canContinue==false){
            return
        }
        
        if(count%2===0)
            {
            boxes[i].innerHTML=(`<p class="clicked">X</p>`)
            count++
            }
            
        else
            {
            boxes[i].innerHTML=(`<p class="clicked">O</p>`)
            count++
            }
        checkComplete()
})
}
function checkComplete()
{
    isGameOver=false
    let winner=""
    if((boxes[0].textContent===boxes[1].textContent)&&(boxes[1].textContent===boxes[2].textContent)&&(boxes[2].textContent=="X"||boxes[2].textContent=="O")){
        isGameOver=true
        winner=boxes[0].textContent
    }
    else if((boxes[3].textContent===boxes[4].textContent)&&(boxes[4].textContent===boxes[5].textContent)&&(boxes[5].textContent=="X"||boxes[5].textContent=="O")){
        isGameOver=true
        winner=boxes[3].textContent
    }
    else if((boxes[6].textContent===boxes[7].textContent)&&(boxes[7].textContent===boxes[8].textContent)&&(boxes[8].textContent=="X"||boxes[8].textContent=="O")){
        isGameOver=true
        winner=boxes[6].textContent
    }
    else if((boxes[0].textContent===boxes[3].textContent)&&(boxes[3].textContent===boxes[6].textContent)&&(boxes[6].textContent=="X"||boxes[6].textContent=="O")){
        isGameOver=true
        winner=boxes[0].textContent
    }
    else if((boxes[1].textContent===boxes[4].textContent)&&(boxes[4].textContent===boxes[7].textContent)&&(boxes[7].textContent=="X"||boxes[7].textContent=="O")){
        isGameOver=true
        winner=boxes[1].textContent
    }
    else if((boxes[2].textContent===boxes[5].textContent)&&(boxes[5].textContent===boxes[8].textContent)&&(boxes[8].textContent=="X"||boxes[8].textContent=="O")){
        isGameOver=true
        winner=boxes[2].textContent
    }
    else if((boxes[0].textContent===boxes[4].textContent)&&(boxes[4].textContent===boxes[8].textContent)&&(boxes[8].textContent=="X"||boxes[8].textContent=="O")){
        isGameOver=true
        winner=boxes[0].textContent
    }
    else if((boxes[2].textContent===boxes[4].textContent)&&(boxes[4].textContent===boxes[6].textContent)&&(boxes[6].textContent=="X"||boxes[6].textContent=="O")){
        isGameOver=true
        winner=boxes[2].textContent
    }
    else
        isGameOver=false
    if(isGameOver){
        end.textContent=`GAME IS OVER \n THE WINNER IS ${winner}`
        canContinue=false
    }
}
const playBtn=document.getElementById("playAgain")
playBtn.addEventListener("click",function(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].textContent=""
        end.innerHTML=""
        canContinue=true
    }
})