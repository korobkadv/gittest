let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number( prompt('Введите число', '') );
      if (!userInput) { break; }
      numbers.push(userInput);
  
} while(!isNaN(userInput));

if (numbers.length !== 0) {
   
    for(const value of numbers) {
        total += value;
    } 
    alert(`Общая сумма равна : ${total}`); 
}
else {
  alert("Нужно ввести числа!");
}

