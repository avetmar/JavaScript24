// Task 1 ==================================
// Ниже приведены функции t12_1 - t12_5, функции взяты из загруженных работ ваших коллег. Возможно вы встретите ваш код. Напишите гипотезы тестирования, а затем реализуйте гипотезы в коде функции test_01. Функция должна возвращать true, если тестируемая функция прошла тест (баги не выявлены) и false в остальных случаях. Для тестирования используйте объект с тестовыми данными testData_01.

// Задача из JS24-2 Sprint 3 task 12

// Здесь - я прописал данные для тестирования. В остальных задачах вам придется делать это самостоятельно. И да, можно дополнить данный объект своими данными.

let testData_01 = [
  {
    arr_12: [10, 20, 30, 40],
    res_12: [0, 1, 3],
  },
  {
    arr_12: [-10, 20, -30, 40, 50, 60],
    res_12: [0, 1, 3, 5],
  },
  {
    arr_12: [0, 0, -1, -2],
    res_12: [0, 1, 3],
  },
];

function test_01(functionName, tData) {}

// Снимите комментарий и проверьте нужную функцию. Потом комментарий можно вернуть - как вам удобнее.
// console.log(test_01(t12_1, testData_01[0]));
// console.log(test_01(t12_1, testData_01[1]));
// console.log(test_01(t12_1, testData_01[2]));
// console.log(test_01(t12_2, testData_01[0]));
// console.log(test_01(t12_2, testData_01[1]));
// console.log(test_01(t12_2, testData_01[2]));
// console.log(test_01(t12_3, testData_01[0]));
// console.log(test_01(t12_3, testData_01[1]));
// console.log(test_01(t12_3, testData_01[2]));
// console.log(test_01(t12_4, testData_01[0]));
// console.log(test_01(t12_4, testData_01[1]));
// console.log(test_01(t12_4, testData_01[2]));
// console.log(test_01(t12_5, testData_01[0]));
// console.log(test_01(t12_5, testData_01[1]));
// console.log(test_01(t12_5, testData_01[2]));

// Функции для тестирования - это 5 функций, которые нужно будет протестировать.
// Функция должна с помощью forEach наполнить массив res_12 индексами четных элементов из массива arr_12. Обратите внимание!!! Функция должна выдавать одинаковый результат при любом количестве запусков.

let arr_12 = [10, 20, 30, 40];
let res_12 = [];

function t12_1() {
  arr_11.forEach((item, index) => {
    if (index % 2 === 0) {
      res_12.push(index);
    }
  });
}

function t12_2() {
  res_12 = [];
  arr_12.forEach((val, index) => {
    if (val % 2 === 0) {
      res_12.push(index);
    }
  });
}

function t12_3() {
  arr_12.forEach((elem, index) => {
    if (index % 2 === 0) res_12.push(index);
  });
  return res_12;
}

function t12_4() {
  res_12 = [];
  arr_12.forEach((item) => {
    if (item % 2 === 0) res_12.push(item);
  });
}

function t12_5() {
  res_12 = [];
  arr_12.forEach((item, index) => {
    if (index % 2 === 0) {
      res_12.push(index);
    }
  });
}

// Task 2 ==================================
// Ниже приведены функции t14_1 - t14_5, функции взяты из загруженных работ ваших коллег. Возможно вы встретите ваш код. Напишите гипотезы тестирования, а затем реализуйте гипотезы в коде функции test_02. Функция должна возвращать true, если тестируемая функция прошла тест (баги не выявлены) и false в остальных случаях. Для тестирования используйте объект с тестовыми данными testData_02.

// Задача из JS24-2 Sprint 5 task 14

let testData_02 = [
  {
    arr_14: [[0], [0, -1], [0, 1, -2], [-100, 1, 2, 3]],
    result: "1_1_2_3_",
  },
  // тут допишите тестовые данные
];

function test_02(functionName, tData) {}

// Снимите комментарий и проверьте нужную функцию. Потом комментарий можно вернуть - как вам удобнее.
// console.log(test_02(t14_1, testData_02[0]));
// console.log(test_02(t14_1, testData_02[1]));
// console.log(test_02(t14_1, testData_02[2]));
// console.log(test_02(t14_2, testData_02[0]));
// console.log(test_02(t14_2, testData_02[1]));
// console.log(test_02(t14_2, testData_02[2]));
// console.log(test_02(t14_3, testData_02[0]));
// console.log(test_02(t14_3, testData_02[1]));
// console.log(test_02(t14_3, testData_02[2]));
// console.log(test_02(t14_4, testData_02[0]));
// console.log(test_02(t14_4, testData_02[1]));
// console.log(test_02(t14_4, testData_02[2]));
// console.log(test_02(t14_5, testData_02[0]));
// console.log(test_02(t14_5, testData_02[1]));
// console.log(test_02(t14_5, testData_02[2]));

// Ниже - пять функций, которые нужно будет тестировать
// Функция должна с помощью цикла формировать и возвращать строку со значениями из массива arr_14 больше нуля. Разделитель подчеркивание.

