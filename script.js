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

function playRound(humanChoice, computerChoice) {
    if(humanChoice == 'rock' && computerChoice == 'rock'){
        console.log('A TIE');
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You Lose! Paper beats Rock');
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You Win! Rock beats Scissors');
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You Win! Paper beats Rock');
    }  else if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log('A Tie');
    }  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You Lose! Scissors beats Paper');
    }  else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You Lose! Scissors beats Rock');
    }  else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You Win! Scissors beats Paper');
    }  else {
        console.log('A Tie');
    }   
}

const humanSelection = getHumanChoice();
const computerSelection = translateToItem(getComputerChoice());
console.log('You has chosen: ' + humanSelection);
console.log('Computer has chosen: ' + computerSelection);
playRound(humanSelection, computerSelection);







