// iTGid.info - курс JS24/2

// Task 01
// Создайте файл 01.json, который содержит массив с числами 5, 13, 47. Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 02
// Создайте файл 02.json, который содержит массив со значениями 'hello', 'hi', 3, 14, 15.  Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 03
// Создайте файл 03.json, который содержит массив со значениями 3.14, 3.15, -211, -211.7.  Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 04
// Создайте файл 04.json, который содержит массив со значениями true, false. Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 05
// Создайте файл 05.json, который содержит пустой массив. Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 06
// Создайте файл 06.json, который содержит массив, внутри которого находится число -273, строка '-273', массив [22, 33]. Валидируйте содержимое файла с помощью онлайн валидатором JSON.

// Task 07
// Создайте файл 07.json, который содержит объект вложенный в переменную obj_07.

let obj_07 = {
  name: "John",
  age: 30,
  car: null,
};

// Task 08
// Создайте файл 08.json, который содержит объект вложенный в переменную obj_08.

let obj_08 = {
  title: "Teenage Mutant Ninja Turtles",
  characters: ["Leonardo", "Shredder", "Krang"],
  produced: "Mirage Studios",
};

// Task 09
// Создайте файл 09.json, который содержит объект вложенный в переменную obj_09.

let obj_09 = {
  title: "Teenage Mutant Ninja Turtles",
  characters: {
    main: ["Leonardo", "Raphael", "Donatello", "Michelangelo"],
    second: {
      master: "Splinter",
      friend: ["April O'neil", "Casey Jones"],
    },
  },
};

// Task 10
// Запустите функцию t10. Изучите, что она возвращает.

const t10 = async (file) => {
  const response = await fetch(file);
  const data = await response.json();
  return data;
};

document.querySelector(".b-10").addEventListener("click", async function () {
  console.log(await t10("10.json"));
});

// Task 11
// Запустите функцию t11. Изучите, что она возвращает.

const t11 = async (file) => {
  try {
    const response = await fetch(file);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

document.querySelector(".b-11").addEventListener("click", async function () {
  console.log(await t11("11.json"));
});

// Task 12
// Изучите, как работает функция t12.

const t12 = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return error;
  }
};

document.querySelector(".b-12").addEventListener("click", async function () {
  let data = document.querySelector(".ta-12").value;
  console.log(t12(data));
});

// Task 13
// Изучите, как работает функция t12. Напишите функцию t13, которая получает данные и если данные - валидная строка JSON, то выводит в .out-13 строку '1', если не валидные - строку '0'. Валидность будем проверять возможностью реализовать JSON.parse().

const t13 = (data) => {
  try {
    if (JSON.parse(data)) {
      document.querySelector(".out-13").textContent = "1";
    }
  } catch (error) {
    document.querySelector(".out-13").textContent = "0";
  }
};

document.querySelector(".b-13").addEventListener("click", async function () {
  let data = document.querySelector(".ta-13").value;
  t13(data);
});

// Task 14
// Изучите работу функции t10. Напишите аналогичную функцию t14, которая возвращает содержимое файла 14.json.

const t14 = async () => {
  const response = await fetch("14.json");
  const data = await response.json();
  return data;
};

document.querySelector(".b-14").addEventListener("click", async function () {
  console.log(await t14());
});

// Task 15
// Напишите  функцию t15, которая читает 15.json и возвращает значение из массива с индексом 2.

const t15 = async () => {
  const response = await fetch("15.json");
  const data = await response.json();
  return data[2];
};

document.querySelector(".b-15").addEventListener("click", async function () {
  console.log(await t15());
});

// Task 16
// Напишите функцию t16, которая читает 16.json и возвращает сумму элементов в массиве, записанном в файл json.

const t16 = async () => {
  const response = await fetch("16.json");
  const data = await response.json();
  let out = 0;
  for (let i = 0; i < data.length; i++) {
    out += data[i];
  }
  return out;
};

document.querySelector(".b-16").addEventListener("click", async function () {
  console.log(await t16());
});

// Task 17
// Напишите функцию t17. Функция читает 17.json и возвращает true, если в массиве из json файла только числа и false в противном случае.

const t17 = async () => {
  const response = await fetch("17.json");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (!Number.isInteger(data[i])) return false;
  }
  return true;
};

document.querySelector(".b-17").addEventListener("click", async function () {
  console.log(await t17());
});

// Task 18
// Напишите функцию t18. Функция читает 18.json и возвращает массив, который представляет собой отфильтрованный массив из файла, который содержит только числа.

const t18 = async () => {
  const response = await fetch("18.json");
  const data = await response.json();
  const out = data.filter((item) => Number.isInteger(item));
  return out;
};

document.querySelector(".b-18").addEventListener("click", async function () {
  console.log(await t18());
});

// Task 19
// Напишите функцию t19, которая читает 19.json и возвращает время сообщения в формате гггг-мм-дд_чч:мм. Т.е. например 2024-06-04_22:10. Перевод осуществляетм без настройки-изменения часового пояса. Не забывайте про +1 для месяца.

const t19 = async () => {
  const response = await fetch("19.json");
  const data = await response.json();
  const time = new Date(data[0].time);
  let out = "";
  out += time.getFullYear() + "-";
  out += time.getMonth() + 1 + "-";
  out += time.getDate() + "_";
  out += time.getHours() + ":";
  out += time.getMinutes();

  return out;
};

document.querySelector(".b-19").addEventListener("click", async function () {
  console.log(await t19());
});

// Task 20
// Напишите функцию t20, которая читает 20.json и возвращает объект с ключами name, age, department. Объект - одноуровневый.

const t20 = async () => {
  const response = await fetch("20.json");
  const data = await response.json();

  const items = ["name", "age", "department"];
  let obj = {};

  for (let i = 0; i < items.length; i++) {
    for (key in data) {
      if (data[key][items[i]]) {
        obj[items[i]] = data[key][items[i]];
      }
    }
  }

  return obj;
};

document.querySelector(".b-20").addEventListener("click", async function () {
  console.log(await t20());
});
