// Взаимодействие с пользователем на сайте
//alert('Hello!!!'); // всплывающее окно в браузере через модальное окно
// используется для предупреждения пользователя о чем-то важном.

// Чтобы спросить пользователя о чем-то используется - confirm
//const result = confirm("Вы еще здесь?"); // модальное окно с 2-мя кнопками
//console.log(result); // ответ записывается в переменную result (true/false)

// Чтобы пользователь записал ответ сам и подтвердил его кнопкой

//const answers = prompt("Вам есть 18 лет?", ""); // кавычки для дефолта
// чтобы не ответил юзер, в перменную answer запишется тип данных строка
//console.log(answers);

// если мы хотим преобразовать строку в число, то добавляем +prompt
//const answers2 = +prompt("Вам есть 18 лет?", ""); // теперь тип данных число


// Теперь ответы юзера запишем сразу в массив данных
const answe = []; //обявляем пустой массив данных
answe[0] = prompt('Как ваше имя?', '');
answe[1] = prompt('Ваше фамилия?', '');
answe[2] = prompt('Сколько вам лет?', ''); 
// все ответы юзера запишутся по порядку в массив
// и выведем это на страницу в браузере через document.write
document.write(answe);




