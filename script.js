let num = 266219;

let multi = num.toString().split(''); // переводим переменную типа number в массив

console.log(multi);

let result = multi.reduce((acc, rec) => acc * rec); // Получаем произведение всех индексов массива

console.log(result);

console.log(String(result ** 3).slice(0, 2)); //полученное значение возводим в третью степень и выводим только первые две цифры