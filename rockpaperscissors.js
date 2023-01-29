
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Sorry, that's not a valid choice! Try again! Rock, paper, or scissors?")
        getPlayerChoice()
    } else {
        return playerSelection
    }
}

function determineWinner(computerSelection, playerSelection) {
    let winner
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
    return winner
}

function playGame() {
    let score = 0
    for (let counter = 0; counter < 5; counter++) {
        computerSelection = getComputerChoice()
        playerSelection = getPlayerChoice()
        winner = determineWinner(computerSelection, playerSelection)
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
        alert(`Computer wins! Score is ${score}.`)
    } else if (score > 0) {
        alert(`Player wins! Score is ${score}.`)
    } else {
        alert("It's a tie!")
    }
}