let arr_14 = [[0], [0, -1], [0, 1, -2], [-100, 1, 2, 3]];

function t14_1() {
  let result = [];

  for (let i = 0; i < arr_14.length; i++) {
    for (let k = 0; k < arr_14[i].length; k++) {
      if (arr_14[i][k] > 0) result.push(arr_14[i][k]);
    }
  }
  return result.join("_");
}

function t14_2() {
  let r = [];
  for (let i = 0; i < arr_14.length; i++) {
    for (let k = 0; k < arr_14[i].length; k++) {
      if (arr_14[i][k] > 0) {
        r.push(arr_14[i][k]);
      }
    }
  }
  return r.join("_");
}

function t14_3() {
  let element = arr_14.flat();
  let result = out;
  for (let i = 0; i < element.length; i++) {
    if (element[i] > 0) result += element[i] + " ";
  }
  return result;
}

function t14_4() {
  let out = "";

  for (let i = 0; i < arr_14.length; i++) {
    const elem = arr_14[i];

    for (let k = 0; k < elem.length; k++) {
      if (elem[k] > 0) out += elem[k] + "_";
    }
  }

  return out;
}

function t14_5() {
  let result = "";
  for (let i = 0; i < arr_14.length; i++) {
    let row = arr_14[i];
    for (let k = 0; k < row.length; k++) {
      if (row[k] > 0) result += `${row[k]}_`;
    }
  }
  return result;
}

// Task 3 ==================================
// Ниже приведены функции t08_1 - t08_5, функции взяты из загруженных работ ваших коллег. Возможно вы встретите ваш код. Напишите гипотезы тестирования, а затем реализуйте гипотезы в коде функции test_03. Функция должна возвращать true, если тестируемая функция прошла тест (баги не выявлены) и false в остальных случаях. Для тестирования используйте объект с тестовыми данными testData_03.

// Задача из JS24-1 Sprint 6 task 08

let testData_03 = [
  {
    inputData: 2020,
    result: "-1",
  },
  // тут допишите тестовые данные
];

function test_03(functionName, tData) {}

// Снимите комментарий и проверьте нужную функцию. Потом комментарий можно вернуть - как вам удобнее.
// console.log(test_03(t08_1, testData_03[0]));
// console.log(test_03(t08_1, testData_03[1]));
// console.log(test_03(t08_1, testData_03[2]));
// console.log(test_03(t08_2, testData_03[0]));
// console.log(test_03(t08_2, testData_03[1]));
// console.log(test_03(t08_2, testData_03[2]));
// console.log(test_03(t08_3, testData_03[0]));
// console.log(test_03(t08_3, testData_03[1]));
// console.log(test_03(t08_3, testData_03[2]));
// console.log(test_03(t08_4, testData_03[0]));
// console.log(test_03(t08_4, testData_03[1]));
// console.log(test_03(t08_4, testData_03[2]));
// console.log(test_03(t08_5, testData_03[0]));
// console.log(test_03(t08_5, testData_03[1]));
// console.log(test_03(t08_5, testData_03[2]));

// Функции для тестирования
// Создана функция t08. Функция запускается при нажатии .b-8. Функция читает год рождения из input.i-8 и если пользователю больше 16 лет, то выводит единицу в .out-8. Если пользователю меньше 16 лет, то выводит в .out-8 число -1. Если пользователю 16 лет, то выводит 0.

function t08_1() {
  const i8 = document.querySelector("input.i-8");
  const o8 = document.querySelector(".out-8");
  switch (true) {
    case i8.value > 16:
      o8.textContent = 1;
      break;
    case i8.value < 16:
      o8.textContent = -1;
      break;
    case i8.value == 16:
      o8.textContent = 0;
      break;
  }
}

function t08_2() {
  const i8 = +document.querySelector("input.i-8").value;
  const out8 = document.querySelector(".out-8");

  if (i8 > 16) {
    out8.textContent = 1;
  } else if (i8 < 16) {
    out8.textContent = -1;
  } else {
    out8.textContent = 0;
  }
}

function t08_3() {
  let age = +document.querySelector(".i-8").value;
  let text = document.querySelector(".out-8");
  if (age < 16) {
    text.textContent = -1;
  } else if (age > 16) {
    text.textContent = 1;
  } else text.textContent = 0;
}

function t08_4() {
  const n = +document.querySelector(".i-8").value;
  const lim = 16;
  const age = 2024 - n;
  const out = document.querySelector(".out-8");

  if (age === lim) out.textContent = 0;
  else age > lim ? (out.textContent = 1) : (out.textContent = -1);
}

function t08_5() {
  let date = new Date();
  let currYear = date.getFullYear();
  let out8 = document.querySelector(".out-8");
  let inp8 = +document.querySelector(".i-7").value;

  if (currYear - inp8 > 16) out8.innerText = 1;
  else if (currYear - inp8 < 16) out8.innerText = -1;
  else if (currYear - inp8 === 16) out8.innerText = 0;
}

