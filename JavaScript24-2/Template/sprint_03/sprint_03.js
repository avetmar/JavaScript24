// iTGid.info - курс JS24/2

// Task 01
// Функция должна принимать два аргумента - массив и значение и возращать количество таких значений в массиве.

const t01 = (arr, val) => {
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      count.push(val);
    }
  }
  return count.length;
};

document.querySelector(".b-1").addEventListener("click", () => {
  const arr_01 = [22, 33, 44, 55, 66, 33, 22, 33, 44, 22, 44, 33];
  document.querySelector(".out-1").textContent = t01(arr_01, 44);
});

// Task 02
// Функция должна принимать два аргумента - массив и значение и возвращать массив индексов вхождения значений в массив.

const t02 = (arr, val) => {
  let count = [];
  for (let key in arr) {
    if (arr[key] === val) {
      count.push(key);
    }
  }
  return count;
};

document.querySelector(".b-2").addEventListener("click", () => {
  const arr_02 = [22, 33, 44, 55, 66, 33, 22, 33, 44, 22, 44, 33];
  document.querySelector(".out-2").textContent = t02(arr_02, 33);
});

// Task 03
// Функция должна принимать три аргумента - массив и значение1 и значение2. Функция должна возвращать массив где все вхождения значения1 заменены на значение2.

const t03 = (arr, val1, val2) => {
  let newArr = arr.map((item) => {
    if (item === val1) {
      return val2;
    }
    return item;
  });
  return newArr;
};

document.querySelector(".b-3").addEventListener("click", () => {
  const arr_03 = [22, 33, 44, 55, 66, 33, 22, 33, 44, 22, 44, 33];
  document.querySelector(".out-3").textContent = t03(arr_03, 33, 0);
});

// Task 04
// Функция должна принимать два аргумента - массив и значение. Функция должна заменить первое вхождение значения в массив на нуль и возвратить массив.

const t04 = (arr, val1) => {
  let res = arr.indexOf(val1);
  arr[res] = 0;
  return arr;
};

document.querySelector(".b-4").addEventListener("click", () => {
  const arr_04 = [22, 33, 44, 55, 66, 33, 22, 33, 44, 22, 44, 33];
  document.querySelector(".out-4").textContent = t04(arr_04, 33);
});

// Task 05
// Функция должна принимать два аргумента - массив и значение. Функция должна заменить последнее вхождение значения в массив на нуль и возвратить массив.

const t05 = (arr, val1) => {
  let val = arr.lastIndexOf(val1);
  arr[val] = 0;
  return arr;
};

document.querySelector(".b-5").addEventListener("click", () => {
  const arr_05 = [22, 33, 44, 55, 66, 33, 22, 33, 44, 22, 44, 33];
  document.querySelector(".out-5").textContent = t05(arr_05, 33);
});

// Task 06
// Функция должна принимать два массива и проверять, что входящие в них элементы равны. Под равенством понимается сравнение по типу (строгое), по значению, и по положению в массиве. Функция должна возвращать true/false.

