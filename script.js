
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
    return "Voce perde! paper vence de rock";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "Voce perde! scissors vence de paper";
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "Voce perde! rock vence de scissors";
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "Voce ganha! paper vence de rock";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "Voce ganha! scissors vence de paper";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "Voce ganha! rock vence de scissors";
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
    getScore()
  }


  function getScore() {
    let result = playRound(playerSelection.toUpperCase(), computerSelection);
    if (
      result === "Voce perde! paper vence de rock" ||
      result === "Voce perde! scissors vence de paper" ||
      result === "Voce perde! rock vence de scissors"
    ) {
      computerScore++;
    } else if (
      result === "Voce ganha! paper vence de rock" ||
      result === "Voce ganha! scissors vence de paper" ||
      result === "Voce ganha! rock vence de scissors"
    ) {
      playerScore++;
    }
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);

  }





  if (playerScore > computerScore) {
    console.log(`Parabens voce ganhou com ${playerScore} pontos`)
  } else if (playerScore === computerScore) {
    console.log("Infelizmente houve um empate")
  } else {
    console.log(`Infelizmente o computador ganhou com ${computerScore} pontos`)
  }


}

