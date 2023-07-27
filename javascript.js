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
            return 'You lose! Rock beats Scissors';
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

/*
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
*/
//below is step number 2 on revisiting rock paper scissors
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        let computerSlection = getComputerChoice();
        //console.log(computerSlection);
        if (playerScore < 5 && computerScore < 5) {
            let result = playRound(playerSelection,computerSlection);

            if (result.slice(4,5) === 'w') {
                playerScore++;
            } else if (result.slice(4,5) === 'l') {
                computerScore++;
            }
            //display the score:
            const div = document.createElement('div');
            div.textContent = `Player choice is ${playerSelection} and Computer choise is ${computerSlection}. The socre is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.appendChild(div);
        }
        //announce winner
        const div = document.createElement('div');
        if (playerScore === 5) {
            div.textContent = 'You win!'
        }
        if (computerScore === 5) {
            div.textContent = 'Computer win!'
        }
        //console.log(res);
        
        
        document.body.appendChild(div);
    })
});


//console.log();