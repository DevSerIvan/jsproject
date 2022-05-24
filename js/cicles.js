// Цикл while
// Приницп - пока условие выполняется - делаем какие-то действия
let num = 50;
while (num < 55) {  // если условие выполняется
    console.log(num); // выводим num !!! но пока бесконечно!!!
    num++; // а здесь прибавляем к num единичку
}
// То же самое, но через цикл do while. Сдела пока что-то
let num1 = 50;
do {
    console.log(num1);
    num1++;
}
while (num1 < 55);

// Цикл while 2/ Еще варианты выполнения
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// Цикл do while. Сделай пока что-то
 let c = 2;
let i =0;
do {
    c = c * 2;
    i++;
}
while (i < 4);
console.log(c);

// Цикл for. Задаем 3 аргумента.
// Объявляем итератор i, количество итераций, что делать
for (let i = 1; i < 8; i++) {
    console.log(i)
}

// Вариант цикла for c остановкой break
for (let i = 1; i < 8; i++) {
    if (i === 6) {  //когда i достигнет 5, а не 6 - цикл остановить
        break;
    }
    console.log(i)
}

// Цикл for с прерыванием continue
for (let i = 1; i < 10; i++) {
    if (i === 6) {  
        continue;   // пропускаем в цикле 6. Будет от 1 до 9, кроме 6
    }
    console.log(i)
}