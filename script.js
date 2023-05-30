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
