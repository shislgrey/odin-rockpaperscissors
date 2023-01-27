let choices = ['rock', 'paper', 'scissors']
// let choices = ['tits', 'ass']
let computerSelection;
let playerSelection;
let winner;
let score = 0;

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerSelection)
}
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    // playerSelection = prompt("Tits or ass?").toLowerCase()
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Sorry, that's not a valid choice! Try again! Rock, paper, or scissors?")
        getPlayerChoice()
    } else {
        console.log(playerSelection)
    }
}
function determineWinner() {
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
    for (let counter = 0; counter < 5; counter++) {
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
}
