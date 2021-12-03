'use strict'
// Написать игровой бот.
//"Загадывание случайного числа от 1 до 100"


function rdm() {
   let randomNum = parseInt(Math.random() * 100); // Загадываем число от одного до ста

   function isNum(num) {
      return !isNaN(parseFloat(num)) && isFinite(num); // проверяем чтобы введённое значение было числом
   };

   function guessNumber() {
      let userNum = prompt('Угадай число от 1 до 100');
      if (isNum(userNum)) {
         userNum = +userNum;

         if (userNum > randomNum) {
            alert('Загаданное число меньше');
         } else if (userNum < randomNum) {
            alert('Загаданное число больше');
         } else if (userNum === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
            return userNum;
         }
      } else if (userNum === null) {
         alert('Игра окончена');
         return;
      } else {
         alert('Введите число!');
      }
      return guessNumber();
   }
   console.log(guessNumber());
}
rdm();