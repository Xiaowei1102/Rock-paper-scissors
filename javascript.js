//the basice randomness comes from random function(0,1)
//convert that into (0, 3) would do it by times 3; that's it and then round it up

function getComputerChoice() {
    let arr = ['Rock', 'Paper','Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSlection) {
    if (playerSelection.toUpperCase() === 'ROCK' ) {
        if (computerSlection === 'Scissors') {
            return 'You win! Rock beats Scissors';
        } else if (computerSlection === 'Paper') {
            return 'You lose! Paper beats Rock';
        }
        
    } else if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSlection === 'Paper') {
            return 'You win! Scissors beats Paper';
        } else if (computerSlection === 'Rock') {
            return 'You lose! ROck beats Scissors';
        }

    } else if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSlection === 'Rock') {
            return 'You win! Paper beats Rock';
        } else if (computerSlection === 'Scissors') {
            return 'You lose! Scissors beats Paper';
        }

    } 
    return 'No winner'
}

/*
const playerSelection = 'rock';
const computerSlection= getComputerChoice();
console.log(computerSlection);
console.log(playRound(playerSelection,computerSlection));
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice');
        const computerSlection = getComputerChoice();
        let result = playRound(playerSelection,computerSlection);
        console.log(result);
        if (result.slice(4,5) === 'w') {
            playerScore++;
        } else if (result.slice(4,5) === 'l') {
            computerScore++;
        }

    }
    if (playerScore > computerScore) {
        return 'Player won!'
    } else if (playerScore < computerScore) {
        return 'Player lose!'
    } else {
        return 'Tie game!'
    }

}

console.log(game());