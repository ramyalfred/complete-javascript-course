'use strict';

const modalHideButton = document.querySelector('.close-modal');
const modalObject = document.querySelector('.modal');

//Show Modal
function showModal(){
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
}

//Hide Modal
function hideModal(){
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
}

//Having buttons trigger modal visibility functions
const modalShowButtonsList = document.querySelectorAll('.show-modal');

modalShowButtonsList.forEach(
  function(node){
    console.log(node.textContent);
    node.addEventListener('click',showModal);
  }
);

//Implementing the Modal close button
modalHideButton.addEventListener('click',
  function(){
    hideModal();
  }
);

document.querySelector('.overlay').addEventListener('click', 
  function(){
    hideModal();
  }
)