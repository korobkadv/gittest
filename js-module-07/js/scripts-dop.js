const sharm = 15;
const hurgada = 25;
const taba = 6;

let go;
let isComing;
let result;

const userNumberIn = prompt('Сколько мест необходимо?');
let userNumber = Number(userNumberIn);

 if (userNumber == "0") {
     alert("Очень жаль, приходите еще!");
     result = "Очень жаль, приходите еще!";
 }
 else if (!Number.isNaN(userNumber)){

   let max = Math.max(sharm, hurgada, taba);
  
  if (userNumber <= max) {
     
   if (userNumber <= sharm) {
     isComing = confirm('Согласны ехать в группе sharm?');
     if (isComing) {
        alert("Приятного путешествия в группе sharm");
        go = "sharm";
        result = "Приятного путешествия в группе sharm";
     }
   }
   if (userNumber <= hurgada && go != "sharm") {
     isComing = confirm('Согласны ехать в группе hurgada?');
     if (isComing) {
        alert("Приятного путешествия в группе hurgada");
        go = "hurgada";
        result = "Приятного путешествия в группе hurgada";
     }
   }
   if (userNumber <= taba && go != "sharm" && go != "hurgada") {
     isComing = confirm('Согласны ехать в группе taba?');
     if (isComing) {
        alert("Приятного путешествия в группе taba");
        go = "taba";
        result = "Приятного путешествия в группе taba";
     }
   }
 
    if (!isComing) {
      alert("Нам очень жаль, приходите еще!");
      result = "Нам очень жаль, приходите еще!";
    }
    
  } else { 
    alert("Извините, столько мест нет ни в одной группе!");
    result = "Извините, столько мест нет ни в одной группе!";
    }
 
 }
 else {
    alert("Ошибка ввода!");
    result = "Ошибка ввода!";
  }

