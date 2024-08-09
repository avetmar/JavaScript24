// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

function $(c) {
  return document.querySelector(c);
}

// Task 01
// Напишите функцию, которая возвращает число 7 из массива arr_01. Изучите пример написания функции, т.е. нужно написать обращение по индексу.

let arr_01 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const t01 = () => arr_01[1][2];

document.querySelector(".b-1").addEventListener("click", () => ($(".out-1").textContent = t01()));

// Task 02
// Напишите функцию, которая возвращает число 16 из массива arr_02.

let arr_02 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const t02 = () => {
  return arr_02[3][3];
};

document.querySelector(".b-2").addEventListener("click", () => ($(".out-2").textContent = t02()));

// Task 03
// Напишите функцию, которая возвращает число 15 из массива arr_03.

let arr_03 = [
  [1, 2, 3, 4],
  [5, [13, 14, 15], 7, 8],
  [9, 10, 11, 12],
];

const t03 = () => arr_03[1][1][2];

document.querySelector(".b-3").addEventListener("click", () => ($(".out-3").textContent = t03()));

// Task 04
//  Напишите функцию, которая возвращает число 3 из массива arr_04.

let arr_04 = [[[[1, 2, 3, 4]]]];

const t04 = () => arr_04[0][0][0][2];

document.querySelector(".b-4").addEventListener("click", () => ($(".out-4").textContent = t04()));

// Task 05
// Напишите функцию, которая возвращает число 6 из массива arr_05.

let arr_05 = [[1, 2], 3, [4, 5], [6]];

const t05 = () => arr_05[3][0];

document.querySelector(".b-5").addEventListener("click", () => ($(".out-5").textContent = t05()));

// Task 06
//  Напишите функцию, которая возвращает число 8 из массива arr_06.

let arr_06 = [[1, 2, 3], [4, 5, 6], [[7, 8, 9]]];

const t06 = () => arr_06[2][0][1];

document.querySelector(".b-6").addEventListener("click", () => ($(".out-6").textContent = t06()));

// Task 07
//  Напишите функцию, которая возвращает число 13 из массива arr_07.

let arr_07 = [
  [1, 2, 3],
  [4, 5, 6],
  [[7, 8, 9], [10, 11, 12], [[13]]],
];

const t07 = () => arr_07[2][2][0][0];
document.querySelector(".b-7").addEventListener("click", () => ($(".out-7").textContent = t07()));

// Task 08
//  Напишите функцию, которая возвращает число 1 из массива arr_08.

let arr_08 = [[], [], [], [], [[], [0, 1]]];

const t08 = () => arr_08[4][1][1];

document.querySelector(".b-8").addEventListener("click", () => ($(".out-8").textContent = t08()));

// Task 09
//  Напишите функцию, которая возвращает число 1 из массива arr_09.

let arr_09 = [, , , , , , [0, 1]];

const t09 = () => arr_09[6][1];

document.querySelector(".b-9").addEventListener("click", () => ($(".out-9").textContent = t09()));

// Task 10
// Как уже было сказано, в многомерных массивах, если вы применяете несколько индексов подряд в стиле [индекс_1][индекс_2] и ошиблись с номерами индексов, то получите ошибку (в отличии от одномерного массива, где получите undefined). Как от этого спастись? Можно применять try, catch. Однако есть синтаксис Optional chaining (?.), который большей частью применяют для объектов. Данный синтаксис проверяет, есть ли свойство (значение) перед обращением к нему. Если нет - возвращает undefined, если есть - значение. Изучите три способа написания функции. Сделайте выводы. Надесь, вы помните, почему я тут применяю innerHTML а не textContent?

let arr_10 = [
  [1, 2],
  [3, 4],
];

// const t10 = () => arr_10[6][100];
// const t10 = () => arr_10?.[1]?.[100];
const t10 = () => arr_10?.[1]?.[1];

document.querySelector(".b-10").addEventListener("click", () => ($(".out-10").innerHTML = t10()));

// Task 11
// C помощью цикла выведите четные значения из массива в .out-11. Разделитель - подчеркивание. Т.е. после запуска функции ожидаю вывод вида: 0_2_4_6_8_10_12_14_

let arr_11 = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
];

