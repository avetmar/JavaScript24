// TASK 01
// По нажатию b-1 выполняется функция f1.+
// Функция с помощью isArray проверяет a1.+
// Результат проверки - вывести в out-1.+
// Проверьте на строке и set.+

let a1 = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];
a1 = "hello";
a1 = new Set([2, 3]);

const f1 = () => {
  document.querySelector(".out-1").innerHTML = Array.isArray(a1);
};

// TASK 02
//Выполним эмуляцию метода isArray.+
// Т.е. функция берет переменную a2 и проверяет, что она является массивом.+
//Возвращает true или false. Один из возможных вариантов решения - применить try catch (вспоминаем. курс JS 2.0) и делаем push в переменную.+
//Если ошибки не выбило - то массив. Если ошибка, то не массив.+

let a2 = [22, 33, 44, 55, 66, 77, 88, 99];
a2 = "hello";
a2 = new Set([2, 3]);

const f2 = () => {
  try {
    a2.push(1);
    console.log(true);
  } catch (err) {
    console.log(false);
  }
};

// TASK 03
//По нажатию b-3 выполняется функция f3.+
// Функция применяет к массиву a3 метод reduce и выводит переменные accum, item в консоль.+
// Обратите внимание на начальное значение accum и значения, учитывая что мы не делаем return.+
// Обратите внимание, сколько раз сработал цикл - на один меньше чем элементов в массиве.+

let a3 = [2, 3, 4, 5];

const f3 = () => {
  console.clear();
  let res = a3.reduce((accum, item) => {
    console.log("accum: " + accum);
    console.log("item: " + item);
    console.log("==============");
  });
};

// TASK 04
//По нажатию b-4 выполняется функция f4.+
// Функция будет похожа на предыдущую, за единственным исключением, мы делаем return.+

let a4 = [2, 3, 4, 5];

const f4 = () => {
  console.clear();
  let res = a4.reduce((accum, item) => {
    console.log("accum: " + accum);
    console.log("item: " + item);
    console.log("==============");
    return item;
  });
};

// TASK 05
//По нажатию b-5 выполняется функция f5.+
// Функция перебирает с помощью reduce массив и суммирует все его элементы.+
// Обратите внимание на область применения reduce - везде где нужно в результате получить одно число на основе массива - reduce подойдет.+
//Итак, в callback функции нам нужно сделать return accum + item. Результат - сумма элементов массива выводится в out-5.+

let a5 = [2, 3, 4, 5, 6];

const f5 = () => {
  let res = a5.reduce((accum, item) => {
    accum += item;
    return accum;
  });
  document.querySelector(".out-5").textContent = res;
};

// TASK 06
// По нажатию b-6 выполняется функция f6.+
// Функция перебирает с помощью reduce массив и перемножает все его элементы.+
// Обратите внимание на область применения reduce - везде где нужно в результате получить одно число на основе массива - reduce подойдет.+
//Результат - произведение элементов массива выводится в out-6.+

let a6 = [2, 3, 4];

const f6 = () => {
  let res = a6.reduce((accum, item) => {
    accum = accum * item;
    return accum;
  });
  document.querySelector(".out-6").textContent = res;
};

// TASK 07
// По нажатию b-7 выполняется функция f7.+
// Функция перебирает с помощью reduce массив и суммирует все числа больше нуля.+
//Результат - сумму положительных элементов массива выводится в out-7.+

let a7 = [3, -4, 5, -6, 7]; // результат 15

const f7 = () => {
  let res = a7.reduce((accum, item) => {
    if (item > 0) {
      accum += item;
    }
    return accum;
  });
  document.querySelector(".out-7").textContent = res;
};

// TASK 08
// По нажатию b-8 выполняется функция f8.+
// Функция перебирает с помощью reduce массив и суммирует все числа больше нуля.+
// Результат - сумму положительных элементов массива выводится в out-8.+
// Обратите внимание, что если вы будете решать предыдущим методом, что получите странный результат.+
// Почему так? Разберитесь, а потом, после функции callback reduce добавьте 0.+

let a8 = [-2, 3, -4, 5, -6, 7]; // результат 15

