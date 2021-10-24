let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToCapitalize(word) {
  if (word === "rock") {
    return "Rock";
  }
  if (word === "paper") {
    return "Paper";
  }
  if (word === "scissors") {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultDiv.innerHTML = convertToCapitalize(userChoice) + " beats " + convertToCapitalize(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultDiv.innerHTML = convertToCapitalize(userChoice) + " loses to " + convertToCapitalize(computerChoice) + ". You lost :(";
}

function tie(userChoice, computerChoice) {
  resultDiv.innerHTML = convertToCapitalize(userChoice) + " equals to " + convertToCapitalize(computerChoice) + ". It is a tie!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', function () {
    game("rock");
  });

  paperDiv.addEventListener('click', function () {
    game("paper");
  });

  scissorsDiv.addEventListener('click', function () {
    game("scissors");
  });
}

main();