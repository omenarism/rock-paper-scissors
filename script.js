function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function translateToItem(compA) {
  if (compA == 0) {
    return "rock";
  } else if (compA == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

<<<<<<< HEAD
function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors: ");
}
=======
// function getHumanChoice() {
//   return prompt("Rock, Paper, or Scissors: ");
// }
>>>>>>> rps-ui

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
<<<<<<< HEAD
    console.log("A TIE");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("A TIE!");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You Lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You Lose! Scissors beats Rock");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log("A TIE!");
  }
}

function playGame(
  humanSelection,
  computerSelection,
  humanSelection,
  computerSelection
) {
  humanSelection = getHumanChoice().toLowerCase();
=======
    stateD.textContent = `A TIE! BOTH OF YOU CHOCE ROCK!`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    stateD.textContent = `You Lose! Paper beats Rock`;
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    stateD.textContent = `You Win! Rock beats Scissors`;
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    stateD.textContent = `You Win! Paper beats Rock`;
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    stateD.textContent = `A TIE! YOU BOTH CHOSE PAPER`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    stateD.textContent = `You Lose! Scissors beats Paper`;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    stateD.textContent = `You Lose! Scissors beats Rock`;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    stateD.textContent = `"You Win! Scissors beats Paper"`;
    humanScore++;
  } else {
    stateD.textContent = `A TIE! YOU BOTH CHOSE SCISSORS`;
  }
}

function playGame(humanSelection, computerSelection) {
>>>>>>> rps-ui
  computerSelection = translateToItem(getComputerChoice());
  console.log("You has chosen: " + humanSelection);
  console.log("Computer has chosen: " + computerSelection);
  playRound(humanSelection, computerSelection);
<<<<<<< HEAD
  console.log(
    "Human score: " + humanScore + " || Computer score: " + computerScore
  );
=======
  humanOtpt.innerHTML = `User choose: ${humanSelection}!`;
  computerOtpt.innerHTML = `Computer choose: ${computerSelection}!`;
  userPoint.textContent = `User score: ${humanScore}`;
  computerPoint.textContent = `Computer score: ${computerScore}`;
  //checking if one of the players reaches 5 points
  //and if do reaches 5, the button to choose will be removed
  if (computerScore === 5) {
    winner.textContent = "computer wins!";
    contAiner.style.display = "none";
  } else if (humanScore === 5) {
    winner.textContent = "you win!";
    contAiner.style.display = "none";
  }
>>>>>>> rps-ui
}

const humanSelection = "";
const computerSelection = "";

// grabbing the document of btn-rock by ID

<<<<<<< HEAD
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
=======
document.querySelector("#btn-rock").addEventListener("click", (e) => {
  e.preventDefault();
  let sumo = "rock";
  playGame(sumo, computerSelection);
});

document.querySelector("#btn-paper").addEventListener("click", (e) => {
  e.preventDefault();
  let sumo = "paper";
  playGame(sumo, computerSelection);
});

document.querySelector("#btn-scissors").addEventListener("click", (e) => {
  e.preventDefault();
  let sumo = "scissors";
  playGame(sumo, computerSelection);
});
>>>>>>> rps-ui

const humanOtpt = document.getElementById("human-choice");
humanOtpt.style.backgroundColor = "#333";
humanOtpt.style.color = "#ccc";

const computerOtpt = document.getElementById("computer-choice");
computerOtpt.style.backgroundColor = "#333";
computerOtpt.style.color = "#ccc";
<<<<<<< HEAD
computerOtpt.innerHTML = "THE SCORE OF COMPUTER IS: " + computerScore;
=======

const stateD = document.querySelector("#state");
stateD.style.backgroundColor = "#333";
stateD.style.color = "#ccc";

const userPoint = document.querySelector("#human-score");

const computerPoint = document.querySelector("#computer-score");

const winner = document.querySelector("#winner");

const contAiner = document.querySelector("#container-btn");
contAiner.style.margin = "10px 10px";
contAiner.style.textAlign = "center";
>>>>>>> rps-ui
