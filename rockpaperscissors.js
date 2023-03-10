// TODO (big): Make this program flexible enough to play both the normal game as well as "Rock, Paper, Scissors, Lizard, Spock":
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

var choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    // TODO: same goal as in determineWinner: store the possible choices in a data structure
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
    // TODO: Move the looping part into the main game loop, or into a different function
    // TODO: maybe rename this function and focus on validating input 
    let playerSelection = ''
    while (!choices.includes(playerSelection))
        playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase()
    return playerSelection
}

function validatePlayerChoice(choices, playerSelection) {
    playerSelectionNormalized = playerSelection.toLowerCase
    if (choices.includes(playerSelectionNormalized)) {
        return playerSelectionNormalized
    } else {
        throw new Error("Invalid Choice")
    }
}

function determineWinner(computerSelection, playerSelection) {
    // TODO: implement this in a more compact way, storing the possible choices in a data structure
    // (hint: use map or indexOf)
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
    console.log(winner) //FIXME: remove if no longer used for debugging 
    return winner
}

function scoreGame(score) {
    // TODO: make this function return something
    if (score < 0) {
        return (`Computer wins! Score is ${score}.`)
    } else if (score > 0) {
        return (`Player wins! Score is ${score}.`)
    } else {
        return ("It's a tie!")
    }
}

function playGame() {
    // TODO: optimize the if/else logic
    let score = 0
    for (let counter = 0; counter < 5; counter++) {
        computerSelection = getComputerChoice()
        
        // FIXME: this only asks once and exits on failure. can we wrap it in a loop?
        try {
            // TODO: fill prompt with string interpolation so choices can get filled in
            // FIXME: '.toLowerCase()' seems like it belongs in validation
            playerSelection = prompt(choices).toLowerCase()
            validatePlayerChoice(choices, playerSelection)
        } catch (error) {
            throw new Error(error);
        }
        winner = determineWinner(computerSelection, playerSelection)
        if (winner == "computer") {
            score -= 1;
        } else if (winner == "player") {
            score += 1;
        }
    }
    console.log(scoreGame(score))
}

module.exports = {
    getComputerChoice,
    getPlayerChoice,
    determineWinner,
    choices
};