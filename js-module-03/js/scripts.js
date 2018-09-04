const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let userLogin = prompt('Введите логин:');

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) { 
        return true;
     } 
     else { 
        return false;
     }
};

const isLoginUnique = function(allLogins, login) {
    const isLogin = allLogins.includes(login);
    return isLogin;
};

const addLogin = function(login) {
  if (!isLoginValid(logins, login)) { 
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');  
    break; 
    }
  else if (isLoginUnique(logins, login)) { 
    logins.push(login);
    console.log('Логин успешно добавлен!');    
    }
  else if (!isLoginUnique(logins, login)) {
    console.log('Такой логин уже используется!');  
    break; 
    }
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'