const f8 = () => {
  let res = a8.reduce((accum, item) => {
    if (item > 0) {
      accum += item;
    }
    return accum;
  }, 0);
  document.querySelector(".out-8").textContent = res;
};

// TASK 09
// По нажатию b-9 выполняется функция f9.+
// Функция перебирает с помощью reduce массив и перемножает все числа больше нуля.+
// Результат - произведение положительных элементов массива выводится в out-9.+

let a9 = [-2, 3, -4, 5, -6, 7]; // 105

const f9 = () => {
  let res = a9.reduce((accum, item) => {
    if (item > 0) {
      accum = accum * item;
    }
    return accum;
  }, 1);
  document.querySelector(".out-9").innerHTML = res;
};

// TASK 10
// По нажатию b-10 выполняется функция f10.+
// Функция должна вывести результирующий массив в out-10.+
// В нулевом элементе массива лежит сумма положительных элементов массива a10, в первом - отрицательных.+
// Решите задачу с помощью одного reduce.+

let a10 = [-2, 3, -4, 5, -6, 7]; // [15,-12]

const f10 = () => {
  let res = a10.reduce(
    (accum, item) => {
      if (item > 0) {
        accum[0] = accum[0] + item;
      } else {
        accum[1] = accum[1] + item;
      }
      return accum;
    },
    [0, 0]
  );
  document.querySelector(".out-10").innerHTML = res;
};

// TASK 11
// По нажатию b-11 выполняется функция f11.+
//Функция должна перебрать массив a11 и вывести в out-11 самое большее число в массиве.+

let a11 = [-2, 3, 14, 5, -6, 7]; // 14

const f11 = () => {
  let res = a11.reduce((accum, item) => {
    // console.log(accum);
    if (item > accum) {
      return item;
    }
    return accum;
  });
  document.querySelector(".out-11").textContent = res;
};

// TASK 12
// По нажатию b-12 выполняется функция f12.+
// Функция должна перебрать массив a12 и вывести в out-12 индекс самого большого числа в массиве. Применяем reduce.+

let a12 = [-2, 3, 14, 15, -6, 7];

const f12 = () => {
  let res = a12.reduce((accum, item, index, array) => {
    console.log(accum);
    if (item > array[accum]) {
      return index;
    } else {
      return accum;
    }
  }, 0);

  document.querySelector(".out-12").innerHTML = res;
};

// TASK 13
// По нажатию b-13 выполняется функция f13.+
// Функция должна перебрать массив a13 и вывести в out-13 длину самого большого вложенного в a13 массива. Применяем reduce.+

let a13 = [[4, 4, 4], [4, 4], [4, 4, 4, 4], [4], [4, 4]];

const f13 = () => {
  let res = a13.reduce((accum, item) => {
    if (item.length > accum) {
      return item.length;
    } else {
      return accum;
    }
  }, 0);
  document.querySelector(".out-13").innerHTML = res;
};

// TASK 14
// По нажатию b-14 выполняется функция f14.+
// Функция должна перебрать массив a14 и вывести в out-14 самый большой вложенный в a14 массив. Применяем reduce.+

let a14 = [[4, 4, 4], [4, 4], [4, 4, 4, 4], [4], [4, 4]];

const f14 = () => {
  let res = a14.reduce((accum, item) => {
    if (item.length > accum.length) {
      return item;
    } else {
      return accum;
    }
  }, []);
  document.querySelector(".out-14").innerHTML = res;
};

// TASK 15
// По нажатию b-15 выполняется функция f15. +
//Функция должна перебрать массив a15 измерений температуры за сутки  и вывести в out-15 среднюю арифметическую температуру. Применяем reduce.+

let a15 = [0, 0, 1, 1, 1, 0, 2, 2, 3, 3, 3, 4, 5, 5, 6, 4, 4, 3, 1, 1, 0, 0, -1];

const f15 = () => {
  let res = a15.reduce((accum, item) => {
    return (accum += item);
  }, 0);

  res = Math.round(res / a15.length);

  document.querySelector(".out-15").innerHTML = res;
};

