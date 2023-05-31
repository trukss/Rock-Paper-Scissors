
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0

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
    return "Voce ganha!, rock ganha de scisosrs";
  } else if (playerSelection == computerSelection) {
    return "É um empate";
  } else {
    return "Valor invalido";
  }
}

function game() {

  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Escolha entre Rock, paper or scissors");
    console.log(playRound(playerSelection.toUpperCase(), computerSelection));
    if (playRound(playerSelection, computerSelection) === "Voce perde!, paper vence de rock" || playRound(playerSelection, computerSelection) === "Voce perde!, scissors vence de paper" || "Voce perde!, rock vence de scissors") {
      computerScore = computerScore++
    } else if (playRound(playerSelection, computerSelection) === "Voce ganha!, paper vence de rock" || "Voce ganha!, scissors ganhar de paper" || "Voce ganha!, scissors ganhar de paper") {
      playerScore = playerScore++
    } else {

    }
    console.log(playerScore)
    console.log(computerScore)
  }
  if (playerScore > computerScore) {
    console.log(`Parabens voce ganhou com ${playerScore} pontos`)
  } else if (playerScore === computerScore) {
    console.log("Infelismente houve um empate")
  } else {
    console.log(`Infelismente o computador ganhou com ${computerScore} pontos`)
  }


}

