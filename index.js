let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
  if (computerChoice === 0) {
    return "ROCK";
  } else if (computerChoice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

//Plays one round of rock paper scissors and displays current standing after the round

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "ROCK" && playerSelection === "ROCK") ||
    (computerSelection === "PAPER" && playerSelection === "PAPER") ||
    (computerSelection === "SCISSORS" && playerSelection === "SCISSORS")
  ) {
    alert(
      "Computer choose" +
        " " +
        computerSelection +
        "." +
        " " +
        computerSelection +
        " " +
        "is equal to" +
        " " +
        playerSelection +
        ". " +
        "A tie!\n" +
        "Current standing:" +
        " " +
        playerScore +
        " " +
        "to" +
        " " +
        computerScore
    );
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "ROCK")
  ) {
    playerScore++;
    alert(
      "Computer choose" +
        " " +
        computerSelection +
        "." +
        " " +
        computerSelection +
        " " +
        "looses to" +
        " " +
        playerSelection +
        ". " +
        "You win!\n" +
        "Current standing:" +
        " " +
        playerScore +
        " " +
        "to" +
        " " +
        computerScore
    );
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore++;
    alert(
      "Computer choose" +
        " " +
        computerSelection +
        "." +
        " " +
        computerSelection +
        " " +
        "beats" +
        " " +
        playerSelection +
        ". " +
        "You lost!\n" +
        "Current standing:" +
        " " +
        playerScore +
        " " +
        "to" +
        " " +
        computerScore
    );
  }
}

//Plays five rounds of rock paper scissors (one game)

function game() {
  while (computerScore < 5 && playerScore < 5) {
    let userWeapon = prompt(
      "Choose your weapon!\nType rock, paper or scissors into the prompt box below:"
    );
    const playerSelection = userWeapon.toUpperCase();

    if (
      playerSelection !== "ROCK" &&
      playerSelection !== "PAPER" &&
      playerSelection !== "SCISSORS"
    ) {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
      continue;
    }
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (playerScore == 5) {
      alert(
        "You win the game!\n" + playerScore + " " + "to" + " " + computerScore
      );
    } else if (computerScore == 5) {
      alert(
        "Computer wins the game! \n" +
          playerScore +
          " " +
          "to" +
          " " +
          computerScore
      );
    }
  }
}

game();

// let userWeapon = prompt("Choose your weapon!\nType rock, paper or scissors into the prompt box below");
// const playerSelection = userWeapon.toUpperCase();
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

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
