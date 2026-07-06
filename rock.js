function getComputerChoice() {
    let number = Math.random();

    if(number < 1/3){
        return "rock";

    }
    else if (number < 2/3){
        return "paper"
    }
    else if (number < 1){
        return "scissors"
    }

}

function getHumanChoice() {
    let humannum = prompt("Pick either rock or scissor or paper");
    return humannum;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    let humanChoice =humanChoice.toLowerCase;

    if(humanChoice == computerChoice){
        console.log("It's a tie");
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") ||
           (humanChoice == "scissors" && computerChoice == "paper") ||
           (humanChoice == "paper" && computerChoice == "rock"))
           {
            humanScore ++;
            console.log(humanChoice + "won");
           }

    else{
        computerScore ++;
        console.log(computerChoice + "won");
    }


}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    for( i = 0 ; i< 5;i ++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
   
    
}

playGame();