let choices = ['rock', 'paper', 'scissors']
let computerSelection;
let playerSelection;
let winner;
let score = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Sorry, that's not a valid choice! Try again! Rock, paper, or scissors?")
        getPlayerChoice()
    } else {
        console.log(playerSelection)
    }
}

function determineWinner() {
    computerSelection = getComputerChoice()
    console.log(computerSelection)
    if (computerSelection == playerSelection) {
        winner = "tie"
    } else if (computerSelection != playerSelection) {
        if (computerSelection == "rock") {
            if (playerSelection == "paper") {
                winner = "player"
            } else if (playerSelection == "scissors") {
                winner = "computer"
            }
        } else if (computerSelection == "paper") {
            if (playerSelection == "rock") {
                winner = "computer"
            } else if (playerSelection == "scissors") {
                winner = "player"
            }
        } else if (computerSelection == "scissors") {
            if (playerSelection == "rock") {
                winner = "player"
            } else if (playerSelection == "paper") {
                winner = "computer"
            }
        }
    }
    console.log(winner)
}

function playGame() {
    for (let counter = 0; counter < 1; counter++) {
        getComputerChoice()
        getPlayerChoice()
        determineWinner()
        if (winner == "computer") {
            score -= 1;
        } else if (winner == "player") {
            score += 1;
        } else if (winner == "tie") {
            score = score
        }
        console.log(score)
    }
    if (score < 0) {
        console.log(`Computer wins! Score is ${score}.`)
    } else if (score > 0) {
        console.log(`Player wins! Score is ${score}.`)
    } else {
        console.log("It's a tie!")
    }
}