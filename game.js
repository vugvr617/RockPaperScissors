const rockbut = document.querySelector('#rock-but');
const paperbut = document.querySelector('#paper-but');
const scissorsbut = document.querySelector('#scissors-but');
const whoWin = document.querySelector('#whoWin');
const yourScore = document.querySelector('#yourScore');
const tieScore = document.querySelector('#tieScore');
const botScore = document.querySelector('#botScore');
const name = document.querySelector('#name');
const historybut = document.querySelector('#history-but');
const historyText = document.querySelector('#historyText');
const resetBut = document.querySelector('#reset-but');
const rockicon = document.querySelector('#rock-icon');
const papericon = document.querySelector('#paper-icon');
const scissorsicon = document.querySelector('#scissors-icon');
const rockicon2 = document.querySelector('#rock-icon2');
const papericon2 = document.querySelector('#paper-icon2');
const scissorsicon2 = document.querySelector('#scissors-icon2');

function computerPlay() {
    rand = Math.floor(Math.random() * 9);
    if (rand <= 2) {
        return "rock";
    } else if (2 < rand && rand <= 5) {
        return "paper";
    } else if (5 < rand) {
        return "scissors";
    }
}

let winnerText = " ";
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose rock!" +
                "\nDraw! You could not beat your opponent.");
            return 2;
        } else if (computerSelection === "paper") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose paper!" +
                "\nLose! Paper beats Rock.");
            return 0;
        } else if (computerSelection === "scissors") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose scissors!" +
                "\nWin! Rock beats Scissors.");
            return 1;
        }
    }

    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose rock!" +
                "\nLose! Rock beats scissors.");
            return 0;
        } else if (computerSelection === "paper") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose paper!" +
                "\nWin! Scissors beats Paper.");
            return 1;
        } else if (computerSelection === "scissors") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose scissors!" +
                "\nDraw! You could not beat your opponent");
            return 2;
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose rock!" +
                "\nWin! Paper beats Rock.");
            return 1;
        } else if (computerSelection === "paper") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose paper!" +
                "\nDraw! You could not beat your opponent.");
            return 2;
        } else if (computerSelection === "scissors") {
            winnerText = winnerText.replace(winnerText, "Your opponent chose scissors." +
                "\nLose! Scissors beats Paper.");
            return 0;
        }
    }
}

let playerSelection;
let computerSelection;
let num;

resetBut.addEventListener('click', function () {
    yourScore.innerText = '0';
    botScore.innerText = '0';
    whoWin.innerText = '';
    historyText.innerHTML = '';
    lastText = "";
    rockicon2.style.display = 'none';
    papericon2.style.display = 'none';
    scissorsicon2.style.display = 'none';
    rockicon.style.display = 'none';
    papericon.style.display = 'none';
    scissorsicon.style.display = 'none';
    playerWin = 0;
    computerWin = 0;
})

rockbut.addEventListener('click', function () {
    if (playerWin !== 3 && computerWin !== 3) {
        playerSelection = 'rock';
        computerSelection = computerPlay();
        num = playRound(playerSelection, computerSelection);
        winnerHistory();
        yourScore.textContent = playerWin;
        botScore.textContent = computerWin;
        whoWin.innerText = winnerText;
        rockicon.style.display = 'block';
        papericon.style.display = 'none';
        scissorsicon.style.display = 'none';
        if (computerSelection === 'rock') {
            rockicon2.style.display = 'block';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'paper') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'block';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'scissors') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'block';
        }
    }
})

paperbut.addEventListener('click', function () {
    if (playerWin !== 3 && computerWin !== 3) {
        playerSelection = 'paper';
        computerSelection = computerPlay();
        num = playRound(playerSelection, computerSelection);
        winnerHistory();
        yourScore.textContent = playerWin;
        botScore.textContent = computerWin;
        whoWin.innerText = winnerText;
        rockicon.style.display = 'none';
        papericon.style.display = 'block';
        scissorsicon.style.display = 'none';
        if (computerSelection === 'rock') {
            rockicon2.style.display = 'block';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'paper') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'block';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'scissors') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'block';
        }
    }
})

scissorsbut.addEventListener('click', function () {
    if (playerWin !== 3 && computerWin !== 3) {
        playerSelection = 'scissors';
        computerSelection = computerPlay();
        num = playRound(playerSelection, computerSelection);
        winnerHistory();
        yourScore.textContent = playerWin;
        botScore.textContent = computerWin;
        whoWin.innerText = winnerText;
        rockicon.style.display = 'none';
        papericon.style.display = 'none';
        scissorsicon.style.display = 'block';
        if (computerSelection === 'rock') {
            rockicon2.style.display = 'block';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'paper') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'block';
            scissorsicon2.style.display = 'none';
        } else if (computerSelection === 'scissors') {
            rockicon2.style.display = 'none';
            papericon2.style.display = 'none';
            scissorsicon2.style.display = 'block';
        }
    }
})

let isActive = false;
historybut.addEventListener('click', function () {
    if (isActive === false) {
        historyText.innerText = lastText;
        isActive = true;
    } else if (isActive === true) {
        historyText.textContent = "";
        isActive = false;
    }
})


let playerWin = 0;
let computerWin = 0;
let tieCounter = 0;
let historyArr = [];
let lastText = "";

function winnerHistory() {
    lastText = "";
    if (num == 1) {
        playerWin++;
        historyArr.push(1);
    } else if (num == 0) {
        computerWin++;
        historyArr.push(0);
    } else if (num == 2) {
        historyArr.push(2);
        tieCounter++;
    }

    if (playerWin === 3) {
        lastText += `\nYou won the game in ${(historyArr.length)} rounds. Here are the results: `
    } else if (computerWin === 3) {
        lastText += `\nYou lost the game in ${(historyArr.length)} rounds. Here are the results:`
    }

    for (let i = 0; i < historyArr.length; i++) {
        if (historyArr[i] === 1) {
            lastText += (`\nROUND ${i + 1}: YOU WON THE ROUND`);
        } else if (historyArr[i] === 0) {
            lastText += (`\nROUND ${i + 1}: YOUR OPPONENT WON THE ROUND`);
        } else if (historyArr[i] === 2) {
            lastText += (`\nROUND ${i + 1}: DRAW`)
        }
    }
}