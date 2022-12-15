'use strict';
// Generate random number between [min, max[ exculsive of max
function generateRandNumber(min, max) {
  return min + Math.random() * (max - min);
}

// Objects that contain the data and data fields of each player
const player1 = {
  playerField: document.querySelector('.player--0'),
  currentField: document.querySelector('#current--0'),
  scoreField: document.querySelector('#score--0'),
  score: 0,
  current: 0,
};

const player2 = {
  playerField: document.querySelector('.player--1'),
  currentField: document.querySelector('#current--1'),
  scoreField: document.querySelector('#score--1'),
  score: 0,
  current: 0,
};

// HTML in variables
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');

// referece to the current object
let currentPlayer = player1;
let diceValue = 0;
let gameFinieshed = false;

// Resets the player's value to 0
// remove any classes and set player1 as active player
// hides the dice
function resetGame() {
  resetPlayer(player1);
  resetPlayer(player2);
  currentPlayer.playerField.classList.remove('player--winner');
  player1.playerField.classList.add('player--active');
  player2.playerField.classList.remove('player--active');
  currentPlayer = player1;
  diceImg.classList.add('hidden');
  gameFinieshed = false;
}

// set both current and score field in the player object by a new value
function setScore(player, newValue, field) {
  player[field] = newValue;
  player[`${field}Field`].textContent = player[field];
}

function resetPlayer(player) {
  setScore(player, 0, 'current');
  setScore(player, 0, 'score');
}

// switch between each player
function toggleActivePlayer() {
  currentPlayer.playerField.classList.remove('player--active');
  // check if the player1 is active then set player2 as active otherwise select player1
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  currentPlayer.playerField.classList.add('player--active');
}

// Rolling the dice logic
function rollDice() {
  if (!gameFinieshed) {
    // generate a number between 1 and 6
    diceValue = Math.floor(generateRandNumber(1, 7));
    // set the corrent image and display the dice
    diceImg.src = `dice-${diceValue}.png`;
    diceImg.classList.remove('hidden');
    // if dice rolls 1 switch player otherwise increase current score
    if (diceValue === 1) {
      setScore(currentPlayer, 0, 'current');
      toggleActivePlayer();
    } else {
      setScore(currentPlayer, currentPlayer.current + diceValue, 'current');
    }
  }
}

function holdScore() {
  // update the total score with the current score
  setScore(currentPlayer, currentPlayer.score + currentPlayer.current, 'score');
  setScore(currentPlayer, 0, 'current');
  // checks if the current player wins otherwise switch player
  if (currentPlayer.score >= 100) {
    currentPlayer.playerField.classList.add('player--winner');
    gameFinieshed = true;
    diceImg.classList.add('hidden');
  } else {
    toggleActivePlayer();
  }
}

// add each function the buttons
rollDiceBtn.addEventListener('click', rollDice);
newGameBtn.addEventListener('click', resetGame);
holdBtn.addEventListener('click', holdScore);

// start the game on load
resetGame();
