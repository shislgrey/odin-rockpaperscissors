// let choices = ['rock', 'paper', 'scissors']
let choices = ['tits', 'ass']
let computerSelection;
let playerSelection;
let winner;
let score = 0;

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerSelection)
}
function getPlayerChoice() {
    // playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    playerSelection = prompt("Tits or ass?").toLowerCase()
    console.log(playerSelection)
}
function determineWinner() {
    if (computerSelection.length > playerSelection.length) {
        winner = "computer"
    } else if (computerSelection.length == playerSelection.length) {
        winner = "tie"
    } else {
        winner = "player"
    }
    console.log(winner)
}

function playGame() {
    for (let counter = 0; counter < 5; counter++) {
        getComputerChoice()
        getPlayerChoice()
        winner = determineWinner()
        if (winner == "computer") {
            score -= 1;
        } else if (winner == "player") {
            score += 1;
        }
    }
    console.log(score)
}