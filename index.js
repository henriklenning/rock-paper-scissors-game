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
