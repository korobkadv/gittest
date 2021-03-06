const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const lengthError = 'Ошибка! Логин должен быть от 4 до 16 символов';
const existanceError = 'Такой логин уже используется!';
const successMessage = 'Логин успешно добавлен!';

const isLoginValid = login => login.length >= 4 && login.length <=16;
const isLoginUnique = login => allLogins.includes(login);

const addLogin = function(login) {
 
  if (!isLoginValid(login)) { 
    console.log(lengthError);  
    return;
   }
  if (isLoginUnique(login)) {
    console.log(existanceError); 
    return; 
   }
    allLogins.push(login);
    console.log(successMessage);    
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(allLogins);
