// Task 1
// Перепишите функцию t01 как стрелочную.

const t01 = () => {
  const a = 88;
  const b = 99;
  document.querySelector(".out-1").textContent = a * b;
};

document.querySelector(".b-1").onclick = t01;

// Task 2
// Перепишите функцию t02 как стрелочную.

const t02 = (a, b) => (document.querySelector(".out-2").textContent = a * b);

document.querySelector(".b-2").onclick = () => t02(10, 22);

// Task 3
// Перепишите функцию t03 как стрелочную.

const t03 = (a, b) => {
  let c = a.toLowerCase();
  let d = b.toLowerCase();
  return c > d ? c : d;
};

document.querySelector(".b-3").onclick = () => (document.querySelector(".out-3").textContent = t03("hello", "Heilo"));

// Task 4
// Перепишите функцию t04 как стрелочную.

const t04 = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

document.querySelector(".b-4").onclick = () => (document.querySelector(".out-4").textContent = t04(10, 20));

// Task 5
// Перепишите функцию t05 как стрелочную.

const t05 = (str) => str[0].toUpperCase() + str.toLowerCase().slice(1);

document.querySelector(".b-5").onclick = () => (document.querySelector(".out-5").textContent = t05("hErAlD"));

// Task 6
// Перепишите функцию t06 как стрелочную.

const t06 = (str) => str === str.toLowerCase(); // Тут и в предыдущем можно аргумент без скобок написать, у меня плагин обратно скобки ставит

document.querySelector(".b-6").onclick = () => (document.querySelector(".out-6").textContent = t06("Elric"));

// Task 7
// Перепишите функцию t07 как стрелочную.

const t07 = (password, length) => password.length >= length;

document.querySelector(".b-7").onclick = () => (document.querySelector(".out-7").textContent = t07("While the Gods Laugh", 9));

// Task 8
// Перепишите функцию t08 как стрелочную.

const t08 = (url) => {
  const img = document.createElement("img");
  img.src = url;
  return img;
};

document.querySelector(".b-8").onclick = () => {
  const image = t08("./images/elric.jpg");
  document.querySelector(".out-8").append(image);
};

// Task 9
// Перепишите функцию t09 как стрелочную.

const t09 = (list) => {
  const ul = document.querySelector(list);
  const liElements = ul.querySelectorAll("li");
  for (let i = 0; i < liElements.length; i++) {
    liElements[i].insertAdjacentText("afterbegin", i + 1 + ". ");
  }
};

document.querySelector(".b-9").onclick = () => t09(".list-9");

// Task 10
// Перепишите функцию t10 как стрелочную.

const t10 = (f) => {
  const p = document.querySelector(f);
  const spans = p.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++) {
    const text = spans[i].textContent;
    const mark = document.createElement("mark");
    mark.textContent = text;
    spans[i].replaceWith(mark);
  }
};

document.querySelector(".b-10").onclick = () => t10(".p-10");

// Task 11
// Напишите стрелочную функцию t11, которая получает value из input.i-11 и возвращает true если число в input больше нуля и false если равно или меньше.

const t11 = () => +document.querySelector(".i-11").value > 0;

document.querySelector(".b-11").onclick = () => (document.querySelector(".out-11").textContent = t11());

// Task 12
// Напишите стрелочную функцию t12, которая получает как аргумент температуру воды и если температура:
// от 0 до 20 возвращает строку 'cold'
// oт 21 до 35 возвращает строку 'normal'
// от 36 до 50 возвращает строку 'hot'
// от 51 до 100 возвращает строку 'very hot'
// все температуры указаны "включительно"

const t12 = (temp) => {
  if (temp >= 0 && temp < 21) {
    return "cold";
  } else if (temp > 20 && temp < 36) {
    return "normal";
  } else if (temp > 35 && temp < 51) {
    return "hot";
  } else if (temp > 50 && temp < 101) {
    return "very hot";
  }
};

document.querySelector(".range-12").oninput = () => {
  const t = +document.querySelector(".range-12").value;
  document.querySelector(".out-12").textContent = t12(t);
};

// Task 13
// Напишите стрелочную функцию t13, которая получает аргумент - строку и возвращает строку очищенную от пробелов.

const t13 = (a) => a.replace(/\s+/g, "");

document.querySelector(".b-13").onclick = () => {
  let str = "  Stormbringer    ";
  console.log(t13(str));
};

// Task 14
// Напишите стрелочную функцию t14, которая получает аргумент - число и возвращает true если число четное и false в противном случае.

const t14 = (num) => num % 2 === 0;

document.querySelector(".b-14").onclick = () => {
  const n = +document.querySelector(".i-14").value;
  document.querySelector(".out-14").textContent = t14(n);
};

// Task 15
// Напишите стрелочную функцию t15, которая получает аргумент - имя класса и проверяет есть ли такой элемент на странице. Возвращает true если есть и false если нет.

const t15 = (cl) => document.querySelector("html").classList.contains(cl);

document.querySelector(".b-15").onclick = () => {
  document.querySelector(".out-15").textContent = t15(".out-155555555");
};

// Task 16
// Напишите стрелочную функцию t16, которая получает аргумент - строку и возвращает true, если строка содержит символ '@'  и false если не содержит.

const t16 = (str) => {
  if (str.includes("@")) {
    return true;
  } else {
    return false;
  }
};

document.querySelector(".b-16").onclick = () => {
  document.querySelector(".out-16").textContent = t16("example@mail.ua");
};

// Task 17
// Напишите стрелочную функцию t17, которая возвращает число, такое, чтобы выражение ниже давало true.

const t17 = () => 10;

document.querySelector(".b-17").onclick = () => {
  document.querySelector(".out-17").textContent = t17() + 5 === 15;
};

// Task 18
// Напишите стрелочную функцию t18, которая возвращает число, такое, чтобы выражение ниже давало true.

const t18 = () => 2;

document.querySelector(".b-18").onclick = () => {
  document.querySelector(".out-18").textContent = (100 - 10 * t18()) / t18() === 40;
};

// Task 19
// Напишите стрелочную функцию t19, которая возвращает булево значение, такое, чтобы выражение ниже давало true.

const t19 = () => false;

document.querySelector(".b-19").onclick = () => {
  document.querySelector(".out-19").textContent = !t19();
};

// Task 20
// Напишите стрелочную функцию t20, которая возвращает булево значение, такое, чтобы выражение ниже давало true.

const t20 = () => true;

document.querySelector(".b-20").onclick = () => {
  document.querySelector(".out-20").textContent = true !== !t20();
};
