function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function translateToItem(compA) {
    if (compA == 0){
        return 'rock';
    } else if (compA == 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == 'rock' && computerChoice == 'rock'){
        console.log('A TIE');
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You Lose! Paper beats Rock');
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You Win! Rock beats Scissors');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You Win! Paper beats Rock');
        humanScore++;
    }  else if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log('A Tie');
    }  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        computerScore;
    }  else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You Lose! Scissors beats Rock');
        computerScore++;
    }  else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You Win! Scissors beats Paper');
        humanScore++;
    }  else {
        console.log('A Tie');
    }   
}

function playGame(){

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = translateToItem(getComputerChoice());
console.log('You has chosen: ' + humanSelection);
console.log('Computer has chosen: ' + computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);

// playGame(playRound());
console.log('human score: ' + humanScore);
console.log('computer score: ' + computerScore);







