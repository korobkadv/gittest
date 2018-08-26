let userLogin = prompt('Введите логин:');
let userPassword;
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

 if (!userLogin) {
     alert("Отменено пользователем!");
 }
 else if (userLogin === adminLogin) {
    userPassword = prompt('Введите пароль:');
        if (!userPassword) {
            alert("Отменено пользователем!"); 
        }
        else if (userPassword === adminPassword) {
            alert("Добро пожаловать!");
        } else {
            alert("Доступ запрещен!");
        }
 } 
 else {
    alert("Доступ запрещен!");
 }
