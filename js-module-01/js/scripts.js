const userLogin = prompt('Введите логин:');
let result;
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancel = 'Отменено пользователем!';
const hello = 'Добро пожаловать!';
const stop = 'Доступ запрещен!';

 if (!userLogin) {    // Пользователь нажал "cancel"
    alert(cancel);    // Выводим "Отменено пользователем!"
    result = cancel;  // Заносим результат в переменную для возможного, дальнейшего использования
 }
 else if (userLogin === adminLogin) { // Если пользователь ввел правильный логин
    const userPassword = prompt('Введите пароль:'); // Спрашиваем пароль
        if (!userPassword) {  // Пользователь нажал "cancel"
            alert(cancel);    // Выводим "Отменено пользователем!"
            result = cancel;  
        }
        else if (userPassword === adminPassword) { // Если пользователь ввел правильный пароль
            alert(hello);                          // Выводим 'Добро пожаловать!'
            result = hello;
        } else {                                   // Если пользователь ввел НЕ правильный пароль
            alert(stop);                           // Выводим 'Доступ запрещен!'
            result = stop;
        }
 } 
 else {               // Если пользователь ввел НЕ правильный логин
    alert(stop);      // Выводим 'Доступ запрещен!'
    result = stop;
 }