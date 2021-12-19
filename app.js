// * Get elements
const startButton = document.querySelector('.button-start-game');
const gameField = document.querySelector('.game-field');
const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');


function getRandomTime(min, max) {
   return Math.floor((Math.random() * (max - min + 1) + min));
}


function getRandomHole(holes) {
   const randomIndex = Math.floor(Math.random() * (holes.length));
   const randomHole = holes[randomIndex];
   randomHole.style.background = 'blue';
   return randomHole;
}

console.log(getRandomHole(holes));


function appear() {
   const time = getRandomTime(800, 1100);
   const hole = getRandomHole(holes);

   hole.classList.add('active');
   setTimeout(() => {
      hole.classList.remove('active');
   }, time);
   setTimeout(appear, time);
}

startButton.addEventListener('click', appear);