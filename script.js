'use strict'

let paragraph = document.querySelector('.paragraph');
let debouncedOnInput = debounce(onInput);

function debounce(callback) {
   let timeout;
   return function (argument) {
      clearTimeout(timeout);
      timeout = setTimeout(callback, 300, argument);
   };
}

function onInput(event) {
   paragraph.textContent = event.target.value;
}

document.querySelector('.input').addEventListener('keyup', debouncedOnInput);