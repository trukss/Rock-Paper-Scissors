
let playerSelection;
let computerSelection;


function getComputerChoice() {
  let aleatorio = Math.floor(Math.random() * 3);
  if (aleatorio === 0) {
    return "ROCK"
  } else if (aleatorio === 1) {
    return "PAPER"
  } else if (aleatorio === 2) {
    return "SCISSORS"
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "Voce perde!, paper vence de rock";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "Voce perde!, scissors vence de paper";
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "Voce perde!, rock vence de scissors";
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "Voce ganha!, paper vence de rock";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "Voce ganha!, scissors ganhar de paper";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "Voce ganha!, rock ganha de scisosrs"
  } else {
    return "E um empate";
  }
}

function game() {

  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Escolha entre Rock, paper or scissors");
    console.log(playRound(playerSelection.toUpperCase(), computerSelection));
    
  }

}