const t11 = () => {
  let out = "";
  for (let i = 0; i < arr_11.length; i++) {
    for (let k = 0; k < arr_11[i].length; k++) {
      if (arr_11[i][k] % 2 === 0) {
        out += arr_11[i][k] + "_";
      }
    }
  }
  $(".out-11").textContent = out;
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Функция должна с помощью цикла формировать и возвращать строку со значениями из массива arr_12 больше нуля. Разделитель подчеркивание.

let arr_12 = [
  [1, 2, -3],
  [4, -5, 6],
  [-7, 8, 9],
];

const t12 = () => {
  let out = "";
  for (let i = 0; i < arr_11.length; i++) {
    for (let k = 0; k < arr_12[i].length; k++) {
      if (arr_12[i][k] > 0) {
        out += arr_12[i][k] + "_";
      }
    }
  }
  return out;
};

document.querySelector(".b-12").addEventListener("click", () => ($(".out-12").innerHTML = t12()));

// Task 13
// Функция должна с помощью цикла формировать и возвращать строку со значениями из массива arr_13 больше нуля. Разделитель подчеркивание.

let arr_13 = [[[1, 2, -3]], [[4, -5, 6]], [[-7, 8, 9]]];

const t13 = () => {
  let out = "";
  for (let i = 0; i < arr_13.length; i++) {
    for (let k = 0; k < arr_13[i].length; k++) {
      for (let s = 0; s < arr_13[i][k].length; s++) {
        if (arr_13[i][k][s] > 0) {
          out += arr_13[i][k][s] + "_";
        }
      }
    }
  }
  return out;
};

document.querySelector(".b-13").addEventListener("click", () => ($(".out-13").innerHTML = t13()));

// Task 14
// Функция должна с помощью цикла формировать и возвращать строку со значениями из массива arr_14 больше нуля. Разделитель подчеркивание.

let arr_14 = [[0], [0, -1], [0, 1, -2], [-100, 1, 2, 3]];

const t14 = () => {
  let out = "";
  for (let i = 0; i < arr_14.length; i++) {
    for (let k = 0; k < arr_14[i].length; k++) {
      if (arr_14[i][k] > 0) {
        out += arr_14[i][k] + "_";
      }
    }
  }
  return out;
};

document.querySelector(".b-14").addEventListener("click", () => ($(".out-14").innerHTML = t14()));

// Task 15
// Функция должна с помощью цикла посчитать количество '🦎' в массиве arr_15 и возвратить данное количество.

let arr_15 = [
  ["😾", "🦎", "😿", "🐈"],
  ["😾", "😾", "😿", "🦎"],
  ["😾", "🦎", "😿", "🦎"],
  ["🦎", "😾", "😿", "🐈"],
];

const t15 = () => {
  let out = 0;
  for (let i = 0; i < arr_15.length; i++) {
    for (let k = 0; k < arr_15[i].length; k++) {
      if (arr_15[i][k] === "🦎") {
        out += 1;
      }
    }
  }
  return out;
};

document.querySelector(".b-15").addEventListener("click", () => ($(".out-15").textContent = t15()));

// Task 16
// Функция должна создать и возвратить массив по размеру равный исходному, где все элементы умножены на 2. Примените комбинацию цикла и map.
// Ожидаю массив вида
// [[2, 4]
// [6, 8]]

let arr_16 = [
  [1, 2],
  [3, 4],
];

const t16 = () => {
  let arr_116 = [];
  for (let i = 0; i < arr_16.length; i++) {
    arr_116[i] = arr_16[i].map((item) => item * 2);
  }
  return arr_116;
};

document.querySelector(".b-16").addEventListener("click", () => console.log(t16()));

// Task 17
// Функция должна создать и возвратить массив по структуре схожий с исходным, где отфильтрованы числа меньше нуля.
// Ожидаю массив вида
// [
// [1, 4]
// [5, 7]
// [9]
// ]

let arr_17 = [
  [1, -2, -3, 4],
  [5, -6, 7, -8],
  [9, -10, -11, -12],
];

const t17 = () => {
  const arr_117 = [];
  for (let i = 0; i < arr_17.length; i++) {
    for (let k = 0; k < arr_17[i].length; k++) {
      arr_117[i] = arr_17[i].filter((item) => item > 0);
    }
  }
  return arr_117;
};

document.querySelector(".b-17").addEventListener("click", () => console.log(t17()));

// Task 18
// Функция должна на основе arr_18 создать и возвращать массив где вложенные элементы инвертированы.
// Ожидаю массив вида
// [
// [3, 2, 1],
// [6, 5, 4],
// [10, 9, 8, 7]
// ]

let arr_18 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

const t18 = () => {
  let arr_118 = [];
  for (let i = 0; i < arr_18.length; i++) {
    arr_118[i] = [];
    for (let k = arr_18[i].length - 1; k >= 0; k--) {
      arr_118[i][arr_18[i].length - 1 - k] = arr_18[i][k];
    }
  }
  return arr_118;
};

document.querySelector(".b-18").addEventListener("click", () => console.log(t18()));

// Task 19
// Функция должна на основе arr_19 создать и возвращать массив где все элементы приведены к строке
// Ожидаю массив вида
// [
//  ['1', '2', '3'],
//  ['4', '5', '6'],
//  ['7', '8', '9', '10']
// ]

let arr_19 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

const t19 = () => {
  let out = [];

  for (let i = 0; i < arr_19.length; i++) {
    out[i] = [];
    for (let k = 0; k < arr_19[i].length; k++) {
      out[i].push(arr_19[i][k].toString());
    }
  }
  return out;
};

document.querySelector(".b-19").addEventListener("click", () => console.log(t19()));

// Task 20
// Функция должна на основе arr_20 создать и возвращать массив где все элементы приведены к строке, с добавлением ведущего нуля.
// Ожидаю массив вида
// [
//  ['01', '22', '03'],
//  ['04', '54', '06'],
//  ['07', '08', '09', '10']
// ]

let arr_20 = [
  [1, 22, 3],
  [4, 54, 6],
  [7, 8, 9, 10],
];

const t20 = () => {
  let out = [];

  for (let i = 0; i < arr_20.length; i++) {
    out[i] = [];
    for (let k = 0; k < arr_20[i].length; k++) {
      if (arr_20[i][k] < 10) {
        out[i].push("0" + arr_20[i][k].toString());
      } else {
        out[i].push(arr_20[i][k].toString());
      }
    }
  }
  return out;
};

document.querySelector(".b-20").addEventListener("click", () => console.log(t20()));