// Task 4 ==================================
// Ниже приведены функции t11_1 - t11_5, функции взяты из загруженных работ ваших коллег. Возможно вы встретите ваш код. Напишите гипотезы тестирования, а затем реализуйте гипотезы в коде функции test_04. Функция должна возвращать true, если тестируемая функция прошла тест (баги не выявлены) и false в остальных случаях. Для тестирования используйте объект с тестовыми данными testData_04.

// Задача из JS24-1 Sprint 13 task 11

let testData_04 = [
  {
    in: [3, -2, 0],
    result: "-2",
  },
  // допишите тестовые данные
];

function test_04(functionName, tData) {}

// Снимите комментарий и проверьте нужную функцию. Потом комментарий можно вернуть - как вам удобнее.
// console.log(test_04(t11_1, testData_04[0]));
// console.log(test_04(t11_1, testData_04[1]));
// console.log(test_04(t11_1, testData_04[2]));
// console.log(test_04(t11_2, testData_04[0]));
// console.log(test_04(t11_2, testData_04[1]));
// console.log(test_04(t11_2, testData_04[2]));
// console.log(test_04(t11_3, testData_04[0]));
// console.log(test_04(t11_3, testData_04[1]));
// console.log(test_04(t11_3, testData_04[2]));
// console.log(test_04(t11_4, testData_04[0]));
// console.log(test_04(t11_4, testData_04[1]));
// console.log(test_04(t11_4, testData_04[2]));
// console.log(test_04(t11_5, testData_04[0]));
// console.log(test_04(t11_5, testData_04[1]));
// console.log(test_04(t11_5, testData_04[2]));

// Функции для тестирования
// Напишите функцию t11, которая принимает три числа как аргументы и выводит в .out-11 меньшее из трех чисел.

function t11_1(a, b, c) {
  const out = document.querySelector(".out-11");
  let result = 0;
  if (a < b && a < c) {
    result = a;
  } else if (b < a && b < c) {
    result = b;
  } else {
    result = c;
  }
  return (out.textContent = result);
}

function t11_2(a, b, c) {
  let out = document.querySelector(".out-11");
  if (a > b && a > c) {
    out.textContent = a;
  } else if (b > a && b > c) {
    out.textContent = b;
  } else {
    out.textContent = c;
  }
}

function t11_3(n1, n2, n3) {
  document.querySelector(".out-11").textContent = Math.max(n1, n2, n3);
}

function t11_4(a, b, c) {
  const out11 = document.querySelector(".out-11");
  let bigNum = 0;
  if (bigNum < a) {
    bigNum = a;
  }
  if (bigNum < b) {
    bigNum = b;
  }
  if (bigNum < c) {
    bigNum = c;
  }
  out11.textContent = bigNum;
}

function t11_5(a, b, c) {
  document.querySelector(".out-11").textContent = Math.min(a, b, c);
}

// Task 5 ==================================
// Ниже приведены функции t06_1 - t06_5, функции взяты из загруженных работ ваших коллег. Возможно вы встретите ваш код. Напишите гипотезы тестирования, а затем реализуйте гипотезы в коде функции test_05. Функция должна возвращать true, если тестируемая функция прошла тест (баги не выявлены) и false в остальных случаях. Для тестирования используйте объект с тестовыми данными testData_05.

// Задача из JS-2.0 Sprint 15 task 6

let testData_05 = [
  {
    a6: [3, -2, 0, 3],
    result: "3",
  },
  // допишите тестовые данные
];

function test_05(functionName, tData) {}

// Снимите комментарий и проверьте нужную функцию. Потом комментарий можно вернуть - как вам удобнее.
// console.log(test_05(t06_1, testData_05[0]));
// console.log(test_05(t06_1, testData_05[1]));
// console.log(test_05(t06_1, testData_05[2]));
// console.log(test_05(t06_2, testData_05[0]));
// console.log(test_05(t06_2, testData_05[1]));
// console.log(test_05(t06_2, testData_05[2]));
// console.log(test_05(t06_3, testData_05[0]));
// console.log(test_05(t06_3, testData_05[1]));
// console.log(test_05(t06_3, testData_05[2]));
// console.log(test_05(t06_4, testData_05[0]));
// console.log(test_05(t06_4, testData_05[1]));
// console.log(test_05(t06_4, testData_05[2]));
// console.log(test_05(t06_5, testData_05[0]));
// console.log(test_05(t06_5, testData_05[1]));
// console.log(test_05(t06_5, testData_05[2]));

// Функции для тестирования
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

let s6 = new Set(a6);

function t06_1() {
  document.querySelector(".out-6").textContent = s6.size;
}

function t06_2() {
  let copySet = [...new Set(a6)];
  let outSix = document.querySelector(".out-6");
  outSix.textContent = copySet.join(" ");
}

function t06_3() {
  let i = new Set(a6);
  let arr = Array.from(i);
  document.querySelector(".out-6").innerHTML = arr;
}

function t06_4() {
  let s6 = new Set(a6);
  console.log(s6);
  let num = s6.size;
  document.querySelector(".out-6").textContent = num;
}

function t06_5() {
  let s6 = new Set(a6);
  document.querySelector(".out-6").textContent = Array.from(s6);
}
