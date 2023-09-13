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
let counter = 0
let score = 0
let cscore = 0
let pscore = 0
const outcome = document.querySelector('#outcome')
const results = document.createElement('div')
results.classList.add('results')
const scoreCard = document.createElement('div')
scoreCard.classList.add('scorecard')

function resetGame() {
    score = 0;
    cscore = 0;
    pscore = 0;
    counter = 0;
    scoreCard.textContent = ``;
    results.textContent = ``
}

function getComputerChoice() {
    // TODO: same goal as in determineWinner: store the possible choices in a data structure
    return choices[Math.floor(Math.random() * choices.length)]
}

function validatePlayerChoice(choices, playerSelection) {
    if (choices.includes(playerSelection.toLowerCase())) {
        return true
    } else {
        return false
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
    return winner
}

function scoreGame(score) {
    if (score < 0) {
        return ('Computer wins!')
    } else if (score > 0) {
        return ('Player wins!')
    } else {
        return ("It's a tie!")
    }
}

function playGame(playerSelection) {
    // TODO: optimize the if/else logic
    //let strike = 0
    // let counter = 0
    //while (true) {
    computerSelection = getComputerChoice()

    // FIXME: this only asks once and exits on failure. can we wrap it in a loop?
    //playerSelection = prompt(`Computer score is ${cscore} and player score is ${pscore}. \nRock, paper, or scissors?`).toLowerCase()
    //if (validatePlayerChoice(choices, playerSelection)) {
    winner = determineWinner(computerSelection, playerSelection)
    if (winner == "computer") {
        score -= 1;
        cscore += 1;
    } else if (winner == "player") {
        score += 1;
        pscore += 1;
    }
    counter++
    // } else if (strike < 3) {
    //    playerSelection = prompt('Please enter a valid selection: rock, paper, or scissors?').toLowerCase()
    //    strike++
    //} else if (strike = 3) {
    //    return alert("That's enough playing around, the game is over.")
    //}



    //}
    scoreCard.textContent += `\nRound ${counter}: ${computerSelection}, ${playerSelection}`
    outcome.appendChild(scoreCard, `\n`)
    if (counter == 5) {
        results.textContent = (`The final score is: Computer, ${cscore}; Player, ${pscore}. ${scoreGame(score)}`)
        outcome.appendChild(results)
    } else if (counter > 5) {
        resetGame()
    }

}

document.querySelector('#rock').addEventListener("click", () => { playGame('rock'); })

document.querySelector('#paper').addEventListener("click", () => { playGame('paper'); })

document.querySelector('#scissors').addEventListener("click", () => { playGame('scissors'); })

document.querySelector('#reset').addEventListener('click', () => { resetGame() })

module.exports = {
    getComputerChoice,
    validatePlayerChoice,
    determineWinner,
    choices,
    scoreGame
};



// outcome.appendChild(results)