const t06 = (arr1, arr2) => {
  let count = 0;
  if (arr1.length >= arr2.length) {
    count += arr1.length;
  } else {
    count += arr2.length;
  }

  for (let i = 0; i < count; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

document.querySelector(".b-6").addEventListener("click", () => {
  document.querySelector(".out-6").textContent = t06([33, 44], [33, 44]);
});

// Task 07
// Функция должна принимать массив и с помощью метода find искать в нем первое значение которое больше 10 но меньше 13 и возвращать данное значение.

const t07 = (arr1) => {
  return arr1.find((item) => item > 10 && item < 13);
};

document.querySelector(".b-7").addEventListener("click", () => {
  const arr_07 = [1, 2, 3, 4, 4, 5, 66, 22, 12, 13, 14];
  document.querySelector(".out-7").textContent = t07(arr_07);
});

// Task 08
// Функция должна принимать массив и с помощью метода find искать в нем последнее значение которое больше 10 но меньше 13 и возвращать данное значение.

const t08 = (arr1) => {
  let res = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    res.push(arr1[i]);
  }
  return res.find((item) => item > 10 && item < 13);
};

document.querySelector(".b-8").addEventListener("click", () => {
  const arr_08 = [1, 12, 3, 4, 4, 5, 66, 22, 12, 11, 14];
  document.querySelector(".out-8").textContent = t08(arr_08);
});

// Task 09
// Функция должна принимать массив и значение. Функция должна искать вхождение (не строгое) значения в массив, и возвращать первый индекс вхождения.

const t09 = (arr, val) => {
  return arr.findIndex((item) => item == val);
};

document.querySelector(".b-9").addEventListener("click", () => {
  const arr_09 = [1, 12, 3, 4, 4, 5];
  document.querySelector(".out-9").textContent = t09(arr_09, 4);
});

// Task 10
// Функция должна принимать массив и значение. Функция должна искать вхождение (не строгое) значения в массив, и возвращать последний индекс вхождения.

const t10 = (arr, val) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == val) return i;
  }
};

document.querySelector(".b-10").addEventListener("click", () => {
  const arr_10 = [1, 12, 3, 4, 4, 5];
  document.querySelector(".out-10").textContent = t10(arr_10, 4);
});

// Task 11
// Функция должна с помощью forEach наполнить массив res_11 индексами из массива arr_11. Обратите внимание!!! Функция должна выдавать одинаковый результат при любом количестве запусков.

let arr_11 = [10, 20, 30, 40];
let res_11 = [];

const t11 = () => {
  res_11 = [];
  arr_11.forEach((item) => res_11.push(arr_11.indexOf(item)));
  //   console.log(res_11);
};

document.querySelector(".b-11").addEventListener("click", () => {
  t11();
  document.querySelector(".out-11").textContent = res_11;
});

// Task 12
// Функция должна с помощью forEach наполнить массив res_12 индексами четных элементов из массива arr_12. Обратите внимание!!! Функция должна выдавать одинаковый результат при любом количестве запусков.

let arr_12 = [10, 20, 30, 40];
let res_12 = [];

const t12 = () => {
  res_12 = [];
  arr_12.forEach((item) => {
    if (item % 2 === 0) res_12.push(arr_12.indexOf(item));
  });
};

document.querySelector(".b-12").addEventListener("click", () => {
  t12();
  document.querySelector(".out-12").textContent = res_12;
});

// Task 13
// Функция должна с помощью forEach найти сумму элементов массива arr_13 и присвоить в переменную res_13. Обратите внимание!!! Функция должна выдавать одинаковый результат при любом количестве запусков.

let arr_13 = [10, 20, 30, 40];
let res_13 = 0;

const t13 = () => {
  res_13 = 0;
  arr_13.forEach((item) => (res_13 += item));
};

document.querySelector(".b-13").addEventListener("click", () => {
  t13();
  document.querySelector(".out-13").textContent = res_13;
});

// Task 14
// Перепишите код функции с помощью forEach вместо цикла

let arr_14 = [10, 20, 30, 40, 50, 60];
let res_14 = [];

const t14 = () => {
  res_14 = [];
  //   for (let i = 0; i < arr_14.length; i += 2) {
  //     res_14.push(arr_14.at(i));
  //   }
  arr_14.forEach((item) => {
    if (arr_14.indexOf(item) % 2 === 0) res_14.push(item);
  });
};

document.querySelector(".b-14").addEventListener("click", () => {
  t14();
  document.querySelector(".out-14").textContent = res_14;
});

// Task 15
// Изучите работу функции. Сделайте вывод о методе forEach.

let arr_15 = [10, 20, 30];
arr_15[100] = 40;
arr_15[200] = 50;
arr_15[300] = 60;

let res_15 = [];

const t15 = () => {
  res_15 = [];
  arr_15.forEach((item) => {
    res_15.push(item);
  });
};

document.querySelector(".b-15").addEventListener("click", () => {
  console.log(arr_15);
  t15();
  console.log(res_15);
});
