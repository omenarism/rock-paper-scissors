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

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
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
  computerSelection = translateToItem(getComputerChoice());
  console.log("You has chosen: " + humanSelection);
  console.log("Computer has chosen: " + computerSelection);
  playRound(humanSelection, computerSelection);
  console.log(
    "Human score: " + humanScore + " || Computer score: " + computerScore
  );
}

const humanSelection = "";
const computerSelection = "";

// humanSelection = getHumanChoice().toLowerCase();
// computerSelection = translateToItem(getComputerChoice());

playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);
playGame(humanSelection, computerSelection);

const humanOtpt = document.getElementById("human-score");
humanOtpt.style.backgroundColor = "#333";
humanOtpt.style.color = "#ccc";
humanOtpt.innerHTML = "THE SCORE OF HUMAN IS: " + humanScore;

const computerOtpt = document.getElementById("computer-score");
computerOtpt.style.backgroundColor = "#333";
computerOtpt.style.color = "#ccc";
computerOtpt.innerHTML = "THE SCORE OF COMPUTER IS: " + computerScore;
