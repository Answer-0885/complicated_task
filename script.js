'use strict'
// Написать игровой бот.
//"Загадывание случайного числа от 1 до 100"

let lives;

function rdm() {
   let randomNum = parseInt(Math.random() * 100); // Загадываем число от одного до ста
   lives = 9;


   function isNum(num) {
      return !isNaN(parseFloat(num)) && isFinite(num); // проверяем чтобы введённое значение было числом
   };


   function guessNumber() {
      let userNum = prompt('Угадай число от 1 до 100');
      if (isNum(userNum)) {
         userNum = +userNum;

         if (userNum > randomNum) {
            alert('Загаданное число меньше, осталось попыток ' + lives);
         } else if (userNum < randomNum) {
            alert('Загаданное число больше, осталось попыток ' + lives);
         } else if (userNum === randomNum) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') === true) {
               rdm()
            } else {
               alert('Спасибо за игру, дружок!)')
               return userNum;
            }
         }
      } else if (userNum === null) {
         alert('Игра окончена');
         return;
      } else {
         alert('Введите число!');
      }
      if (lives > 0) {
         lives--;
      } else {
         if (confirm('Попытки закончились, хотите сыграть еще?') === true) {
            rdm();
         } else {
            alert('Спасибо за игру, дружок!)')
            return userNum;
         }
      }
      return guessNumber();
   }
   console.log(guessNumber());

}
rdm();