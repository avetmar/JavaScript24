// Task 1
// Добавьте через addEventListener событие 'click' на параграф .p-1. При клике запускается стрелочная функция t01, которая при событии клик дописывает в .out-1 символ единица. Т.е. кликнули два раза, в .out-1 будет '11'.

const t01 = () => (document.querySelector(".out-1").textContent += 1);

document.querySelector(".p-1").addEventListener("click", t01);

// Task 2
// Добавьте через addEventListener событие 'dblclick' на кнопку .b-2. При событии запускается стрелочная функция t02, которая окращивает .out-2 в backgroundColor 'orange'.

const t02 = () => (document.querySelector(".out-2").style.backgroundColor = "orange");

document.querySelector(".b-2").addEventListener("dblclick", t02);

// Task 3
// Добавьте через addEventListener событие 'mouseup' на кнопку .p-3. При событии запускается стрелочная функция t03, которая выводит в .out-3 строку 'mouseup'.

const t03 = () => (document.querySelector(".out-3").textContent = "mouseup");

document.querySelector(".p-3").addEventListener("mouseup", t03);

// Task 4
// Добавьте через addEventListener событие 'mousedown' на кнопку .p-4. При событии  запускается стрелочная функция t04, которая при выводит в .out-4 строку 'mousedown'.

const t04 = () => (document.querySelector(".out-4").textContent = "mousedown");

document.querySelector(".p-4").addEventListener("mousedown", t04);

// Task 5
// Добавьте через addEventListener событие 'mouseover' на .block-5.  При событии запускается стрелочная функция t05, которая выводит в .out-5 строку 'mousedown'.

const t05 = () => (document.querySelector(".out-5").textContent = "mousedown");

document.querySelector(".block-5").addEventListener("mouseover", t05);

// Task 6
// Добавьте через addEventListener событие 'mouseout' на .block-6.  При событии запускается стрелочная функция t06, которая добавляет классу .block-6 класс 'bg-orange'.

const t06 = () => document.querySelector(".block-6").classList.add("bg-orange");

document.querySelector(".block-6").addEventListener("mouseout", t06);

// Task 7
// Добавьте событие click на кнопку .b-7, по событию запускается стрелочная функция t07. Функция отключает событие contextmenu на блоке .block-7.

const t07 = () => document.querySelector(".block-7").addEventListener("contextmenu", (event) => event.preventDefault());

document.querySelector(".b-7").addEventListener("click", t07);

// Task 8
// Добавьте событие mousemove на блок .block-8. При событии запускается стрелочная функция t08.

let w = 100;

const t08 = () => {
  w++;
  document.querySelector(".block-8").style.width = w + "px";
};

document.querySelector(".block-8").addEventListener("mousemove", t08);

// Task 9
// Добавьте событие click на .block-9. При клике запускается функция t09 (стрелочная). Функция при срабатывании поворачивает блок .block-9 на 15 градусов.
// Т.е. после двух кликов будет блок повернут на 30 градусов.
let r = 0;

const t09 = () => {
  r = r + 15;
  document.querySelector(".block-9").style.transform = "rotate(" + r + "deg)";
};

document.querySelector(".block-9").addEventListener("click", t09);

// Task 10
// При клике на кнопке .b-10 запускается функция t10. Функция должна добавлять через addEventListener событие mousemove на блок .block-10. При срабатывании события запускается функция blockSize.

const blockSize = () => {
  let w = document.querySelector(".block-10").offsetWidth;
  w++;
  document.querySelector(".block-10").style.width = w + "px";
};

const t10 = () => {
  document.querySelector(".block-10").addEventListener("mousemove", blockSize);
};

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11
// При клике на кнопке .b-11 запускается функция t11. Функция должна удалять через removeEventListener событие mousemove на блоке .block-10.

const t11 = () => {
  document.querySelector(".block-10").removeEventListener("mousemove", blockSize);
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Добавьте на input.i-12 событие input с помощью addEventListener. При событии запускается стрелочная функция t12. Функция должна получать value из input.i-12 и выводить в .out-12.

const t12 = () => {
  document.querySelector(".out-12").textContent = document.querySelector(".i-12").value;
};

document.querySelector(".i-12").addEventListener("input", t12);

// Task 13
// Добавьте событие copy на input.i-13. При срабатывании события запускается функция t13, которая выводит в .out-13 строку 'copy'.

const t13 = () => {
  document.querySelector(".out-13").textContent = "copy";
};

document.querySelector(".i-13").addEventListener("copy", t13);

// Task 14
// Добавьте событие paste на input.i-14. При срабатывании события запускается функция t14, которая выводит в .out-14 вставленный в input.i-14 текст.

const t14 = (event) => {
  let val = event.clipboardData.getData("text");
  document.querySelector(".out-14").textContent = val;
};

document.querySelector(".i-14").addEventListener("paste", t14);

// Task 15
// Добавьте событие cut на input.i-15. При срабатывании события запускается функция t15, которая добавляет .i-15 атрибут placeholder с текстом 'cut'
let i15 = document.querySelector(".i-15");
const t15 = () => i15.setAttribute("placeholder", "cut");

i15.addEventListener("cut", t15);

// Task 16
// Добавьте событие focus на input.i-16. При срабатывании события запускается функция t16, которая добавляет .i-16 класс  'focus-input'.
let i16 = document.querySelector(".i-16");
const t16 = () => i16.classList.add("class", "focus-input");

i16.addEventListener("focus", t16);
// Добавьте событие blur на input.i-16. При срабатывании события запускается функция t17, которая удаляет .i-16 класс  'focus-input'.

const t17 = () => i16.classList.remove("class", "focus-input");

i16.addEventListener("blur", t17);

// Task 18
// Добавьте событие click на кнопку .b-18. По клику запускается стрелочная функция t18, которая ищет элемент с tabindex = 18 и делает элемент focus().

const t18 = () => document.querySelector('[tabindex="18"]').focus();

document.querySelector(".b-18").addEventListener("click", t18);

// Task 19
// Добавьте событие canсel на input .i-19. По клику запускается стрелочная функция t19, которая выводит в .out-19 текст 'Cancel'.

const t19 = () => (document.querySelector(".out-19").textContent = "Cancel");

document.querySelector(".i-19").addEventListener("cancel", t19);

// Task 20
// Добавьте событие dragstart на .block-20. По событию запускается стрелочная функция t20. Функция выводит в .out-20 строку 'drag'.

const t20 = () => (document.querySelector(".out-20").textContent = "drag");

document.querySelector(".block-20").addEventListener("dragstart", t20);
