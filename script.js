let playerScore = 0;
let computerScore = 0;

let playground = document.querySelector('.playground');

playground.addEventListener('click', (event) => {
    let target = event.target;
    let playerChoice;
    let computerChoice = getComputerChoice();

    if (target.id === '') return;

    playerChoice = capitalize(target.id);

    updateResults(playerChoice, computerChoice);
});

function updateResults(playerChoice, computerChoice) {
    let response = document.querySelector('#response');
    let score = document.querySelector('#score');
    response.textContent = playRound(playerChoice, computerChoice);
    score.textContent = `Score: Player ${playerScore} vs ${computerScore} Computer`;
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

let playRound = function (playerChoice, computerChoice) {
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