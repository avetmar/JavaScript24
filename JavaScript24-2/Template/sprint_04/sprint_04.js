// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

// Task 01
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 4=4 3 2 1 0 3=4 3 2 1 0 2=4 3 2 1 0 1=4 3 2 1 0 0=4 3 2 1 0
// и выводит в .out-1.
// Напоминаю. Если можно избежать, то не делайте вывод на страницу внутри цикла.

const t01 = () => {
  let out = "";
  for (let i = 4; i >= 0; i--) {
    out += i + "=";
    for (let k = 4; k >= 0; k--) {
      out += k + " ";
    }
  }
  document.querySelector(".out-1").textContent = out;
};

document.querySelector(".b-1").addEventListener("click", t01);

// Task 02
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 0****<br>1****<br>2****<br>3****<br>4****<br>
// и выводит в .out-2 с помощью innerHTML

const t02 = () => {
  let out = "";
  for (let i = 0; i <= 4; i++) {
    out += i;
    for (let k = 3; k >= 0; k--) {
      out += "*";
    }
    out += "<br>";
  }
  document.querySelector(".out-2").innerHTML = out;
};

document.querySelector(".b-2").addEventListener("click", t02);

// Task 03
// Функция должна выводить прямоугольник на страницу состоящий из символов звездочка. В горизонтали 6 звездочек, количество линий - число, которое пользователь ввел в input.i-3.
// Перенос строки делайте с помощью тега br.

const t03 = () => {
  let count = +document.querySelector(".i-3").value,
    out = "";
  for (let i = 0; i < count; i++) {
    for (let k = 0; k < 6; k++) {
      out += "*";
    }
    out += "<br>";
  }
  document.querySelector(".out-3").innerHTML = out;
};

document.querySelector(".b-3").addEventListener("click", t03);

// Task 04
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали 6 чисел от 5 до нуля, количество линий - число, которое пользователь ввел в input.i-4.
// Перенос строки делайте с помощью тега br.

const t04 = () => {
  let count = +document.querySelector(".i-4").value,
    out = "";
  for (let i = 0; i < count; i++) {
    for (let k = 5; k >= 0; k--) {
      out += k + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-4").innerHTML = out;
};

document.querySelector(".b-4").addEventListener("click", t04);

// Task 05
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали числа от введенного в input.i-51 до нуля, количество линий - число, которое пользователь ввел в input.i-52.
// Перенос строки делайте с помощью тега br.

const t05 = () => {
  let count = +document.querySelector(".i-51").value,
    str = +document.querySelector(".i-52").value;
  out = "";
  for (let i = 0; i < str; i++) {
    for (let k = count; k >= 0; k--) {
      out += k + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-5").innerHTML = out;
};

document.querySelector(".b-5").addEventListener("click", t05);

// Task 06
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-6

const t06 = () => {
  let out = "";
  for (let i = 0; i < 3; i++) {
    out += "| ";
    for (let k = 0; k < 4; k++) {
      out += "* ";
    }
    out += "|<br>";
  }
  document.querySelector(".out-6").innerHTML = out;
};

document.querySelector(".b-6").addEventListener("click", t06);

// Task 07
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-7.

const t07 = () => {
  let out = "";
  for (let i = 0; i < 5; i++) {
    out += "| ";
    for (let k = 0; k < 4; k++) {
      if (i < 1 || i > 3) {
        out += "- ";
      } else {
        out += "* ";
      }
    }
    out += "|<br> ";
  }
  document.querySelector(".out-7").innerHTML = out;
};

document.querySelector(".b-7").addEventListener("click", t07);

// Task 08
// Функция должна рисовать такую фигуру
//10x01x%
//10x01x
//10x01x
// и выводить в .out-08

const t08 = () => {
  let out = "";
  for (let i = 0; i < 3; i++) {
    out += "10x01x";
    let k = i;
    if (k === 0) {
      out += "%<br>";
    } else {
      out += "<br>";
    }
  }
  document.querySelector(".out-8").innerHTML = out;
};

document.querySelector(".b-8").addEventListener("click", t08);

// Task 09
// Функция должна рисовать такую фигуру
// и выводить в .out-09

const t09 = () => {
  let out = "";
  for (let i = 0; i < 6; i++) {
    for (let k = 0; k < 3; k++) {
      if (i % 2 === 0) {
        out += "0" + "1";
      } else {
        out += "1" + "0";
      }
    }
    out += "<br>";
  }
  document.querySelector(".out-9").innerHTML = out;
};

document.querySelector(".b-9").addEventListener("click", t09);

// Task 10
// Функция должна вывести в .out-10 такую строку:
// 5 0 4 1 3 2 2 3 1 4 0 5

const t10 = () => {
  let out = "";
  for (let i = 0; i <= 5; i++) {
    out += 5 - i + " " + i + " ";
  }
  document.querySelector(".out-10").textContent = out;
};

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11
// Функция должна рисовать такую фигуру
// и выводить в .out-11

const t11 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = i; k >= 0; k--) {
      out += "*";
    }
    out += "<br>";
  }
  document.querySelector(".out-11").innerHTML = out;
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Функция должна рисовать такую фигуру
// и выводить в .out-12

const t12 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
      if (k <= i) {
        out += "* ";
      } else {
        out += "_ ";
      }
    }
    out += "<br>";
  }
  document.querySelector(".out-12").innerHTML = out;
};

