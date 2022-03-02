'use strict';

//CONSTANTS
const GUESS_RANGE = 20;
const STARTING_SCORE = 20;
const NO_INPUT_MESSAGE = '🚨 You haven\'t entered a number';
const CORRECT_GUESS_MESSAGE = '✅ Right guess!';
const HIGH_MESSAGE = '📈 Lower!';
const LOW_MESSAGE = '📉 Higher!';
const INITIAL_MESSAGE = 'Start guessing...';

//Global Variables
let randomNumber;
let score;
let highScore = 0;

//Select a random number to be guessed
function initializeGame(){
  randomNumber = Math.round(Math.random() * GUESS_RANGE);
  score = STARTING_SCORE;
  document.querySelector('.score').textContent = STARTING_SCORE;
  document.querySelector('body').style.backgroundColor = null;
  document.querySelector('body').style.width = null;
  setMessage(INITIAL_MESSAGE);
  document.querySelector('.number').textContent = '?';
};

initializeGame();

function setMessage(msg){
  document.querySelector('.message').textContent = msg;
}

function decrementScore(){
  score --;
  document.querySelector('.score').textContent = score;
}

//Checking  a guess
document.querySelector('.check').addEventListener('click',      function() {
  const userGuess = document.querySelector('.guess').value;
  console.log(userGuess);

  //When there is no input
  if(userGuess == ''){
    setMessage(NO_INPUT_MESSAGE);

  //When guess matches random number
  }else if (userGuess == randomNumber){
    document.querySelector('.number').textContent = randomNumber;

    setMessage(CORRECT_GUESS_MESSAGE);
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = score > highScore? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

  //When guess is higher  
  }else if (userGuess > randomNumber){
    setMessage(HIGH_MESSAGE);
    decrementScore();
  //When guess is lower
  }else if (userGuess < randomNumber){
    setMessage(LOW_MESSAGE);
    decrementScore();
  }
})

// Resetting the game
document.querySelector('.again').addEventListener('click',
function() {
  initializeGame();
}
)