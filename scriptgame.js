const nameInput1 = document.getElementById('name-input1');
const nameInput2 = document.getElementById('name-input2');
const playerName = document.getElementById('player-name');
const setNameButton = document.getElementById('set-name-button');
const addRemovePlayerButton = document.getElementById('add-remove-player-button');
const nameForm = document.getElementById('name-form');
const scoreBox = document.getElementById('score-box');
const legScoreTracker = document.getElementById('leg-score-tracker');
const legText = document.getElementById('leg-text');
const preGameBox = document.getElementById('pre-game-box');

const scoreInput = document.getElementById('score-input');
const scoreButton1 = document.getElementById('score-button1');
const scoreSetButton = document.getElementById('score-set-button');
const scoreDisplay = document.getElementById('score-display');
const legSetInput = document.getElementById('leg-set-input');

let score1;
let score2;
let name1 = '';
let name2 = '';
let legMax;
let leg1 = 0;
let leg2 = 0;
let twoPlayer = false;
let player1 = true;
let scoreHigh = true;
let startingPlayer = false;
let lastScore;
// const startingScore2 = 301;

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  twoPlayer? startGame(): startSinglePlayer();
})

addRemovePlayerButton.addEventListener('click', () => {
  twoPlayer = !twoPlayer;

  if (twoPlayer) {
  addRemovePlayerButton.innerText = 'One Player';
  legText.classList.remove('not-displayed');
  nameInput2.classList.remove('not-displayed');
  legSetInput.classList.remove('not-displayed');
  } else {
    addRemovePlayerButton.innerText = 'Two Players';
    legText.classList.add('not-displayed');
    nameInput2.classList.add('not-displayed');
    legSetInput.classList.add('not-displayed');
  }
})

scoreButton1.addEventListener('click', () => {
  
  twoPlayer ? playerTurn() : singlePlayer();
})

scoreSetButton.addEventListener('click', () => {
  scoreHigh = !scoreHigh;
  scoreHigh ? scoreSetButton.innerText = '501' 
            : scoreSetButton.innerText = '301';
});

function startSinglePlayer() {
  player1 = true;
  preGameBox.style.display = 'none';
  scoreBox.style.display = 'flex';
  scoreHigh ? score1 = 501 : score1 = 301;
  scoreDisplay.innerText = score1;
  name1 = nameInput1.value || 'Player';
  playerDisplay1();
  nameInput1.value = '';
}

function startGame() {
  // Make pre-game box vanish
  // Make scorebox appear
  // Set player name/s, player starting score make score tracker appear
  player1 = true;
  scoreBox.style.backgroundColor = 'rgb(26, 104, 26)'
  preGameBox.style.display = 'none';
  scoreBox.style.display = 'flex';
  legMax = Number(legSetInput.value) || 1;
  name1 = nameInput1.value || 'Player 1';
  name2 = nameInput2.value || 'Player 2';
  playerName.innerText = name1;
  scoreHigh ? score1 = 501 : score1 = 301;
  scoreHigh ? score2 = 501 : score2 = 301;
  scoreDisplay.innerText = score1;

  legScoreTracker.style.display = 'block';
  legUpdate();

  nameInput1.value = '';
  nameInput2.value = '';
  legSetInput.value = '';
}

function legUpdate() {
  legScoreTracker.innerHTML = `${name1} - ${leg1} / ${leg2} - ${name2}<br>
                               First to ${legMax} leg/s`
}

function exitGame(name) {
  // Upon player winning match, game exits to pre game box
  // Make scorebox disappear and make pre game box appear
  scoreDisplay.innerHTML = `${name.toUpperCase()} HAS WON THE MATCH!`;
  setTimeout(() => {
    preGameBox.style.display = 'flex';
    scoreBox.style.display = 'none';
    legScoreTracker.style.display = 'none';
    leg1 = 0;
    leg2 = 0;
    legUpdate();
    scoreInput.value = '';
  }, '3000');
}

