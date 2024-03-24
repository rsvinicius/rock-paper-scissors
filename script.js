let playerScore = 0;
let computerScore = 0;

const playground = document.querySelector('.playground');
const results = document.querySelector('#results');

playground.addEventListener('click', (event) => {
    let target = event.target;
    let playerChoice;
    let computerChoice = getComputerChoice();

    if (target.id === '') return;

    playerChoice = capitalize(target.id);

    updateResults(
        playRound(playerChoice, computerChoice),
        `Score: Player ${playerScore} vs ${computerScore} Computer`
    );

    const winner = getWinner();
    if (winner) {
        announceWinner(winner);
    }
});

function getWinner() {
    if (playerScore === 5) {
        return 'Player';
    } else if (computerScore === 5) {
        return 'Computer';
    }
    return null;
}

function announceWinner(winner) {
    updateResults(`${winner} wins!`,'');

    playerScore = 0;
    computerScore = 0;
}

function updateResults(response, score) {
    let resultResponse = document.querySelector('#response');
    let resultScore = document.querySelector('#score');
    resultResponse.textContent = response;
    resultScore.textContent = score;
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