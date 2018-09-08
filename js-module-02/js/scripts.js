let userInput;
const numbers = [];
let total = 0;


do {
    userInput = prompt('Введите число', '' ); // Просим ввести число

    if (userInput === null) { // Если нажали "Cancel" то тормозим
          break;
         } 
    else if (!isNaN(parseInt(userInput)) ) { // Проверяем на число
         userInput = Number(userInput);  
         numbers.push(userInput);   // Вводим число в конец массива
    }

} while(!Number.isNaN(userInput)); // Продолжаем записывать пока вводятся числа


if (numbers.length) { 
   
    for(let value of numbers) { // Считаем общую сумму массива
        total += value;
    } 
    alert(`Общая сумма равна : ${total}`); // Вводим общую сумму массива
}
else {
  alert("Вы ничего не ввели!"); // Если пользователь ничего не ввел
}