document.querySelector(".b-12").addEventListener("click", t12);

// Task 13
// Функция должна рисовать такую фигуру
// и выводить в .out-13

const t13 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= 10; k++) {
      out += 10 * i + k + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-13").innerHTML = out;
};

document.querySelector(".b-13").addEventListener("click", t13);

// Task 14
// Функция должна рисовать такую фигуру
// и выводить в .out-14

const t14 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= 10; k++) {
      if (i === 0 && k < 10) {
        out += "0" + (10 * i + k) + "_";
      } else {
        out += 10 * i + k + "_";
      }
    }
    out += "<br>";
  }
  document.querySelector(".out-14").innerHTML = out;
};

document.querySelector(".b-14").addEventListener("click", t14);

// Task 15
// Функция должна рисовать такую фигуру
// и выводить в .out-15

const t15 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= i; k++) {
      out += k + 1 + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-15").innerHTML = out;
};

document.querySelector(".b-15").addEventListener("click", t15);

// Task 16
// Функция должна рисовать такую фигуру
// и выводить в .out-16

const t16 = () => {
  let out = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= i; k++) {
      out += i + 1 + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-16").innerHTML = out;
};

document.querySelector(".b-16").addEventListener("click", t16);

// Task 17
// Функция должна рисовать такую фигуру
// и выводить в .out-17

const t17 = () => {
  let out = "";
  for (let i = 4; i >= 1; i--) {
    for (let k = 1; k <= i; k++) {
      out += k + "_";
    }
    out += "<br>";
  }
  document.querySelector(".out-17").innerHTML = out;
};

document.querySelector(".b-17").addEventListener("click", t17);

// Task 18
// Функция должна рисовать такую фигуру
// и выводить в .out-18

const t18 = () => {
  let out = "";
  for (let i = 4; i >= 0; i--) {
    for (let k = 0; k <= 4; k++) {
      if (k < i) {
        out += "=" + "_";
      } else {
        out += k + "_";
      }
    }
    out += "<br>";
  }
  document.querySelector(".out-18").innerHTML = out;
};

document.querySelector(".b-18").addEventListener("click", t18);

// Task 19
// Функция должна рисовать такую фигуру
// и выводить в .out-19

const t19 = () => {
  let out = "";
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
      if (k >= i) {
        out += k + "_";
      } else {
        out += "=" + "_";
      }
    }
    out += "<br>";
  }
  document.querySelector(".out-19").innerHTML = out;
};

document.querySelector(".b-19").addEventListener("click", t19);

// Task 20
// Функция должна рисовать такую фигуру
// и выводить в .out-20

const t20 = () => {
  let out = "",
    p = 4,
    s = 5;
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 10; k++) {
      if (k < p || k > s) {
        out += k + "_";
      } else {
        out += "*" + "_";
      }
    }
    out += "<br>";
    p--;
    s++;
  }
  document.querySelector(".out-20").innerHTML = out;
};

document.querySelector(".b-20").addEventListener("click", t20);
