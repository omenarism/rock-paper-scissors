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

// let comp = getComputerChoice(computer);
// console.log('Computer Chose: ' + translateToItem(comp));

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
    }
}

const humanSelection = getHumanChoice();
const computerSelection = translateToItem(getComputerChoice());
console.log('You has chosen: ' + humanSelection);
console.log('Computer has chosen: ' + computerSelection);
playRound(humanSelection, computerSelection);


// function checkHumanChoice() {
//     if (pilihan > 2 && pilihan < 0) {
//        alert('CHOOSE A NUMBER BETWEEN 0 AND 2');
//     } else if(isNaN(pilihan)) {
//         alert('NOT A NUMBER');
//     } 
//     else {
//         alert('Continue');
//     }
// }

// checkHumanChoice(pilihan);

// let humanScore = 0;
// let computerScore = 0;

// function duel(pilihan, comp) {
//     if(pilihan == 0 && comp == 0) {
//         console.log('A TIE!');
//     }   else if(pilihan == 0 && comp == 1) { 
//         console.log('COMPUTER WINS!');
//     }   else if(pilihan == 0 && comp == 2) {
//         console.log('HUMAN WINS!');
//     }   else
// }

// duel(pilihan, comp);






