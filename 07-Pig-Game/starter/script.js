'use strict';

const WINNING_STRING = "You Win! 🎉"

let diceNumber;
let playerOne = true;
let playerOneCounter = 0;
let playerTwoCounter = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

function initializeGame(){
  //Set scores to Zero and update display
  playerOneScore = playerTwoScore = 0;
  document.getElementById('score--0').textContent = playerOneScore;
  document.getElementById('score--1').textContent = playerTwoScore;
  document.querySelector('.btn--hold').style.display = 'block';
    document.querySelector('.btn--roll').style.display = 'block';
}

initializeGame();

function switchPlayer(){
  if(playerOne){
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.getElementById('score--0').textContent = playerOneScore;
    console.log(playerOneScore);
  }else{
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.getElementById('score--1').textContent = playerTwoScore;
    console.log(playerTwoScore);
  }
  playerOne = !playerOne;
  playerOneCounter = playerTwoCounter = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
};

function rollDice(){
  diceNumber = Math.ceil(Math.random() * 6);
  document.querySelector('.dice').src="dice-"+diceNumber+".png";
  updateCurrentCounter(diceNumber);
}

function checkWinningCondition(){
  if(playerOneScore >= 100){
    document.getElementById('score--0').textContent = WINNING_STRING;
    document.querySelector('.btn--hold').style.display = 'none';
    document.querySelector('.btn--roll').style.display = 'none';
  }
}

function hold(){
  if(playerOne){
    playerOneScore = playerOneScore + playerOneCounter;
    playerOneCounter = 0;
  }else{
    playerTwoScore = playerTwoScore + playerTwoCounter;
    playerTwoCounter = 0;
  }
  switchPlayer();
  checkWinningCondition();
}

document.querySelector('.btn--hold').addEventListener('click',hold);

function updateCurrentCounter(diceNumber){
  if(diceNumber == 1){
    switchPlayer();
    return;
  }

  //Updating counter values and visuals
  if(playerOne){
    playerOneCounter = playerOneCounter + diceNumber;
    document.getElementById('current--0').textContent = playerOneCounter;
  }else if(!playerOne){
    playerTwoCounter = playerTwoCounter + diceNumber;
    document.getElementById('current--1').textContent = playerTwoCounter;
  }
}


document.querySelector('.btn--roll').addEventListener('click', 
  function (){
    rollDice();
  }
)

document.querySelector('.btn--new').addEventListener('click',initializeGame);