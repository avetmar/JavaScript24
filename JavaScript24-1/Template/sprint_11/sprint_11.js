// Task 1
// Напишите функцию t01, которая добавляет .out-1 класс CSS (далее просто класс) 'bg-orange'.

function t01() {
  document.querySelector(".out-1").classList.add("bg-orange");
}

document.querySelector(".b-1").onclick = t01;

// Task 2
// Напишите функцию t02, которая удаляет у .out-2 класс CSS (далее просто класс) 'bg-orange'.

function t02() {
  document.querySelector(".out-2").classList.remove("bg-orange");
}

document.querySelector(".b-2").onclick = t02;

// Task 3
// Напишите функцию t03, которая проверяет наличие класса 'bg-orange' у .block-3. Результат проверки - выводит в .out-3.

function t03() {
  document.querySelector(".out-3").textContent = document.querySelector(".block-3").classList.contains("bg-orange");
}

document.querySelector(".b-3").onclick = t03;

// Task 4
// Напишите функцию t04, которая переключает (toggle) класс 'bg-orange' у элемента .out-4.

function t04() {
  document.querySelector(".out-4").classList.toggle("bg-orange");
}

document.querySelector(".b-4").onclick = t04;

// Task 5
// Напишите функцию t05, которая заменяет класс 'bg-orange' на класс 'bg-bisque'.

function t05() {
  document.querySelector(".out-5").classList.replace("bg-orange", "bg-bisque");
}

document.querySelector(".b-5").onclick = t05;

// Task 6
// Напишите функцию t06, которая делает toggle класса 'round-img' для изображения .img-6.

function t06() {
  document.querySelector(".img-6").classList.toggle("round-img");
}

document.querySelector(".b-6").onclick = t06;

// Task 7
// Напишите функцию t07, которая добавляет класс 'bold' в .out-7.

function t07() {
  document.querySelector(".out-7").classList.add("bold");
}

document.querySelector(".b-7").onclick = t07;

// Task 8
// Напишите функцию t08, которая переключает (toggle) класс 'hide' для блока .out-8.

function t08() {
  document.querySelector(".out-8").classList.toggle("hide");
}

document.querySelector(".b-8").onclick = t08;

// Task 9
// Напишите функцию t09, которая при нажатии кнопки проверяет input.ch-91 и если он выбран, то добавляет класс 'bold' для .out-9. Если input.ch-92 выбран - то добавляет класс 'uppercase' для .out-9. Если checkbox не выбраны, то удаляет данные классы у .out-9.

function t09() {
  let ch91 = document.querySelector(".ch-91"),
    ch92 = document.querySelector(".ch-92"),
    out9 = document.querySelector(".out-9");

  if (ch91.checked == true) {
    out9.classList.add("bold");
  } else {
    out9.classList.remove("bold");
  }

  if (ch92.checked == true) {
    out9.classList.add("uppercase");
  } else {
    out9.classList.remove("uppercase");
  }
}

document.querySelector(".b-9").onclick = t09;

// Task 10
// Напишите функцию t10, которая при нажатии кнопки делает toggle класса 'clip' для .out-10.

function t10() {
  document.querySelector(".out-10").classList.toggle("clip");
}

document.querySelector(".b-10").onclick = t10;
