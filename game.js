function getComputerChoice() {
    var randomChoice = Math.random();
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
    var pc = playerChoice.substr(0, 1).toUpperCase() + playerChoice.substr(1).toLowerCase();
    var cc = computerChoice;
    
    if ((cc === 'Rock' && pc == 'Paper')
        || (cc === 'Paper' && pc == 'Scissors')
        || (cc === 'Scissors' && pc == 'Rock')) {
            return `${pc} beats ${cc}! You win!`
    }
    else if ((pc === 'Rock' && cc == 'Paper')
        || (pc === 'Paper' && cc == 'Scissors')
        || (pc === 'Scissors' && cc == 'Rock')) {
            return `${cc} beats ${pc}! You lose :(`
    }
    else if (cc === pc) {
        return `Draw.`
    }
    else {
        return `${playerChoice} is not a valid throw. Please choose Rock, Paper or Scissors.`
    }
}