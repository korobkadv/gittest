const userLogin = prompt('Введите логин:');
let result;
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancel = 'Отменено пользователем!';
const hello = 'Добро пожаловать!';
const stop = 'Доступ запрещен!';

 if (!userLogin) {
    alert(cancel);
    result = cancel;
 }
 else if (userLogin === adminLogin) {
    const userPassword = prompt('Введите пароль:');
        if (!userPassword) {
            alert(cancel); 
            result = cancel; 
        }
        else if (userPassword === adminPassword) {
            alert(hello);
            result = hello;
        } else {
            alert(stop);
            result = stop;
        }
 } 
 else {
    alert(stop);
    result = stop;
 }
