let hour = ['час', 'часа', 'часов'],
   minut = ['минута', 'минуты', 'минут'],
   second = ['секунда', 'секунды', 'секунд'];


function zero_first_format(value) {
   if (value < 10) {
      value = '0' + value;
   }
   return value;
}


function num_word(value, words) {
   value = Math.abs(value) % 100;
   var num = value % 10;
   if (value > 10 && value < 20) return words[2];
   if (num > 1 && num < 5) return words[1];
   if (num == 1) return words[0];
   return words[2];
}

// 1 функция получения текущей даты и времени 
function date_time() {
   let current_datetime = new Date(),
      day = zero_first_format(current_datetime.getDate()),
      month = zero_first_format(current_datetime.getMonth() + 1),
      year = current_datetime.getFullYear(),
      hours = zero_first_format(current_datetime.getHours()),
      minutes = zero_first_format(current_datetime.getMinutes()),
      seconds = zero_first_format(current_datetime.getSeconds());
   return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}


// 2 функция получения текущей даты и времени

function date_time1() {
   let current_datetime = new Date(),
      day = zero_first_format(current_datetime.getDate()),
      month = zero_first_format(current_datetime.getMonth() + 1),
      year = current_datetime.getFullYear(),
      hours = zero_first_format(current_datetime.getHours()),
      minutes = zero_first_format(current_datetime.getMinutes()),
      seconds = zero_first_format(current_datetime.getSeconds());
   return 'Сегодня Вторник, ' + day + ' февраля ' + year + ' года, ' + ' ' + hours + num_word(hours, hour) + ' ' + minutes + ' ' + num_word(minutes, minut) + ' ' + seconds + ' ' + num_word(seconds, second);
}





setInterval(function () {

   document.getElementById('current_date_time_block1').innerHTML = date_time1();
}, 1000);
setInterval(function () {
   document.getElementById('current_date_time_block2').innerHTML = date_time();

}, 1000);