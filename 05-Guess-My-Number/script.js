'use strict';

// save all html elements in variables
const MIN = 0; // inclusive
const MAX = 21; // exlcusive
const messageField = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const guessField = document.querySelector('.guess');
const numberField = document.querySelector('.number');
const resetBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
let secretNumber = Math.floor(generateRandNumber(MIN, MAX));
let gameFinished = false;
let score = 20;
let highScore = 0;

// add game logic the buttons
checkBtn.addEventListener('click', checkValue);
resetBtn.addEventListener('click', resetGame);

// Generate random number between [min, max[ exculsive of max
function generateRandNumber(min, max) {
  return min + Math.random() * max;
}

// reset the game to the original values be leave the latest highscore
function resetGame() {
  secretNumber = Math.floor(generateRandNumber(MIN, MAX));
  scoreField.textContent = 20;
  messageField.textContent = 'Start guessing...';
  guessField.value = '';
  numberField.textContent = '?';
  gameFinished = false;
  document.body.style.backgroundColor = '#222';
  score = 20;
  numberField.style.width = '15rem';
}

function checkValue() {
  if (!gameFinished) {
    const guess = Number(guessField.value);
    if (!guess) {
      messageField.textContent = 'No Number!';
    } else if (guess === secretNumber) {
      winGame();
    } else {
      compareGuessAndSecret(guess);
    }
  }
}

function setHighScore(currentScore) {
  if (currentScore > highScore) {
    highScoreField.textContent = highScore = currentScore;
  }
}

function winGame() {
  messageField.textContent = 'Correct Guess!';
  setHighScore(score);
  gameFinished = true;
  numberField.textContent = secretNumber;
  document.body.style.backgroundColor = '#60b347';
  numberField.style.width = '30rem';
}

function compareGuessAndSecret(guess) {
  if (score === 0) {
    lostGame();
  } else {
    scoreField.textContent = --score;
    if (guess > secretNumber) {
      messageField.textContent = 'Too High!';
    } else {
      messageField.textContent = 'Too Low!';
    }
  }
}

function lostGame() {
  document.body.style.backgroundColor = 'red';
  messageField.textContent = 'You Lost The Game!';
  gameFinished = true;
}
