//TODO: Make this program flexible enough to play both the normal game as well as "Rock, Paper, Scissors, Lizard, Spock":
//      Scissors cuts Paper
//      Paper covers Rock
//      Rock crushes Lizard
//      Lizard poisons Spock
//      Spock smashes Scissors
//      Scissors decapitates Lizard
//      Lizard eats Paper
//      Paper disproves Spock
//      Spock vaporizes Rock
//      Rock crushes Scissors
//
//      ...or any other "X beats Y" game

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    //TODO: same as in determineWinner: store the possible choices in a data structure
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
    //TODO: turn this into a loop
    let playerSelection = ''
    while (!choices.includes(playerSelection))
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    return playerSelection

}


function determineWinner(computerSelection, playerSelection) {
    //TODO: implement this in a more compact way, storing the possible choices in a data structure
    //(hint: use map or indexOf)
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
    //TODO: optimize the if/else logic
    let score = 0
    for (let counter = 0; counter < 5; counter++) {
        computerSelection = getComputerChoice()
        playerSelection = getPlayerChoice()
        winner = determineWinner(computerSelection, playerSelection)
        if (winner == "computer") {
            score -= 1;
        } else if (winner == "player") {
            score += 1;
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