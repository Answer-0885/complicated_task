// Переменная lang может принимать 2 значения: 'ru' и 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни 
// недели на русском или английском языке.


const lang = 'ru'; // Или 'en'

arrRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Решить задачу через if
if (lang === 'ru') {
   console.log(arrRu);
} else if (lang === 'en') {
   console.log(arrEn);
} else {
   console.log('Непредвиденное значение!');
};

//Решить задачу через switch-case
switch (lang) {
   case 'ru':
      console.log(arrRu);
      break;
   case 'en':
      console.log(arrEn);
      break;
   default:
      console.log('Непредвиденное значение!');
};

// Решите задачу через многомерный массив без ифов и switch.
const getDayName = (number, lang) => ({
   en: arrEn,
   ru: arrRu,
})[lang][number % 7];

console.log(getDayName(4, 'en')) // Thursday
console.log(getDayName(2, 'ru')) // Вторник;
// Или другой способ
const lang_array = [];
lang_array['ru'] = arrRu;
lang_array['en'] = arrEn;
console.log(lang_array[lang]);

// Второе задание - У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
const namePerson = 'Вася'
namePerson === 'Артём' ? console.log('Директор') : namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент')