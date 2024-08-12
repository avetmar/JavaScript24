// iTGid.info - курс JS24/2

// !!! Описание api можно найти на сайте https://api.itgid.info
// Обратите внимание!!! К файлу HTML подключен файл config.js с двумя константами. В одной - url адрес сервера. Во вторую впишите ваш APIKEY из кабинета. При формировании запросов применяйте данные константы, не пишите ваш apikey напрямую.
const requestHeaders = new Headers();
requestHeaders.append("apikey", APIKEY);
// Task 01
// Напишите функцию t01, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time и выводит количество минут в .out-1. Применяйте синтаксис then. Ответ приходит в формате json. Авторизация для данной функции не нужна.

const t01 = () => {
  fetch(URL + "time")
    .then((response) => response.json())
    .then((result) => {
      document.querySelector(".out-1").textContent = result["time"]["m"];
    });
};

document.querySelector(".b-1").addEventListener("click", t01);

// Task 02
// Напишите функцию t02, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time и выводит количество часов в .out-2. Применяйте синтаксис async. Авторизация для данной функции не нужна.

const t02 = async () => {
  const response = await fetch(URL + "time");
  const result = await response.json();
  document.querySelector(".out-2").textContent = result["time"]["h"];
};

document.querySelector(".b-2").addEventListener("click", t02);

// Task 03
// Напишите функцию t03, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time и выводит год в .out-3. Применяйте синтаксис async. Авторизация для данной функции не нужна. Для получения года добавьте в запрос параметр y равный 1.

const t03 = async () => {
  const response = await fetch(URL + "time?y=1");
  const result = await response.json();
  document.querySelector(".out-3").textContent = result["time"]["y"];
};

document.querySelector(".b-3").addEventListener("click", t03);

// Task 04
// Напишите функцию t04, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time и выводит год в .out-4. Применяйте синтаксис async. Авторизация для данной функции не нужна. Для получения года добавьте в запрос параметр y равный 1. Также добавьте в запрос параметр h равный 12 и выведите через пробел от года значение поля am-pm.

const t04 = async () => {
  const response = await fetch(URL + "time?y=1&h=12");
  const result = await response.json();
  document.querySelector(".out-4").textContent = `${result["time"]["y"]} ${result["time"]["am-pm"]}`;
};

document.querySelector(".b-4").addEventListener("click", t04);

// Task 05
// Напишите функцию t05, которая отправляет POST запрос на URL адрес https://api.itgid.info/api/time-post?h=12 и выводит год в .out-5. Применяйте синтаксис async. Авторизация для данной функции не нужна. В .out-5 выведите количество часов.

const t05 = async () => {
  const response = await fetch(URL + "time-post?h=12", {
    method: "POST",
  });
  const result = await response.json();
  document.querySelector(".out-5").textContent = result["time"]["h"];
};

document.querySelector(".b-5").addEventListener("click", t05);

// Task 06
// Напишите функцию t06, которая отправляет GET запрос на URL адрес /api/3618/js24/fallout-quote и выводит полученную цитату в .out-6. Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t06 = async () => {
  const response = await fetch(URL + "3618/js24/fallout-quote", {
    headers: requestHeaders,
  });
  const result = await response.json();
  document.querySelector(".out-6").textContent = result["text"];
};

document.querySelector(".b-6").addEventListener("click", t06);

// Task 07
// Напишите функцию t07, которая отправляет POST запрос на URL адрес /api/3618/js24/stone-paper и выводит из объекта ответа свойство text в .out-7. Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t07 = async () => {
  const response = await fetch(URL + "3618/js24/stone-paper", {
    method: "POST",
    headers: requestHeaders,
  });
  const result = await response.json();
  //   console.log(result);
  document.querySelector(".out-7").textContent = result["text"];
};

document.querySelector(".b-7").addEventListener("click", t07);

// Task 08
// Напишите функцию t08, которая отправляет POST запрос на URL адрес /api/3618/employee/read/7 (число 7 берется из переменной foo_8. Функция выводит из объекта ответа свойство email в .out-8. Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let foo_8 = 3;

const t08 = async () => {
  const response = await fetch(URL + "3618/employee/read/" + foo_8, {
    method: "POST",
    headers: requestHeaders,
  });
  const result = await response.json();
  //   console.log(result);
  document.querySelector(".out-8").textContent = result["result"]["email"];
};

document.querySelector(".b-8").addEventListener("click", t08);

// Task 09
// Напишите функцию t09, которая отправляет GET запрос на URL адрес /api/3618/employee/read?id=7 (число 7 берется из переменной foo_9. Функция выводит из объекта ответа свойство email в .out-9. Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let foo_9 = 3;

const t09 = async () => {
  const response = await fetch(URL + "3618/employee/read?id=" + foo_8, {
    method: "GET",
    headers: requestHeaders,
  });
  const result = await response.json();
  //   console.log(result);
  document.querySelector(".out-9").textContent = result["result"]["email"];
};

document.querySelector(".b-9").addEventListener("click", t09);

// Task 10
// Напишите функцию t10, которая отправляет POST запрос на URL адрес /api/3618/employee/read. Функция выводит из объекта ответа свойствa email в .out-10 через пробел. Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t10 = async () => {
  const response = await fetch(URL + "3618/employee/read", {
    method: "POST",
    headers: requestHeaders,
  });
  const result = await response.json();

  const emails = result["result"];
  let out = "";

  for (let key of emails) {
    out += key["email"] + " ";
  }

  document.querySelector(".out-10").textContent = out;
};

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11
// Напишите функцию t11, которая отправляет GET запрос на URL адрес /api/3618/sr/read?race=gaal. Cтрока gaal берется из value select.s11. Функция выводит из объекта ответа свойствa result.description в .out-11 (применяйте innerHTML). Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t11 = async () => {
  const gaal = document.querySelector(".s-11").value;

  const response = await fetch(URL + "3618/sr/read?race=" + gaal, {
    headers: requestHeaders,
  });
  const result = await response.json();

  document.querySelector(".out-11").innerHTML = result["result"]["description"];
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Напишите функцию t12, которая отправляет GET запрос на URL адрес /api/3618/sr/read/gaal. Cтрока gaal берется из value select.s11. Функция выводит из объекта ответа изображение (свойство ) в .out-12. Адрес изображения формируется конкатенацией адреса сервера https://itgid.info и ссылкой из ответа result.image. При повторном запуске изображение не должно дублироваться.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t12 = async () => {
  const gaal = document.querySelector(".s-11").value;

  const response = await fetch(URL + "3618/sr/read/" + gaal, {
    headers: requestHeaders,
  });
  const result = await response.json();
  console.log(result);

  let img = "https://api.itgid.info" + result["result"]["image"];
  document.querySelector(".out-12").innerHTML = '<img src="' + img + '">';
};

document.querySelector(".b-12").addEventListener("click", t12);

// Task 13
// Напишите функцию t13, которая отправляет GET запрос на URL адрес /api/3618/random/random-number. Сервер возращает объект со случайным числом (поле random-number) от 0 до 100. Выведите данное число в .out-13.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t13 = async () => {
  const response = await fetch(URL + "3618/random/random-number", {
    headers: requestHeaders,
  });
  const result = await response.json();
  document.querySelector(".out-13").textContent = result["random-number"];
};

document.querySelector(".b-13").addEventListener("click", t13);

// Task 14
// Напишите функцию t14, которая отправляет GET запрос на URL адрес /api/3618/random/random-number. Сервер возращает объект со случайным числом (поле random-number) . Выведите данное число в .out-14. В url запроса добавьте параметры min равное переменной a, и max равное переменной b.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let a = 200;
let b = 210;

const t14 = async () => {
  const response = await fetch(URL + "3618/random/random-number?min=" + a + "&max=" + b, {
    headers: requestHeaders,
  });
  const result = await response.json();
  document.querySelector(".out-14").textContent = result["random-number"];
};

document.querySelector(".b-14").addEventListener("click", t14);

// Task 15
// Напишите функцию t15, которая отправляет POST запрос на URL адрес /api/3618/random/random-number. Сервер возращает объект со случайным числом (поле random-number) . Выведите данное число в .out-15. В body запроса передавайте formData данные min и max взятые из переменных a, b.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t15 = async () => {
  const formData = new FormData();
  formData.append("min", a);
  formData.append("max", b);

  const response = await fetch(URL + "3618/random/random-number", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });
  const result = await response.json();
  document.querySelector(".out-15").textContent = result["random-number"];
};

document.querySelector(".b-15").addEventListener("click", t15);

// Task 16
// Напишите функцию t16, которая отправляет GET запрос на URL адрес /api/3618/random/random-string?length=5. Сервер возращает объект со строкой случайных символов длиной 5 (в данном случае). Число 5 берите из переменной len. Выведите строку в .out-16.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let len = 5;

const t16 = async () => {
  const response = await fetch(URL + "3618/random/random-string?length=" + len, {
    headers: requestHeaders,
  });
  const result = await response.json();
  document.querySelector(".out-16").textContent = result["random-string"];
};

document.querySelector(".b-16").addEventListener("click", t16);

// Task 17
// Напишите функцию t17, которая отправляет GET запрос на URL адрес /api/3618/gow/world/niflheim. Сервер возвращает объект с описанием мира niflheim. Строка niflheim берется из select.s-17. Выведите свойство population в .out-17.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t17 = async () => {
  const world = document.querySelector(".s-17").value;

  const response = await fetch(URL + "3618/gow/world/" + world, {
    headers: requestHeaders,
  });
  const result = await response.json();
  //   console.log(result);
  document.querySelector(".out-17").textContent = result["world"]["population"];
};

document.querySelector(".b-17").addEventListener("click", t17);

// Task 18
// Напишите функцию t18, которая отправляет POST запрос на URL адрес /api/3618/gow/rune. Сервер возвращает объект с рунами. Выведите в .out-18 изображения рун. При повторном вызове функции вывод не должен дублироваться.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

const t18 = async () => {
  const world = document.querySelector(".s-17 option:checked").textContent;

  const response = await fetch(URL + "3618/gow/rune", {
    method: "POST",
    headers: requestHeaders,
  });
  const result = await response.json();

  let img = "https://api.itgid.info" + result["rune"][world];
  document.querySelector(".out-18").innerHTML = '<img src="' + img + '">';
};

document.querySelector(".b-18").addEventListener("click", t18);

// Task 19
// Напишите функцию t19, которая отправляет POST запрос на URL адрес /api/3618/random/generate-password. В body POST запроса передайте свойство length равное значению из переменной pass. Сервер возвращает сгенерированный пароль указанной длины. Выведите пароль в .out-19.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let pass = 8;

const t19 = async () => {
  const formData = new FormData();
  formData.append("length", pass);

  const response = await fetch(URL + "3618/random/generate-password", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });
  const result = await response.json();

  document.querySelector(".out-19").textContent = result["password"];
};

document.querySelector(".b-19").addEventListener("click", t19);

// Task 20
// Напишите функцию t20, которая отправляет GET запрос на URL адрес /api/3618/js24/stone-paper-game?game=бумага. Где строка 'бумага' взята из переменной step. Сервер ответит вам результатом игры камень-ножницы-бумага. Выведите result игры в .out-20.
// Применяйте синтаксис async. Для данной задачи необходима авторизация с ключом для данного спринта.

let step = "бумага";

const t20 = async () => {
  const response = await fetch(URL + "3618/js24/stone-paper-game?game=" + step, {
    headers: requestHeaders,
  });
  const result = await response.json();
  //   console.log(result);
  document.querySelector(".out-20").textContent = result["result"];
};

document.querySelector(".b-20").addEventListener("click", t20);