function singlePlayer() {
  player1 = true;
  playerDisplay1();
  
  if (scoreInput.value >= 1 && scoreInput.value < 181) {
    
    const score = Number(scoreInput.value);
    score1 -= score;
    if (score1 < 0 || score1 === 1) {
      score1 += Number(score);
      scoreInput.value = '';
      console.log(score1)
      scoreDisplay.innerText = 'No Score!';
      setTimeout(() => scoreDisplay.innerText = score1, '2000');
      return;
    }

    if (score1 === 0) {
      scoreDisplay.innerText = 'End of Game';
      scoreInput.value = '';
      setTimeout(() => {
        preGameBox.style.display = 'flex';
        scoreBox.style.display = 'none';
      }, '2000')
      return;
    }

    scoreDisplay.innerText = score1;
    scoreInput.value = '';
   
  } else {
    scoreInput.value = '';
    return;

  }
}

function playerTurn() {
  // Score and name represents player 1

  if (scoreInput.value >= 1 && scoreInput.value < 181) {

    lastScore = scoreInput.value;
    player1 = !player1;


      player1 ? score2 -= Number(scoreInput.value) : score1 -= Number(scoreInput.value);
      player1 ? scoreDisplay.innerText = score2 : scoreDisplay.innerText = score1;
      
      if (score1 < 0 || score1 === 1) {
        score1 += Number(lastScore);
        playerDisplay2();
        scoreDisplay.innerText = 'No Score!';
        noScore();
      }
      
      if (score2 < 0 || score2 === 1) {
        score2 += Number(lastScore);
        playerDisplay2();
        scoreDisplay.innerText = 'No Score!'
        noScore();
      }

      if (score1 === 0) {
        leg1++;
        legUpdate();
        console.log(leg1);
        
        if (leg1 === legMax) {
          startingPlayer = false;
          playerDisplay2();
          exitGame(name1);
          return;
        } else {
          winGame(name1);
        }
      }

      if (score2 === 0) {
        leg2++;
        legUpdate();

        if (leg2 === legMax) {
          startingPlayer = false;
          playerDisplay2();
          exitGame(name2);
          return;
        } else {
          winGame(name2);
        }
      }
      
      scoreInput.value = '';

      setTimeout(() => {
  
      console.log(startingPlayer);
      player1 ? scoreDisplay.innerText = score1 : scoreDisplay.innerText = score2;
      player1 ? playerName.innerText = name1 : playerName.innerText = name2;
      player1 ? scoreBox.style.backgroundColor = 'rgb(26, 104, 26)'
              : scoreBox.style.backgroundColor = 'rgb(153, 35, 35)';
      }, '1000');
    } else {
      scoreInput.value = '';
      return
  }
}

function playerDisplay1() {
  player1 ? scoreDisplay.innerText = score1 : scoreDisplay.innerText = score2;
  player1 ? playerName.innerText = name1 : playerName.innerText = name2;
  player1 ? scoreBox.style.backgroundColor = 'rgb(26, 104, 26)'
          : scoreBox.style.backgroundColor = 'rgb(153, 35, 35)';
}

function playerDisplay2() {
  player1 ? scoreDisplay.innerText = score2 : scoreDisplay.innerText = score1;
  player1 ? playerName.innerText = name2 : playerName.innerText = name1;
  player1 ? scoreBox.style.backgroundColor = 'rgb(153, 35, 35)' 
          : scoreBox.style.backgroundColor = 'rgb(26, 104, 26)';
}

function winGame(n) {
  playerDisplay2();
          scoreDisplay.innerText = `${n.toUpperCase()} WINS!`;
          scoreHigh ? score1 = 501 : score1 = 301;
          scoreHigh ? score2 = 501 : score2 = 301;
          setTimeout(() => {
            startingPlayer = !startingPlayer;
            startingPlayer ? player1 = false : player1 = true;

            if (startingPlayer) {
              scoreDisplay.innerText = score2;
              playerName.innerText = name2;
              scoreBox.style.backgroundColor = 'rgb(153, 35, 35)';
            } else {
              scoreDisplay.innerText = score1;
              playerName.innerText = name1;
              scoreBox.style.backgroundColor = 'rgb(26, 104, 26)';
            }
            return;
          }, '2000');
}

function noScore() {

  setTimeout(() => {
  playerDisplay1();
  scoreInput.value = '';
}, '2000');
};
