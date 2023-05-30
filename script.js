function getComputerChoice() {
  let aleatorio = Math.floor(Math.random() * 3);
  if (aleatorio === 0) {
    return "Rock"
  } else if (aleatorio === 1) {
    return "Paper"
  } else if (aleatorio === 2) {
    return "Scissors"
  }
}
const playerSelection = ""
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "Voce perde!, paper vence de Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "Voce perde!, Scissors vence de paper";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "Voce perde!, Rock vence de Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "Voce ganha!, Paper vence de Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Voce ganha!, Scissors ganhar de Paper";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "Voce ganha!, Rock ganha de Scisosrs"
  } else {
    return "E um empate";
  }
}