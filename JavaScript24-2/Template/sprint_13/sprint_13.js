// iTGid.info - курс JS24/2

// Task 01
// Напишите функцию, которая с помощью timeout выводит в .out-1 строку 'done'. Время  - 10 секунд.

function t01() {
  setTimeout(() => {
    document.querySelector(".out-1").textContent = "done";
  }, 10000);
}

document.querySelector(".b-1").addEventListener("click", t01);

// Task 02
// Напишите функцию, которая выводит в .out-21 время в секундах (unixtime), затем запускает timeout (5 секунд), который выводит в .out-22 время в unixtime (секундах).

function t02() {
  document.querySelector(".out-21").textContent = Math.round(Date.now() / 1000);
  setTimeout(() => {
    document.querySelector(".out-22").textContent = Math.round(Date.now() / 1000);
  }, 5000);
}

document.querySelector(".b-2").addEventListener("click", t02);

// Task 03
// Напишите функцию, которая запускает timeout и через 3 секунды присваивает ul.ul-3 класс hide.

function t03() {
  setTimeout(() => {
    document.querySelector(".ul-3").classList.add("hide");
  }, 3000);
}

document.querySelector(".b-3").addEventListener("click", t03);

// Task 04
// Изучите принцип работы функции ниже. Очень важно разобраться в ее работе!!! Если сложности - то задайте вопрос в чате!!!

let index_4 = 0;
let timeout_4;

const arr4 = [1, 0, 0, 0];

function t04() {
  document.querySelector(".out-4").textContent = arr4.join("__");
  arr4[index_4] = 0;
  index_4 + 1 >= arr4.length ? (index_4 = 0) : index_4++;
  arr4[index_4] = 1;
  timeout_4 = setTimeout(t04, 1000);
}

document.querySelector(".b-4").addEventListener("click", t04);

// Task 05
// Напишите функцию, которая делает clearTimeout timeout_4.

function t05() {
  clearTimeout(timeout_4);
}

document.querySelector(".b-5").addEventListener("click", t05);

// Task 06
// Напишите функцию, которая работает по принципу таск 4, и с помощью таймера присваивает по очереди изображению в блоке .out-6 класс bordered (каждые 2 секунды). Для лучшего понимания - посмотрите видео на сайте.
let index_6 = 0;
let timeout_6;

const arr6 = document.querySelectorAll(".out-6 img");

function t06() {
  arr6[index_6].classList.toggle("bordered");
  index_6 + 1 >= arr6.length ? (index_6 = 0) : index_6++;
  arr6[index_6].classList.toggle("bordered");
  timeout_6 = setTimeout(t06, 2000);
}

document.querySelector(".b-6").addEventListener("click", t06);

// Task 07
// Напишите функцию, которая останавливает таймаут из задачи 6.

function t07() {
  clearTimeout(timeout_6);
}

document.querySelector(".b-7").addEventListener("click", t07);

// Task 08
// Напишите функцию, которая делает для изображений в .out-8 анимацию аналогичную той, что в задаче 6. Помимо этого, текущее изображение выводится в .out-8-max. Для большего понимания - смотрите видео на сайте.
let index_8 = 0;
let timeout_8;
const arr8 = document.querySelectorAll(".out-8 img");

arr8.forEach((item, index) => {
  item.addEventListener("click", () => {
    arr8[index_8].classList.remove("bordered");
    t09();
    dublicate(index);
    arr8[index].classList.add("bordered");
    index_8 = index;
  });
});

function t08() {
  arr8[index_8].classList.remove("bordered");
  index_8 + 1 >= arr8.length ? (index_8 = 0) : index_8++;
  arr8[index_8].classList.add("bordered");
  dublicate(index_8);
  timeout_8 = setTimeout(t08, 2000);
}

function dublicate(img) {
  document.querySelector(".out-8-max img").setAttribute("src", arr8[img].getAttribute("src"));
}

document.querySelector(".b-8").addEventListener("click", t08);

// Task 09
// Напишите функцию, которая останавливает таймаут из задачи 8.

function t09() {
  clearTimeout(timeout_8);
}

document.querySelector(".b-9").addEventListener("click", t09);

// Task 10
// Напишите функцию, которая выполняется при клике на изображении внутри .out-8 вначале останавливает timeout для задачи 8. Затем получает src изображения на котором кликнули (добавляет bordered) и присваивает его в src изображения внутри .out-8-max. И, затем, обновляет index-8 (у вас переменная счетчик может называться иначе) до актуального состояния. Таким образом, при нажатии кнопки b-8 анимация начнется с актуального места. Для лушшего понимания - смотрите видео на сайте. Подсказка - изображение, на которое клинкули можно получить через this.

function t10() {
  // я как то по своему сделал (задание делал по видео), потом увидел Таск 10 . надеюсь так можно)
}

document.querySelectorAll(".out-8 img").forEach((item) => item.addEventListener("click", t10));

// Task 11
// Напишите функцию, с интервалом (setInterval) 2 секунды выводит в .out-11 числа 10, 20, 30 и т.д. После вывода числа 50 интервал нужно очищать. Числа дожны затирать предыдущие выводы.

function t11() {
  let count = 10;
  let interval = setInterval(function () {
    document.querySelector(".out-11").textContent = count;
    count += 10;
    if (count > 50) clearInterval(interval);
  }, 2000);
}

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Напишите функцию, которая с интевалом 1 секунда выводит в .out-12 текущее время в формате минуты:секунды. Т.е. например 04:35. И минуты и секунды выводятся с текущим нулем.
const lZ = (data) => String(data).padStart(2, "0");

function t12() {
  setInterval(() => {
    const date = new Date();
    let out = [];
    out.push(lZ(date.getMinutes()));
    out.push(lZ(date.getSeconds()));

    document.querySelector(".out-12").textContent = out.join(":");
  }, 1000);
}

document.querySelector(".b-12").addEventListener("click", t12);

// Task 13
// Напишите функцию, которая с интервалом 1 секунда выводит в .out-13 количество минут и секунд до конца часа. Формат вывода - как в предыдущей задаче. Т.е. если время 12:18 то вывестись должно 48:42 затем 48:41 и так далее.

function t13() {
  setInterval(() => {
    const date = new Date();
    const minutes = 60 - date.getMinutes();
    const seconds = 60 - date.getSeconds();
    let out = [];
    out.push(lZ(minutes));
    out.push(lZ(seconds));

    document.querySelector(".out-13").textContent = out.join(":");
  }, 1000);
}

document.querySelector(".b-13").addEventListener("click", t13);

// Task 14
// Напишите функцию, которая с интервалом одна секунда выводит строку в .out-14 вида '100000' затем '010000' затем '001000' и так далее. Перемещение 1 циклично.

function t14() {
  let str = "100000";

  setInterval(() => {
    document.querySelector(".out-14").textContent = str;
    str = str.slice(-1) + str.slice(0, -1);
  }, 1000);
}

document.querySelector(".b-14").addEventListener("click", t14);

// Task 15
// Напишите функцию, которая с интервалом в 1.5 секунды меняет src изображения в .out-15. Изображение dog заменяется на leaf, затем на spaceship, затем на witch и по кругу.
const arr_15 = ["dog", "leaf", "spaceship", "witch"];

function t15() {
  let i = 0;
  setInterval(() => {
    console.log(arr_15[i]);
    document.querySelector(".out-15 img").setAttribute("src", `./images/${arr_15[i]}.png`);
    i + 1 >= arr_15.length ? (i = 0) : i++;
  }, 1500);
}

document.querySelector(".b-15").addEventListener("click", t15);
