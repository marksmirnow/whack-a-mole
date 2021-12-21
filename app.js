// * Get elements
const startButton = document.querySelector('.button-start-game');
const gameField = document.querySelector('.game-field');
const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score span');
const augh = document.querySelector('.augh');

let lastHole;
let isTimeUp = false;
let score = 0;


function getRandomTime(min, max) {
   return Math.floor((Math.random() * (max - min + 1) + min));
}


function getRandomHole(holes) {
   const randomIndex = Math.floor(Math.random() * (holes.length));
   const randomHole = holes[randomIndex];

   if (randomHole === lastHole) {
      return getRandomHole(holes);
   }

   lastHole = randomHole;
   return randomHole;
}


function appear() {
   const time = getRandomTime(300, 700);
   const hole = getRandomHole(holes);

   hole.classList.add('active');
   setTimeout(() => {
      hole.classList.remove('active');
      if (!isTimeUp) appear();
   }, time);
}


function startGame() {
   isTimeUp = false;
   score = 0;
   scoreBoard.textContent = score;
   appear();
   // * After 10 sec game stops
   setTimeout(() => isTimeUp = true, 10000);
}


function hitMole(e) {

   const mole = e.target.closest('.mole');

   if (mole) {
      augh.currentTime = 0;
      augh.play();
      score++;
      scoreBoard.textContent = score;
      e.target.parentNode.classList.remove('active');
   }
}


startButton.addEventListener('click', startGame);
gameField.addEventListener('click', hitMole);