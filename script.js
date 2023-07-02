const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let player = button.value;
        let computer = computerSelection();
        let result = playRound(player,computer); 
    });  
});

function computerSelection(){
    let choices = ["Rock","papers","Scissor"]
    let randomNumber = choices[Math.floor(Math.random()*choices.length)];
    const comp = document.querySelector(".comp")
    comp.textContent = `${randomNumber}`;
    return randomNumber;

}

playerScore = 0;
computerScore =0;

const game = document.querySelector(".Game")
const Result = document.querySelector(".result");
const player = document.querySelector(".Player");


function playRound(computerSelection,playerSelection){
    if(computerSelection === playerSelection){
        Result.textContent = "it's a tie";
    }
    else if(
        computerSelection === "papers" && playerSelection === "Rock"||
        computerSelection === "Scissor" && playerSelection === "papers"||
        playerSelection === "Scissor" &&  computerSelection === "Rock"
    ){
        ++computerScore;
        Result.textContent = "computer +1";
        game.textContent = `COMP_SCORE :${computerScore}`

     
    }
    
    else if(
        computerSelection === "Rock"  && playerSelection === "papers"||
        computerSelection === "papers"  && playerSelection === "Scissor"||
        computerSelection === "Scissor" && playerSelection === "Rock"
    ){
        playerScore++
        Result.textContent = "player +1"
        player.textContent =`PLAYER_SCORE: ${playerScore}`;
        setGameOver();
       
   
    }
    
    }
    function setGameOver(){
       if(computerScore === 5){
           alert(` GAME OVER!!: ${computerScore}||${playerScore} click RESTART button`);
           buttons.disabled = true
        }else if(playerScore === 5){
            alert(` GAME OVER!!: ${computerScore}||${playerScore} click RESTART button`);
        }
        
      }

   function restartGame(){
    playerScore = 0;
    computerScore= 0;
    player.textContent =`PLAYER_SCORE: ${playerScore}`;
    game.textContent = `COMP_SCORE :${computerScore}`

   }
  const btn = document.querySelector("#btn");
  btn.addEventListener("click",restartGame)