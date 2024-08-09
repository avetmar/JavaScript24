// Task 1
// Создайте переменную a_1 равную 7. Выведите в .out-1 переменную a_1.
let a_1 = 7;
document.querySelector(".out-1").textContent = a_1;

// Task 2
// Создайте константу a равную 10 и константу b равную 20. Выведите в .out-2 сумму констант a и b.
const a = 10,
  b = 20;
document.querySelector(".out-2").textContent = a + b;
// Task 3
// Выведите в .out-3 константу b умноженную на 10.
document.querySelector(".out-3").textContent = b * 10;

// Task 4
// Создана константа STR_4, которая содержит пустую строку. Выведите ее в .out-4.

const STR_4 = "";
document.querySelector(".out-4").textContent = STR_4;

// Task 5
// Создайте переменную name_1 равную 'Regulus', и переменную name_2 равную 'Black'. Выведите конкатенацию name_1 и name_2 в .out-5, так, чтобы между словами был пробел.
let name_1 = "Regulus",
  name_2 = "Black";
document.querySelector(".out-5").textContent = `${name_1} ${name_2}`;
// Task 6
// Созданы переменные g61 и g62. Создайте переменную g6 равную сумме переменных g61 и g62. Выведите переменную g6 в .out-6.

let g61 = 100;
let g62 = 200;
let g6 = g61 + g62;
document.querySelector(".out-6").textContent = g6;

// Task 7
// Получите в переменную out7 элемент .out-7. Выведите out7 в консоль.
let out7 = document.querySelector(".out-7");
console.log(out7);
// Task 8
// Используя out7 и textContent выведите в out7 переменную g62.
out7.textContent = g62;
// Task 9
// Создайте переменную out9 куда получите элемент .out-9 со страницы. Создайте переменную out9Text куда получите текст из .out-9. Выведите обе переменные в консоль.
let out9 = document.querySelector(".out-9");
let out9Text = document.querySelector(".out-9").textContent;
console.log(out9, out9Text);
// Task 10
// На предыдущем примере возникает вопрос - что выносить в переменную(константу)? Весь элемент, либо его значение? Зависит от того, как мы будем дальше использовать данную переменную(константу). Если  нужно будет выводить на страницу - получайте элемент. Если же только данные - получайте данные. Изучите пример ниже.

let text100 = document.querySelector(".out-100").textContent;
let out101 = document.querySelector(".out-101");
out101.textContent = text100;

// Task 11
// Используя как основу предыдущий пример получите текст из .out-110 (c помощью innerHTML) и выведите с помощью innerHTML в .out-111.
let text110 = document.querySelector(".out-110").innerHTML;
let out111 = document.querySelector(".out-111");
out111.innerHTML = text110;

// Task 12
// Используя как основу предыдущий пример получите текст из .out-120 (c помощью innerHTML) и выведите с помощью innerHTML в .out-121. Постарайтесь обойтись без получения элемента .out-121 в переменную.
let text120 = document.querySelector(".out-120").innerHTML;
document.querySelector(".out-121").innerHTML = text120;

// Task 13
// Создайте переменную out13 куда получите объект .out-13. Используя переменную out13 ДОПИШИТЕ в .out-13 строку 'Flamel'.
let out13 = document.querySelector(".out-13");
out13.textContent += "Flamel";
// Task 14
// Создайте переменную g141 куда получите ЧИСЛО из .out-141. Создайте переменную g142, куда получите ЧИСЛО из .out-142. Выведите сумму переменных g141 и g142 в .out-14.
let g141 = +document.querySelector(".out-141").textContent;
let g142 = +document.querySelector(".out-142").textContent;
document.querySelector(".out-14").textContent = g141 + g142;
// Task 15
// Создайте константу h2 куда получите заголовок второго уровня со страницы. Выведите свойство .textContent константы h2 в .out-15.
const h2 = document.querySelector("h2");
document.querySelector(".out-15").textContent = h2.textContent;
// Task 16
// Создайте константу title, куда получите элемент title из head. Запишите в свойство .textContent константы title строку 'Sprint 3'. Изучите как изменится title страницы.
const title = document.querySelector("title");
title.textContent = "Sprint 3";
// Task 17
// Создана переменная g17. Запишите в нее значение g17 * 10. Выведите g17 в .out-17.

let g17 = 55;
g17 = g17 * 10;
document.querySelector(".out-17").textContent = g17;

// Task 18
// Создайте константу m18 содержащую пустую строку. Выведите константу в .out-18.
const m18 = "";
document.querySelector(".out-18").textContent = m18;
// Task 19
// Создайте константу ul19, куда получите элемент .out-19. Допишите (через innerHTML) в ul19 константу f01 затем f02 и затем f03.

const f01 = "<li>Blaise Zabini</li>";
const f02 = "<li>Evan Rosier</li>";
const f03 = "<li>Astoria Greengrass</li>";
const ul19 = document.querySelector(".out-19");
ul19.innerHTML = `${f01} ${f02} ${f03}`;

// Task 20
// Создайте константу li, куда получите текст из элемента li внутри .out-20. Выведите li в консоль.
const li = document.querySelector(".out-20").textContent;
console.log(li);
