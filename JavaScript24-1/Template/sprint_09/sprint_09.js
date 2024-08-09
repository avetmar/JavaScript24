// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.
// т.е. результат _*_*_*_*_*_*_*_*_*_*

function t01() {
  let out1 = "",
    i = 0;
  while (i < 10) {
    out1 += "_*";
    i++;
  }
  document.querySelector(".out-1").textContent = out1;
}

document.querySelector(".b-1").onclick = t01;

// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется число раз указанное в .input-2. Функция выводит в .out-2 созданную строку.
function t02() {
  let count = +document.querySelector(".i-2").value,
    out2 = "",
    i = 0;
  while (i < count) {
    out2 += "_*";
    i++;
  }
  document.querySelector(".out-2").textContent = out2;
}

document.querySelector(".b-2").onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

function t03() {
  let count = document.querySelector(".i-3").value,
    out3 = "",
    i = 0;
  while (i <= count) {
    out3 += i + "_";
    i++;
  }
  document.querySelector(".out-3").textContent = out3;
}

document.querySelector(".b-3").onclick = t03;

// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

function t04() {
  let count = document.querySelector(".i-4").value,
    out4 = "",
    i = count;
  while (i >= 0) {
    out4 += i + "_";
    i--;
  }
  document.querySelector(".out-4").textContent = out4;
}

document.querySelector(".b-4").onclick = t04;

// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание.
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5. Для решения используйте цикл while.

function t05() {
  let val = +document.querySelector(".i-5").value,
    count = "";
  console.log(val);
  if (val % 2 === 0) {
    count = val;
  }

  let out5 = "",
    i = 0;
  while (i <= count) {
    out5 += i + "_";
    i = i + 2;
  }
  document.querySelector(".out-5").textContent = out5;
}

document.querySelector(".b-5").onclick = t05;

// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции. Код должен выводить в .out-6 количество чисел, которые делятся на 7 с остатком нуль, в диапазоне от 0 (включительно) до 100 (включительно). Решите задачу циклом while.

function t06() {
  let i = 0,
    out6 = "";

  while (i <= 100) {
    if (i % 7 === 0) {
      out6 += "*";
    }
    i++;
  }
  document.querySelector(".out-6").textContent = out6.length;
}

document.querySelector(".b-6").onclick = t06;

// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Напишите код внутри функции. Код содержит цикл while от 10 (включительно) до 99 (включительно) и создает строку, куда выводит числа в которых сумма цифр десятков и единиц равна 8. Разделитель подчеркивание.
// т.е. выводятся 17_26_ и далее

function t07() {
  let i = 10,
    out7 = "";

  while (i < 99) {
    let decimal = Math.floor(i / 10),
      num = i % 10;
    if (decimal + num === 8) {
      out7 += i + "_";
    }
    i++;
  }
  document.querySelector(".out-7").textContent = out7;
}

document.querySelector(".b-7").onclick = t07;

// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция получает число из input.i-8 и создает строку вида 0_**_1_**_ до введенного числа включительно. Строку выводит в .out-8.
// Например ввели 3, получаем строку 0_**_1_**_2_**_3_**_

function t08() {
  let num = +document.querySelector(".i-8").value,
    i = 0,
    out8 = "";

  while (i <= num) {
    out8 += i + "_**_";
    i++;
  }
  document.querySelector(".out-8").textContent = out8;
}

document.querySelector(".b-8").onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции. Код получает число из input.i-9 и формирует строку, которая при выводе на страницу рисует прямоугольник. Ширина прямоугольника - 6 звездочек, а высота определяется введенным числом. Выведите строку в .out-9.
// Например ввели число 3. Необходимо сформировать строку '******<br>******<br>******<br>'

function t09() {
  let val = +document.querySelector(".i-9").value,
    out9 = "",
    i = 0;

  while (i < val) {
    out9 += "******<br>";
    i++;
    console.log(out9);
  }
  document.querySelector(".out-9").innerHTML = out9;
}

document.querySelector(".b-9").onclick = t09;

// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции. Код получает число из input.i-10 и создает строку от 0 до введенного числа включительно, где разделитель после четных чисел знак =, а после не четных знак минус. Строка выводится в .out-10. Применяйте цикл while.
// Например введено число 5, необходимо сформировать строку '0=1-2=3-4=5-'

function t10() {
  let val = +document.querySelector(".i-10").value,
    out10 = "",
    i = 0;
  while (i <= val) {
    if (i % 2 === 0) {
      out10 += i + "=";
    } else {
      out10 += i + "-";
    }
    i++;
  }
  document.querySelector(".out-10").textContent = out10;
}

document.querySelector(".b-10").onclick = t10;

// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код, который формирует строку вида 11_21_ до 91_ включительно, с помощью цикла do while. Выведите строку в .out-11.

function t11() {
  let i = 11,
    out11 = "";
  do {
    out11 += i + "_";
    i = i + 10;
  } while (i < 92);
  document.querySelector(".out-11").textContent = out11;
}

document.querySelector(".b-11").onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который формирует строку с 77_74_71_ до 35_. Т.е. от 77 до 35 с шагом 3. Разделитель - подчеркивание. Решите задачу с помощью do while. Строку выведите в .out-12.

function t12() {
  let i = 77,
    out12 = "";
  do {
    out12 += i + "_";
    i = i - 3;
  } while (i >= 35);
  document.querySelector(".out-12").textContent = out12;
}

document.querySelector(".b-12").onclick = t12;

// Task 13
//  Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который получает разделитель из select.s-13 и создает строку от 0 до 10 с выбранным разделителем. Выведите строку в .out-13. Применяйте цикл do while.
// Например выбран разделитель =, получим строку 0=1=2=3=4=5=6=7=8=9=10=

function t13() {
  let val = document.querySelector(".s-13").value,
    out13 = "",
    i = 0;
  do {
    out13 += i + val;
    i++;
  } while (i <= 10);
  document.querySelector(".out-13").textContent = out13;
}

document.querySelector(".b-13").onclick = t13;

// Task 14
// Создана функция t14. Функция запускается при изменении input.range-14, код в функции должен получать value из input и создавать строку от 0 до полученного числа, шаг 1 и разделитель пробел. Строка должна выводиться в .out-14. Применяйте цикл do while.

function t14() {
  let val = +document.querySelector(".range-14").value,
    out14 = "",
    i = 0;
  do {
    out14 += i + " ";
    i++;
  } while (i <= val);
  document.querySelector(".out-14").textContent = out14;
}

document.querySelector(".range-14").oninput = t14;

// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который записывает в каждый div.d-15 число 0 (очищая предыдущее содержимое). Применяйте цикл do while.

function t15() {
  let val = document.querySelectorAll(".d-15"),
    i = 0;
  do {
    val[i].textContent = 0;
    i++;
  } while (i < val.length);
}

document.querySelector(".b-15").onclick = t15;

// Task 16
// Создана функция t16. Функция запускается при нажатии .b-16. Напишите код внутри функции, который записывает в каждый div.d-16 число (очищая предыдущее содержимое). Применяйте цикл do while. Т.е. в первом div.d-16 выведите  число 1, во второй - число 2 и т.д.

function t16() {
  let val = document.querySelectorAll(".d-16"),
    i = 0;
  do {
    val[i].textContent = i + 1;
    i++;
  } while (i < val.length);
}

document.querySelector(".b-16").onclick = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Напишите код внутри функции, который записывает в каждый div.d-17 число в начало текста. Применяйте do while.
// т.е. был <div>one</div> после выполнения цикла должно быть <div>1. one</div>
// т.е. был <div>two</div> после выполнения цикла должно быть <div>2. two</div>
// т.е. был <div>three</div> после выполнения цикла должно быть <div>3. three</div>

function t17() {
  let val = document.querySelectorAll(".d-17"),
    i = 0;
  do {
    val[i].textContent = i + 1 + ". " + val[i].textContent;
    i++;
  } while (i < val.length);
}

document.querySelector(".b-17").onclick = t17;

// Task 18
// Напишите в функции t18 код, который с помощью цикла do while формирует строку 1 10 2 20 3 30 и так далее до 10 100 . Выведите строку в .out-18.

function t18() {
  let out18 = "",
    i = 1;
  do {
    out18 += i + " " + i * 10 + " ";
    i++;
  } while (i <= 10);
  document.querySelector(".out-18").textContent = out18;
}

document.querySelector(".b-18").onclick = t18;

// Task 19
// Напишите в функции t19 код, который с помощью цикла do while формирует строку 0 10 1 9 2 8 3 7 4 6 5 5 6 4 7 3 8 2 9 1 10 0 . Выведите строку в .out-19.

function t19() {
  let num1 = 0,
    num2 = 10,
    out19 = "";
  do {
    out19 += num1 + " " + num2 + " ";
    num1++;
    num2--;
  } while (num1 <= 10);
  document.querySelector(".out-19").textContent = out19;
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Получите все td с классом .price, c помощью querySelectorAll(). В функции посчитайте сумму товаров в данных ячейках и выведите в ячейку .total. Примените цикл do while.

function t20() {
  let price = document.querySelectorAll(".price"),
    i = 0;
  total = 0;
  do {
    total = total + +price[i].textContent;
    i++;
  } while (i < price.length);
  document.querySelector(".total").textContent = total;
}

document.querySelector(".b-20").onclick = t20;
