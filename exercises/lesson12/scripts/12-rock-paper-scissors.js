let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
  });


document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay(); 
  } else if (event.key === 'Backspace') {
    showResetConfirmation();
  }
});  
 
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else if (result === 'Tie.') {
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
      .innerHTML = `${result}`;

    document.querySelector('.js-moves')
      .innerHTML = `
      You
      <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img class="move-icon" src="images/${computerMove}-emoji.png">
      Computer `
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {

//};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoPlayBtn.innerHTML = 
      `Stop Playing`;
    isAutoPlaying = true;
    
  } else {
    clearInterval(intervalId);
    autoPlayBtn.innerHTML = 
    `Auto Play`;
    isAutoPlaying = false;
  }
}

const autoPlayBtn = document.querySelector('.js-auto-play-btn');
autoPlayBtn.addEventListener('click', () => {
  autoPlay()
});




const resetScore = document.querySelector('.js-reset-score-btn');
resetScore.addEventListener('click', () => {
  showResetConfirmation();
});

function resetScores() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}



function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
  .innerHTML = `
  Are you sure you want to reset the score?
  <button class="js-yes" >Yes</button>
  <button class="js-no">No</button>
  `;
  const yesBtn = document.querySelector('.js-yes');
  const noBtn = document.querySelector('.js-no');
  yesBtn.addEventListener('click', () => {
    resetScores();
    hideResetConfirmation();
  });
  noBtn.addEventListener('click', () => {
    hideResetConfirmation();
  });
}

function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}



