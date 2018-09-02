let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number( prompt('Введите число', '') ); // Просим ввести число
      if (!userInput) { break; } // Если нажали "Cancel" то тормозим
      numbers.push(userInput);   // Вводим число в конец массива
  
} while(!isNaN(userInput)); // Продолжаем цикл пока не нажмется "Cancel"

if (numbers.length !== 0) { 
   
    for(const value of numbers) { // Считаем общую сумму массива
        total += value;
    } 
    alert(`Общая сумма равна : ${total}`); // Вводим общую сумму массива
}
else {
  alert("Нужно ввести числа!"); // Если пользователь вводит НЕ числа
}

