let userInput;
const numbers = [];
let total = 0;


do {
    userInput = Number( prompt('Введите число', '') ); // Просим ввести число
      if (!userInput) { // Если нажали "Cancel" то тормозим
          break;
         } 
      numbers.push(userInput);   // Вводим число в конец массива
  
} while(!isNaN(userInput)); // Продолжаем записывать пока вводятся числа

if (numbers.length) { 
   
    for(let value of numbers) { // Считаем общую сумму массива
        total += value;
    } 
    alert(`Общая сумма равна : ${total}`); // Вводим общую сумму массива
}
else {
  alert("Вы ничего не ввели!"); // Если пользователь ничего не ввел
}

