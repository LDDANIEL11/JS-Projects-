'use strict';

let score = 20;
let highscore = document.querySelector('.highscore').textContent;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
displayMessage('Start Guessing...');

const reset = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};

//Check Button

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //if no number was entered and button was clicked :
  if (!guessedNumber) {
    displayMessage('💤No Number Entered ...');
  }
  //if the number is entered ...
  else if (guessedNumber) {
    //right number :
    if (guessedNumber === secretNumber) {
      displayMessage('🎉Currect Guess!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      //highscore condition if the right number is entered
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //if the wrong number is entered
    if (guessedNumber !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guessedNumber > secretNumber ? '🔺Too High!' : '🔻Too Low!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      }
      //if the player hit all scores in wrong numbers
      else {
        displayMessage('💔You Lose ...');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

//Again Button
document.querySelector('.again').addEventListener('click', reset);
