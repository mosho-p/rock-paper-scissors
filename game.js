function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return 'Rock';
    }
    else if (randomChoice < 2/3) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerChoice, computerChoice) {
    let pc = playerChoice.substr(0, 1).toUpperCase() + playerChoice.substr(1).toLowerCase();
    let cc = computerChoice;
    
    if ((cc === 'Rock' && pc == 'Paper')
        || (cc === 'Paper' && pc == 'Scissors')
        || (cc === 'Scissors' && pc == 'Rock')) {
            return `computer`
    }
    else if ((pc === 'Rock' && cc == 'Paper')
        || (pc === 'Paper' && cc == 'Scissors')
        || (pc === 'Scissors' && cc == 'Rock')) {
            return `player`
    }
    else if (cc === pc) {
        return `tie`
    }
    else {
        return `error`
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (var i=0; i<5; i++) {
        let playerChoice = prompt('Rock, Paper or Scissors?')
        winner = playRound(playerChoice, getComputerChoice())
        if (winner === 'player') {
            playerScore++;
        }
        else if (winner === 'computer') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return `You win ${playerScore} to ${computerScore}!`
    }
    else if (computerScore > playerScore) {
        return `You lose ${playerScore} to ${computerScore} :(`
    }
    else {
        return `Tie game.`
    }
}