// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Допишите внутрь функции код, который выводит в .out-1 строку 'hello'.

function t01() {
  document.querySelector(".out-1").textContent = "hello";
}

document.querySelector(".b-1").onclick = t01;

// Task 2
// Создана функция t02. Допишите запуск функции по клику на кнопке .b-2. Реализуйте через свойство кнопки onclick.

const out2 = document.querySelector(".out-2");
let count = 0;

function t02() {
  out2.textContent += count + " ";
  count++;
}
document.querySelector(".b-2").onclick = t02;

// Task 3
// Напишите код, который добавляет запуск функции t02 при клике на кнопку .b-3. Реализуйте через свойство кнопки onclick.
document.querySelector(".b-3").onclick = t02;

// Task 4
// Создана функция t04, напишите в ней код, который получает ЧИСЛО из .out-4, умножает его на 2 и записывает обратно в .out-4.

function t04() {
  document.querySelector(".out-4").textContent = +document.querySelector(".out-4").textContent * 2;
}

document.querySelector(".b-4").onclick = t04;

// Task 5
// Создана функция t05. Напишите код внутри функции, который выводит переменную g5 в .out-5.

function t05() {
  let g5 = 33;
  document.querySelector(".out-5").innerHTML = g5;
}

document.querySelector(".b-5").onclick = t05;

// Task 6
// Создана функция t06. Напишите код внутри функции, который выводит переменную g6 в .out-6. Обратите внимание, что код будет работать аналогично предыдущему. В чем же разница? Логика JS следующая - если JS не находит переменную внутри блока (в данном случае - функции t06), то ищет в блоке родителя - в документе.

let g6 = 55;

function t06() {
  document.querySelector(".out-6").innerHTML = g6;
}

document.querySelector(".b-6").onclick = t06;

// Task 7
// Создана функция t07. Напишите код внутри функции, который выводит переменную g7 в .out-7.

let g7 = 77;

function t07() {
  let g7 = 88;
  document.querySelector(".out-7").innerHTML = g7;
}

document.querySelector(".b-7").onclick = t07;

// Task 8
// Создана функция t08. Напишите код внутри функции, который выводит переменную g8 в .out-8. Отличие от предыдущего примера разница в том, что мы изменяем g8 глобальную.

let g8 = 99;

function t08() {
  g8 = 100;
  document.querySelector(".out-8").innerHTML = g8;
}

document.querySelector(".b-8").onclick = t08;

// Task 9
// Запустите функцию t09 и посмотрите на результат.

function t09() {
  document.querySelector(".out-9").textContent = g8;
}

document.querySelector(".b-9").onclick = t09;

// Task 10
// Давайте научимся отключать события заданные через свойство элемента (on). Изучите как работает функция t10. Нажмите кнопку несколько раз. Затем, удалите комментарий со строки внутри функции. Нажмите кнопку несколько раз.

function t10() {
  document.querySelector(".out-10").innerHTML += "function 10 work<br>";
  document.querySelector(".b-10").onclick = null;
}

document.querySelector(".b-10").onclick = t10;
