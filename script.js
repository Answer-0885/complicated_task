// 'use strict';
// 1) Выведите на страницу текущую дату и время в 2 - х форматах:

//  a)'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
// Для вывода в формате(а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
let forDays = document.querySelector('.fordays');
let oClock = document.querySelector('.oclock');
let d = new Date();

function clock1() {
   let hours = d.getHours();
   let mins = d.getMinutes();
   let sec = d.getSeconds();

   let wordForm = function (num, word) {
      cases = [2, 0, 1, 1, 1, 2];
      return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]; // проверка, чтобы подобрать правильное окончание.
   }
   resultHours = hours + wordForm(hours, [' час ', ' часа ', ' часов ']);
   resultMins = mins + wordForm(mins, [' минута ', ' минуты ', ' минут ']);
   resultSec = sec + wordForm(sec, [' секунда ', ' секунды ', ' секунд ']);

   let day = new Array("Воскресенье", "Понедельник", "Вторник",
      "Среда", "Четверг", "Пятница", "Суббота");

   let month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря");

   let time = "Сегодня " + (day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] +
      " " + d.getFullYear() + " г. " + resultHours + resultMins + resultSec)

   oClock.textContent = time;
}
setInterval(clock1, 1000);



//  б)'04.02.2020 - 21:05:33'
// Для вывода в формате(б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры(из 9: 5: 3 1.6 .2019 сделает 09: 05: 03 01.06 .2019)



function clock2() {
   year = d.getFullYear();
   month = d.getMonth();
   day = d.getDate();
   hour = d.getHours();
   minutes = d.getMinutes();
   seconds = d.getSeconds();

   // проверка если цифра до 9 включительно, то прибавляем 0 спереди
   function addZero(num) {
      if (num >= 0 && num <= 9) {
         return '0' + num;
      } else {
         return num;
      }
   }

   switch (month) {
      case 0:
         fMonth = "1";
         break;
      case 1:
         fMonth = "2";
         break;
      case 2:
         fMonth = "3";
         break;
      case 3:
         fMonth = "4";
         break;
      case 4:
         fMonth = "5";
         break;
      case 5:
         fMonth = "6";
         break;
      case 6:
         fMonth = "7";
         break;
      case 7:
         fMonth = "8";
         break;
      case 8:
         fMonth = "9";
         break;
      case 9:
         fMonth = "10";
         break;
      case 10:
         fMonth = "11";
         break;
      case 11:
         fMonth = "12";
         break;
   }


   currentTime = "Текущее время: " + addZero(day) + "." + addZero(fMonth) + "." + addZero(year) + " - " + addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds)

   forDays.textContent = currentTime;

   // Вывод
   console.log(currentTime);
}
setInterval(clock2, 1000);