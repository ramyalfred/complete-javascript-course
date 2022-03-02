'use strict';

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
}

initializeGame();

function rollDice(){
  diceNumber = Math.ceil(Math.random() * 6);
  document.querySelector('.dice').src="dice-"+diceNumber+".png";
  updateCurrentCounter(diceNumber);
}

function switchPlayer(playerOne){
  
}

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

function switchPlayer(){
  if(playerOne){

  }
}

function updateScore(diceRoll){
  if(user1){

  }else{
    
  }
}

document.querySelector('.btn--roll').addEventListener('click', 
  function (){
    rollDice();
  }
)