

let playerScore = 0;
let computerScore = 0
window.addEventListener("click",playRoundUI);

function playRound(playerChoice,computerChoice) {

    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == "rock"){
        return playRock(computerChoice)
    }else{
        if(playerChoice == "paper" ){
            return playPaper(computerChoice);
        }
        else{
            if(playerChoice == "scissor"){
                return playScissor(computerChoice);
            }else{
                return "invalid";
            }
        }
    }
 
}

function playRock(computerChoice){
    
    if(computerChoice == "rock"){
        return "Draw";
    }

    if(computerChoice == "paper"){
        return "Lose";

    }

    if(computerChoice == "scissor"){
        return "Win";

    }
}

function playScissor(computerChoice){
    if(computerChoice == "scissor"){
        return "Draw";
    }

    if(computerChoice == "rock"){
        return "Lose";

    }

    if(computerChoice == "paper"){
        return "Win";

    }
}

function playPaper(computerChoice){
    if(computerChoice == "paper"){
        return "Draw";
    }

    if(computerChoice == "scissor"){
        return "Lose";

    }

    if(computerChoice == "rock"){
        return "Win";

    }
}

function getComputerChoice() {
    const choice= Math.floor(Math.random()*3);

    if(choice == 0){
        return "rock"
    }

    if(choice == 1){
        return "paper"
    }

    if(choice == 2){
        return "scissor"
    }


    
}

function roundResultText(roundResult,playerChoice,computerChoice) {

    if(roundResult == "Win"){

        playerScore++;
       return `You win ! ${playerChoice} beats ${computerChoice}`;

    }

    if(roundResult == "Lose"){
        computerScore++
       return `You Lose ! ${computerChoice} beats ${playerChoice}`

    }

    if(roundResult == "Draw"){
        return `It's a Draw`
    }


    
}

function playRoundUI(e) {

    if(!e.target.id){
        return;
    }

    const id = e.target.id;

    const playerChoice = playerOptionController(id);

    const computerChoice = getComputerChoice();

    const roundResult =playRound(playerChoice,computerChoice);

    const resultUI = document.querySelector(".result");

    resultUI.textContent = roundResultText(roundResult,playerChoice,computerChoice);

    const scoreUI =document.querySelector(".score");

    scoreUI.textContent = `Player Score : ${playerScore} , Computer Score : ${computerScore}`;

    const playerOption = document.querySelector(`#${e.target.id}`)
  


    playerOption.classList.add(roundResult.toLocaleLowerCase());

    const computerChoiceUI= document.querySelector(`#${computerOtpionController(computerChoice)}`);

    switch (roundResult) {
        case "Win":
            computerChoiceUI.classList.add("lose");
            break;

        case "Lose":
            computerChoiceUI.classList.add("win");  
            
        case "Draw":
            computerChoiceUI.classList.add("draw");    
    
        default:

            
            break;
    }

    if(playerScore == 5 || computerScore == 5 ){

        if(playerScore > computerScore){
            resultUI.textContent ="Game over, Player Wins";

        }else{
            resultUI.textContent ="Game over, Computer Wins";


        }



       
    }


}


function playerOptionController(id) {

    switch (id) {
        case "player_rock":
            return "rock";
        
        case "player_scissor":
            return "scissor";
        
        case "player_paper":
            return "paper"
    
        default:
            return "invalid";
            
    }
    
}

function computerOtpionController(option) {

    switch (option) {
        case "rock":
            return "computer_rock";
            
    
        case "paper":
            return "computer_paper";
            
        case "scissor":
            return "computer_scissor";

        default:
            break;
    }
    
}



const optionBlockList = document.querySelectorAll(".option_block");

function removeTransition(e) {

    if(e.propertyName !== 'transform') return ;

    if(this.classList.contains("win")){
        this.classList.remove("win")
    }   

    if(this.classList.contains("draw")){
        this.classList.remove("draw")
    }  

    if(this.classList.contains("lose")){
        this.classList.remove("lose")
    }  
    
  }


optionBlockList.forEach(optionBlock => optionBlock.addEventListener('transitionend',removeTransition));  



