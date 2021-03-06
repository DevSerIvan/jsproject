// ОБЪВЛЕНИЕ ФУНКЦИЙ В ВИДЕ ИНСТРУКЦИЙ

// Имя функции задавать как глагол - Что будет делать?
// имя - идентификатор кратко пояснял, для чего она?

// Пример 1
// function func () {  // функция без параметров (пусто в скобках)
//    alert('hello');  // при проверке ничего не происходит
//}

// А почему ничего не происходит? Потому что функция - это
// определенный участок кода? который можно использовать многократно
// и который для работы должен быть вызван!
// Используя обращение к идентификатору функции

//func();  // в круглых скобках передаются значения параметров

// теперь можно обращаться к функции многократно и кроме того,
// к функции можно обратиться в коде раньше чем она объявлена (выше)

// Теперь параметры. В () мы можем указать параметры в виде переменных
// например (param1, param2),  а также создавать локальные переменные
// Т.е. если мы передаем в функцию некие параметры, то они доступны
// в коде данной функции (т.е. это ее переменные с которыми можно выполнять
// любые действия)
// а затем, вызывая функцию мы можем передавать ЗНАЧЕНИЯ параметров функции

// Пример 2
/* function func(param1, param2) {
    var result = param1 * param2;
    alert(result);
}
var a = 10;
var b = 50;
func(a, a * b); 
func(b - a, a + b); */ // выводим функцию с различными параметрами много раз

// Также при передаче значений параметров функций, можно использовать
//любые выражения, например добавить новые переменные и их значения
// передавать как значения параметров функций
// В коде функции можно использовать как условные инструкции,
// так и инструкции циклов

// В фукнции можно указывать  if

// Когда работаем с условвиями внутри функций мы можем использовать инструкцию 
// перехода return - она сразу же завершает работу этой функции
// и возвращает определенный результат, который передаем этой инструкции:
// return(параметры);

// Пример 3 ( с if без инструкции перехода - return)
/* function func(param1, param2) {
    if(param1 == 40) {
        alert('hello');
    }
    var result = param1 * param2;
    alert(result);
}
var a = 10;
var b = 50;
func(a, a * b); 
func(b - a, a + b); */

// Пример функции с инструкцией перехода return
// Используя return - она сразу же завершает работу функции и возваращет
// определенный результат, который передается return 
/* function func(param1, param2) {
    if(param1 == 40) {
        return(param1); // здесь заканчивается работа функции и далее ничего нет
    }
    var result = param1 * param2;
    alert(result);
}
var a = 10;
var b = 50;
func(a, a * b); 
var result = func(b - a, a + b);
console.log(result); */

// если функция через return возвращает некое значения, то его можно
// сохранить в переменную, например var result = func(b - a, a + b);
// а затем вывести например в консоль эту переменную, НО ВАЖНО
// return не отображает на экране, а вовзращает некий параметр, который
// впоследствии можно присвоить какой-то переменной, а потом и вывести на экран

// Но если функция через return не возвращает какого-либо значения, то
// по умолчанию возвращается значение - undefined 

// Вложенные функции
// Переменные param1, param2 доступны не только основной функции
// но и вложенной функции, при этом они кажутся ей глобальными, хотя
// это локальные переменные для родительской функции
// также можно использовать и глобальные переменные внутри вложенной f

/* var c = 3; // глобальная переменная
function func(param1, param2) {
    var result = param1 * param2;

    function func2 (a) {
        return result * param2 * a * c; // из родительской функции берем
    }

    result = func2(2); // перезаписываем result
    return result; 
}
document.write(func(10, 30)); // вызываем функцию */

// ОБЪЯВЛЕНИЕ ФУНКЦИЙ В ВИДЕ СОЗДАНИЯ ВЫРАЖЕНИЯ

/* var func = function foo(param1, param2) {
    console.log(param1);
}; */ // если это выражение, то ставим ;

// если запустить это выражение, то в браузере ничего не увидим так как
// функция не вызвана!!!
// Для этого необходимо обратиться к идентификатору переменной func
//  и в скобках передать значения param1, param2

/* var func = function foo(param1, param2) {
    console.log(param1);
};
func(10, 20); */

// если вместо вызова идентификатора переменной, вызвать идентификатор
// функции foo, то получим ошибку, что функция foo не определена все потому
// что когда функция определяется в виде выражения, то функция сохраняется
// в переменную, в нашем случае, в func и доступ к функции можно получить
// обращаясь только к переменной, а значит имя функции здесь и не нужно
// анонимная функция

