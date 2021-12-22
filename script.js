'use strict'

const anime = document.querySelector('.animation');
const startPause = document.querySelector('.start-pause');
const reset = document.querySelector('.reset');


let count = 0;
let active = false;
let idInterval;

const flyAnimate = () => {
   count++;
   idInterval = requestAnimationFrame(flyAnimate);

   if (count < 800) {
      anime.style.left = count + 'px';
      anime.style.top = count + 'px';

      console.log(anime.style.left);

   } else {
      cancelAnimationFrame(idInterval);
   }
}

startPause.addEventListener('click', () => {
   if (active) {
      cancelAnimationFrame(idInterval);
      active = false;
   } else {
      idInterval = requestAnimationFrame(flyAnimate);
      active = true;
   }
});
reset.addEventListener('click', () => {
   anime.style.left = 0;
   anime.style.top = 0;
   active = true;
   count = 0;
});