let playerRock = document.querySelector("#rock");
let playerPaper = document.querySelector("#paper");
let playerScissors = document.querySelector("#scissors");
let roundResult = document.getElementById("roundResult");
let playerWin = 0;
let computerWin = 0;

playerRock.addEventListener("click", function(){writeToP("playerRock", computerPlay(calcNum()))});
playerRock.addEventListener("mouseover", function(){rockHover();});
playerRock.addEventListener("mouseout", function(){rockOut();});
playerPaper.addEventListener("click", function(){writeToP("playerPaper", computerPlay(calcNum()))});
playerPaper.addEventListener("mouseover", function(){paperHover();});
playerPaper.addEventListener("mouseout", function(){paperOut();});
playerScissors.addEventListener("click", function(){writeToP("playerScissors", computerPlay(calcNum()))});
playerScissors.addEventListener("mouseover", function(){scissorsHover();});
playerScissors.addEventListener("mouseout", function(){scissorsOut();});

function rockHover() {
  playerRock.classList.add("rockhover");
  document.getElementById('rocktext').style.visibility='hidden';
}

function rockOut() {
  playerRock.classList.remove("rockhover");
  document.getElementById('rocktext').style.visibility='visible';
}

function paperHover() {
  playerPaper.classList.add("paperhover");
  document.getElementById('papertext').style.visibility='hidden';
}

function paperOut() {
  playerPaper.classList.remove("paperhover");
  document.getElementById('papertext').style.visibility='visible';
}

function scissorsHover() {
  playerScissors.classList.add("scissorshover");
  document.getElementById('scissorstext').style.visibility='hidden';
}

function scissorsOut() {
  playerScissors.classList.remove("scissorshover");
  document.getElementById('scissorstext').style.visibility='visible';
}

function calcNum() {
  return Math.floor((Math.random()*3) +1);
}

function computerPlay(num) {
  if (num === 1) {
    return "Rock!";
  } else if (num === 2) {
    return "Paper!";
  } else {
    return "Scissors!";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "Rock!") {
    if (playerSelection === "playerRock") {
      return "Oh! It's a tie!";
    } else if (playerSelection === "playerPaper") {
      return "You win! Paper beats Rock!";
    } else {
      return "You lose! Rock beats Scissors!";
    }
  } else if (computerSelection === "Paper!") {
    if (playerSelection === "playerRock") {
      return "You lose! Paper beats Rock!";
    } else if (playerSelection === "playerPaper") {
      return "Oh! It's a tie!";
    } else {
      return "You win! Scissors beats Paper!";
    }
  } else {
    if (playerSelection === "playerRock") {
      return "You win! Rock beats Scissors!";
    } else if (playerSelection === "playerPaper") {
      return "You lose! Scissors beats Paper!";
    } else {
      return "Oh! It's a tie!";
    }
  }
}


/* Taking playRound as its argument in function writeToP,
simulates a round up to full 5 round play on button click */
function game(round) {
  let score;
  if (round.includes("win")) {
    playerWin ++;
  } else if (round.includes("lose")) {
      computerWin ++;
  }
  score = `${round}<br>The score is:<br>Player: ${playerWin}  Computer: ${computerWin}`;

  if (playerWin === 3 || computerWin === 3) {
    let winner;
    (playerWin > computerWin) ? winner = `${score}<br>Congratulations! You have beaten that confounded Computer!` :
        winner = `${score}<br>Blasted! The Confounded Computer has won again! Well, what did you expect? We have entered their era!`;
    playerWin = 0;
    computerWin = 0;
    return winner;
  }
  return score;
}

// the function activated by the three sign buttons
  function writeToP(playerSelection, computerSelection) {
    document.getElementById("roundResult").innerHTML = game(playRound(playerSelection, computerSelection));
  }
