const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const error = 'Ошибка! Логин должен быть от 4 до 16 символов';
const errorTwo = 'Такой логин уже используется!';
const proffit = 'Логин успешно добавлен!';

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) { 
      return "true";
    }  
    else {  
      return "false"; 
    }
};

const isLoginUnique = function(login) {
    if (allLogins.includes(login)) { 
      return "true"; 
    } 
    else { 
      return "false"; 
    }
};

const addLogin = function(login) {
 
  if (isLoginValid(login) === "false" ) { 
    console.log(error);  
   }
  else if (isLoginUnique(login) === "true" ) {
    console.log(errorTwo);  
   }
  else if (isLoginUnique(login) === "false" && isLoginValid(login) === "true" ) { 
     allLogins.push(login);
     console.log(proffit);    
     }

};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(allLogins);