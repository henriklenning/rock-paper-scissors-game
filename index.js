function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (4 - 1)) + 1;
  if (computerChoice == 1) {
    return "Rock";
  } else if (computerChoice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "ROCK" && computerSelection === "Rock") {
//     console.log("It's a tie!");
//   }
//   if (playerSelection === "ROCK" && computerSelection === "Paper") {
//     console.log("Player lost!");
//   }
//   if (playerSelection === "ROCK" && computerSelection === "Scissor") {
//     console.log("Player wins!");
//   }
//   if (playerSelection === "PAPER" && computerSelection === "Rock") {
//     console.log("Player wins!");
//   }
//   if (playerSelection === "PAPER" && computerSelection === "Paper") {
//     console.log("It's a tie!");
//   }
//   if (playerSelection === "PAPER" && computerSelection === "Scissor") {
//     console.log("Player lost!");
//   }
//   if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
//     console.log("Player lost!");
//   }
//   if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
//     console.log("Player wins!");
//   }
//   if (playerSelection === "SCISSORS" && computerSelection === "Scissor") {
//     console.log("It's a tie!");
//   }
// }

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "Rock" && playerSelection === "ROCK") ||
    (computerSelection === "Paper" && playerSelection === "PAPER") ||
    (computerSelection === "Scissors" && playerSelection === "SCISSORS")
  ) {
    return "A tie!";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "PAPER") ||
    (computerSelection === "Paper" && playerSelection === "SCISSORS") ||
    (computerSelection === "Scissors" && playerSelection === "ROCK")
  ) {
    return "You loose!";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "SCISSORS") ||
    (computerSelection === "Paper" && playerSelection === "ROCK") ||
    (computerSelection === "Scissors" && playerSelection === "PAPER")
  ) {
    return "You win!";
  }
}

const playerSelection = "SCISSORS";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// console.log(playRound(playerSelection, computerSelection));

// I need a function that chooses between roch paper scissors for the computer
// Then compare computers choise and user choice and declare winner based on result of comparison

// const getComputerChoice =

// if (getComputerChoice == 1) {
//     console.log("Rock");
// } else if (getComputerChoice == 2) {
//     console.log("Paper");
// }
// else {
//     console.log("Scissors");
// }
