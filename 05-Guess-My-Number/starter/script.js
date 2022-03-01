'use strict';

//CONSTANTS
const GUESS_RANGE = 20;
const STARTING_SCORE = 20;
const NO_INPUT_MESSAGE = '🚨 You haven\'t entered a number';
const CORRECT_GUESS_MESSAGE = '✅ Right guess!';
const HIGH_MESSAGE = '📈 Lower!'
const LOW_MESSAGE = '📉 Higher!'


//Select a random number to be guessed

function initializeGame(){
  const randomNumber = Math.round(Math.random() * GUESS_RANGE);
  const score = STARTING_SCORE;
}



function setMessage(msg){
  document.querySelector('.message').textContent = msg;
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

  //When guess is higher  
  }else if (userGuess > randomNumber){
    setMessage(HIGH_MESSAGE);

  }else if (userGuess < randomNumber){
    setMessage(LOW_MESSAGE);

  }
})

// Resetting the game
document.querySelector('.again').addEventListener('click',
function() {
  
}
)