



function game() {
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    while(i<5){

        let playerChoice = prompt("Make your choice (Rock,Paper,Scissor)").toLowerCase();

        let computerChoice = getComputerChoice();

        let roundResult = playRound(playerChoice,computerChoice);

        playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1,playerChoice.length);
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.substring(1,computerChoice.length);
        
        

        if( roundResult == "invalid" ){
            console.log("Invalid option, try again")
            continue;
        }

        console.log(`Round : ${i+1}`)

        if(roundResult == "Win"){
            console.log(`You win ! ${playerChoice} beats ${computerChoice}`)

            playerScore++;
        }

        if(roundResult == "Lose"){
            console.log(`You Lose ! ${computerChoice} beats ${playerChoice}`)
            computerScore++;
        }

        if(roundResult == "Draw"){
            console.log(`It's a Draw`)
        }

        i++
        


    }

    return`Final score Player: ${playerScore} Computer: ${computerScore} `
    
}

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
