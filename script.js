const argument = prompt('Введите строчное значение')

const value = function (argument) {
   if (argument !== 'string') {
      alert('Необходимо ввести строчное значение')
   } else if (argument == "string") {
      argument.trim()
   } else if (argument.length > 30) {
      argument.substring(0, 29) + '...';
   }
};
value();