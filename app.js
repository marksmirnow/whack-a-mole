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

      console.log('THIS HOLE AGAIN!!!!!!!!');
      return getRandomHole(holes);
   }

   lastHole = randomHole;
   // randomHole.style.background = 'blue';
   return randomHole;
}

console.log(getRandomHole(holes));


function appear() {
   const time = getRandomTime(300, 700);
   const hole = getRandomHole(holes);
   console.log(isTimeUp);

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

startButton.addEventListener('click', startGame);

function hitMole(e) {

   const mole = e.target.closest('.mole');

   if (mole) {
      console.log(e.target.parentNode);
      augh.currentTime = 0;
      augh.play();
      score++;
      scoreBoard.textContent = score;
      e.target.parentNode.classList.remove('active');
   }
}

gameField.addEventListener('click', hitMole);