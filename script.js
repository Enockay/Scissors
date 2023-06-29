computerScore = 0;
playerScore = 0;
playCount = 0;




function getComputerSelection(){
let choices =["Rock", "papers", "Scissor"];
let randomNumber = choices[Math.floor(Math.random()*choices.length)];
 return randomNumber;
}
document.body.innerHTML = getComputerSelection()
const computerSelection = getComputerSelection()
const playerSelection = prompt("Enter your Choice Rock ,Paper,Scissor");

function playerRound(computerSelection,playerSelection){
    if(computerSelection === playerSelection){
        console.log("its a tie");
    }
    else if(
        computerSelection === "papers" && playerSelection === "Rock"||
        computerSelection === "Scissor" && playerSelection === "papers"||
        playerSelection === "Scissor" &&  computerSelection === "Rock"
    ){
        computerScore++;
         
        console.log("computer has won 1 point");
     
    }else if(playCount === 1){
        console.log(playerSelection++)
       }else if(playCount === 5){
          setGameOver();
       }
    
    else if(
        computerSelection === "Rock"  && playerSelection === "papers"||
        computerSelection === "papers"  && playerSelection === "Scissor"||
        computerSelection === "Scissor" && playerSelection === "Rock"
    ){
        playerScore++;
        console.log("You have won 1 point")
       
       
    }else{
        console.log("recheck your Choice Please")
    }
   
    }
    playCount++;
    console.log(playerRound(playerSelection,computerSelection));
    console.log(playerScore||computerScore);
   
     function setGameOver(){
        playerSelection.disabled = true;
        computerSelection.disabled = true;
        if(computerScore > playerScore){
            console.log("Computer has Won".computerScore);
        }else{
            console.log("You have won".playerScore);
        }
     }
     console.log(setGameOver());
      
    