// TASK 16
// По нажатию b-16 выполняется функция f16. +
// Функция должна выполнить переиндексацию массива a16 и получить объект который состоит из ключей - id и значений name.+
// Применяем reduce. Результирующий объект вывести на страницу в out-16 в формаете ключ пробел значение перенос строки.+

let a16 = [
  { id: 45, name: "Ivar" },
  { id: 464, name: "Astor" },
  { id: 17, name: "Bristol" },
];

// Ожидаю объект вида  { 45 : "Ivar", 464 : "Astor", 17 : "Bristol" }

const f16 = () => {
  let res = a16.reduce((accum, item) => {
    accum[item.id] = item.name;
    return accum;
  }, {});

  let out = "";
  for (let key in res) {
    out += key + " " + res[key] + "<br/>";
  }

  document.querySelector(".out-16").innerHTML = out;
};

// TASK 17
// По нажатию b-17 выполняется функция f17.+
// Функция должна преобразовать объект в массив, который содержит только название стран.+
// Результирующий массив должен находится в a17_res. Также выведите a17_res в out-17 через пробел.+

let a17 = {
  Lyon: "France",
  Berlin: "Germany",
  Paris: "France",
};

let a17_res = [];

const f17 = () => {
  for (let key in a17) {
    if (!a17_res.includes(a17[key])) {
      a17_res.push(a17[key]);
    }
  }
  document.querySelector(".out-17").textContent = a17_res.join(" ");
};

// TASK 18
// По нажатию b-18 выполняется функция f18.+
// Функция должна вывести в out-18 массив a18 в формате ключ пробел значение перенос строки.+
// Для формирования строки для вывода используйте reduce.+

let a18 = [];
a18[100] = 67;
a18[2000] = 15;

const f18 = () => {
  let res = a18.reduce((accum, item, index) => {
    accum += index + " " + item + "<br/>";
    return accum;
  }, "");
  document.querySelector(".out-18").innerHTML = res;
};

// TASK 19
// По нажатию b-19 выполняется функция f19.+
// Функция должна вывести в out-19 массив a19 в формате ключ пробел значение перенос строки.+
//Для формирования строки для вывода используйте reduce.+
//Чтобы из строки сделать массив - split. Результат вывести в out-19.+

let a19 = "hello";

const f19 = () => {
  let res = a19.split("").reduce((accum, item) => {
    accum += a19.indexOf(item) + " " + item + "<br/>";
    return accum;
  }, "");
  document.querySelector(".out-19").innerHTML = res;
};

// TASK 20
// По нажатию b-20 выполняется функция f20.+
// Функция должна вывести в out-20 массив a20 в обратном порядке, через пробел.+
// Т.е. res должен быть массивом с обратным порядком по отношению к a20.+

let a20 = [4, 5, 6];

const f20 = () => {
  let res = a20.reduce((accum, item) => {
    accum.unshift(item);
    return accum;
  }, []);
  document.querySelector(".out-20").textContent = res.join(" ");
};

document.querySelector(".b-1").addEventListener("click", f1);
document.querySelector(".b-2").addEventListener("click", f2);
document.querySelector(".b-3").addEventListener("click", f3);
document.querySelector(".b-4").addEventListener("click", f4);
document.querySelector(".b-5").addEventListener("click", f5);
document.querySelector(".b-6").addEventListener("click", f6);
document.querySelector(".b-7").addEventListener("click", f7);
document.querySelector(".b-8").addEventListener("click", f8);
document.querySelector(".b-9").addEventListener("click", f9);
document.querySelector(".b-10").addEventListener("click", f10);
document.querySelector(".b-11").addEventListener("click", f11);
document.querySelector(".b-12").addEventListener("click", f12);
document.querySelector(".b-13").addEventListener("click", f13);
document.querySelector(".b-14").addEventListener("click", f14);
document.querySelector(".b-15").addEventListener("click", f15);
document.querySelector(".b-16").addEventListener("click", f16);
document.querySelector(".b-17").addEventListener("click", f17);
document.querySelector(".b-18").addEventListener("click", f18);
document.querySelector(".b-19").addEventListener("click", f19);
document.querySelector(".b-20").addEventListener("click", f20);
