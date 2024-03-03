console.log('Welcome to the Rock Paper Scissors Game!');
console.log('Type playGame() to begin!');

let playerScore = 0;
let computerScore = 0;

function playGame() {
    let playerChoice;
    let computerChoice

    for (let index = 0; index < 5; index++) {
        playerChoice = capitalize(prompt('Enter your choice:'));
        computerChoice = getComputerChoice()
    
        console.log(playRound(playerChoice, computerChoice))

        console.log(`Score: Player ${playerScore} vs ${computerScore} Computer`)
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let capitalize = (str) => {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

let playRound = function(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'Draw!'
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerScore++
        return `You Won! ${playerChoice} beats ${computerChoice}`
    } else {
        computerScore++
        return `You Lost! ${computerChoice} beats ${playerChoice}`
    }
}