/* var func = function (param1, param2) {
    console.log(param1);
};
func(10, 20); */

// Однако есть случаи, когда имя функции необходимо, но обращаться к нему
// можно только когда она будет находиться внутри кода функции

/* var func = function foo(param1, param2) {
    foo();
    console.log(param1);
};
func(10, 20); */

// Также мы можем теперь вызвать функцию на исполнение (без обращения
// к идентификатору переменной). Для этого функцию берем в () и в конце
// дописываем значения

/* var func = (function foo(param1, param2) {
    console.log(param1);
} (10, 20) ); */
// func(10, 20); // это теперь не нужно

// Или как варинат, теперь можно вообще убрать объявление переменной:

/* (function foo(param1, param2) {
    console.log(param1);
} (10, 20) ); */

// Для чего?
// В крупных проектах при множестве разработчиков, чтобы исключить повторения
// Есть анониманая функция, которая оперирует своими локальными переменными,
// доступа к которой извне нет, нет дублирования переменной и функций

// РЕКУРСИЯ
// Рекурсивный вызов функции

// Пример функции факториала числа
// Для этого используется рекусривный вызов функции ( т.е. вызов функции
// на исполнение внутри своего собственного кода). Функция вызывает сама себя
// Она напоминает циклы, поэтому здесь надо указать условия выхода

/* function func(x) {
    if(x <= 1) {
        return 1;
    }
    return x * func(x-1);
}
console.log(func(3)); // 1*2*3 */


// Как работает этот код:
// Вот первый раз мы ее вызываем -  func(3)  и в функцию func(x)
// передается число - 3
// Затем отрабатывается условная инструкция - if(x <= 1), а переменная 3
// сейчас не меньше и не равняется 1, значит условие пропускается и
// отрабатывается данная строка - return x * func(x-1); 3 * (2)
//  и теперь в качестве параметра х передается число 2
// снова условие проходит, так как 2 не меньше и не равно 1 и снова
// отрабатывается данная строка - return x * func(x-1); 2 * (1)
// и теперь в качестве параметра х передается число 1
// а теперь условия попадают под код и выполняется код - return 1
// а это значит, что функция завершается, возвращается значение 1
// а дальнейший код - return x * func(x-1); не выполняется
// код - console.log(func(3)); выводит в консоль результат работы функции


// Также данную функцию можно переписать в виде выражения, а не инструкции

/* var f = function fact(x) {
    if(x <= 1) {
        return 1;
    }
    return x * fact(x-1);
};
document.write(f(4)); */


// Еще варианты
// Если вывести функцию без параметрв - (пусто), то получим  NaN
//  потому что undefined * undefined = NaN

/* function func(param1, param2) {
    var result = param1 * param2;
    return result; 
}
alert(func()); */

// Можно сразу записать значения параметров по умолчанию и тогда
// при вызове пустой функции пропишутся значения по умолчанию 

/* function func(param1 = 10, param2 = 20) {
    var result = param1 * param2;
    return result; 
}
alert(func()); */

// Но если при вызове функции все-таки указать значения, тогда параметры
// по умолчанию будут игнорироваться

/* function func(param1 = 10, param2 = 20) {
    var result = param1 * param2;
    return result; 
}
alert(func(3, 10)); */


// И еще один момент, связанный с тем, если передать больше значений
// при вызове функции, чем они заявлены в параметрах при объявлении f

/* function func(param1 = 10, param2 = 20) {
    var result = param1 * param2;
    return result; 
}
alert(func(3, 10, 20, 30, 40)); // значений больше чеме в function func */

// Здесь нужно понять, что если мы работаем с функцией, то мы получаем
// доступ к объекту arguments (похож на массив и работу с ним)
// каждый параметр, который передается при вызове функции содержится
// в массиве под своим индексом от нуля и далее
// То есть коды выше можно переписать по-другому:

/* function func(param1 = 10, param2 = 20) {
    // var result = param1 * param2;
    var result = arguments[0] * arguments[1];
    return result; 
}
alert(func(3, 10, 20, 30, 40)); */

// то есть в этом случае мы можем и не прописывать параметры в функции
// а передав параметры, можем получить доступ к ним из массива arguments

function func() {
    var result = arguments[2] * arguments[4];
    return result; 
}
alert(func(3, 10, 20, 30, 40)); // получим 200 * 400 = 800

// теперь можно вызывать функцию и передавать произвольное количество
// параметров, которые будет обрабатывать данная функция и доступ к этим
// параметрам осуществляется из массива arguments