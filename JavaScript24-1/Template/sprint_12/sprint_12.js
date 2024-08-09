// Task 1
// В начальных спринтах мы создавали элементы с помощью innerHTML. Давайте вспомним как это было. Создайте заголовок второго уровня с текстом 'Sprint 12'. Поместите элемент в .out-1 с помощью innerHTML.

function t01() {
  document.querySelector(".out-1").innerHTML = "<h2>Sprint 12</h2>";
}

document.querySelector(".b-1").onclick = t01;

// Task 2
// Создание через innerHTML не гибкое, давайте научимся более гибким способам создания элементов в JavaScript. Напишите функцию t02, которая создает через createElement элемент h2, затем через textContent добавьте в созданный элемент текст 'Sprint 12', после чего добавьте через append элемент в .out-2.

function t02() {
  let elem = document.createElement("h2");
  elem.textContent = "Sprint 12";
  document.querySelector(".out-2").append(elem);
}

document.querySelector(".b-2").onclick = t02;

// Task 3
// Функция должна создавать через createElement элемент img, в качестве атрибута src укажите './images/harconen.png'. Добавьте через append созданное изображение в .out-3.

function t03() {
  let out3 = document.createElement("img");
  out3.setAttribute("src", "./images/harconen.png");
  document.querySelector(".out-3").append(out3);
}

document.querySelector(".b-3").onclick = t03;

// Task 4
// Функция должна создавать через createElement элемент img, в качестве атрибута src укажите './images/harconen2.png'. Добавьте через classList класс 'round-img'.  Добавьте через append созданное изображение в .out-4.

function t04() {
  let out4 = document.createElement("img");
  out4.setAttribute("src", "./images/harconen2.png");
  out4.classList.add("round-img");
  document.querySelector(".out-4").append(out4);
}

document.querySelector(".b-4").onclick = t04;

// Task 5
// Функция должна создавать через createElement элемент input. Задайте атрибут type="number", задайте значение value="0", и добавьте через classList класс .i-5. Добавьте для элемента cвойство oninput равное t06. Через append добавьте элемент в .out-5.

function t05() {
  const inp05 = document.createElement("input");
  inp05.setAttribute("type", "number");
  inp05.setAttribute("value", 0);
  inp05.classList.add("i-5");
  inp05.oninput = t06;
  document.querySelector(".out-5").append(inp05);
}

document.querySelector(".b-5").onclick = t05;

// Task 6
// Данная фукнция автоматически будет срабатывать если таск 5 выполнен корректно.

function t06() {
  document.querySelector(".out-6").textContent = document.querySelector(".i-5").value;
}

// Task 7
// Функция должна создавать через createElement элемент select  c классом 's-7'. Добавьте в созданный select элементы option с value = 22 и тектом 'Лето II Атрейдес' и option с value 33 и текстом 'Дункан Айдахо'. Создавайте option через createElement. Добавьте созданный select через append в .out-7.

function t07() {
  const select07 = document.createElement("select"),
    opt071 = document.createElement("option"),
    opt072 = document.createElement("option");

  select07.classList.add("s-7");
  opt071.value = 22;
  opt071.textContent = "Лето II Атрейдес";
  opt072.value = 33;
  opt072.textContent = "Дункан Айдахо";

  select07.append(opt071);
  select07.append(opt072);

  document.querySelector(".out-7").append(select07);
}

document.querySelector(".b-7").onclick = t07;

// Task 8
// Функция должна получать текст из input.i-8, создавать элемент li c помощью createElement и записывать в него полученный текст, после чего добавлять в .list-8 через append.

function t08() {
  let text = document.querySelector(".i-8").value,
    li = document.createElement("li");

  li.append(text);
  document.querySelector(".list-8").append(li);
}

document.querySelector(".b-8").onclick = t08;

// Task 9
// Функция должна создавать элемент 'details' через createElement, создайте через createElement элемент 'summary' с текстом 'close/open'. Добавьте через append созданный summary в details. Создайте текстовую ноду через createTextNode(), с текстом 'Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.' Добавьте созданную ноду в details через append. Созданный details в .out-9 через append.

function t09() {
  let details = document.createElement("details"),
    summary = document.createElement("summary");
  summary.textContent = "close/open";
  details.append(summary);

  let textNode = document.createTextNode("Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.");
  details.append(textNode);

  document.querySelector(".out-9").append(details);
}

document.querySelector(".b-9").onclick = t09;

// Task 10
// Функция должна создавать элемент 'tr' и два элемента 'td'. В первый добавьте текст 'Гхола', а во второй 'Гхола — клон, искусственное существо, которое выращивается в аксолотль-чане', добавьте оба td в tr через append. Созданный tr добавьте в таблицу .table-10 > tbody через append().

function t10() {
  let td01 = document.createElement("td"),
    td02 = document.createElement("td"),
    tr = document.createElement("tr");

  td01.textContent = "Гхола";
  td02.textContent = "Гхола — клон, искусственное существо, которое выращивается в аксолотль-чане";

  tr.append(td01);
  tr.append(td02);

  document.querySelector(".table-10 > tbody").append(tr);
}

document.querySelector(".b-10").onclick = t10;

// Task 11
// Создан элемент div, функция должна добавить через append div в блок .out-11. Обратите внимание куда добавляется элемент.

const div = document.createElement("div");
div.textContent = "Test div";
div.classList.add("bg-orange");

function t11() {
  document.querySelector(".out-11").append(div);
}

document.querySelector(".b-11").onclick = t11;

// Task 12
// Функция должна добавлять элемент div (созданный в таске 11) с помощью prepend в .out-11. Обратите внимание, куда добавляется элемент.

function t12() {
  document.querySelector(".out-11").prepend(div);
}

document.querySelector(".b-12").onclick = t12;

// Task 13
// Функция должна добавлять элемент div (созданный в таске 11) с помощью before в .out-11. Обратите внимание, куда добавляется элемент.

function t13() {
  document.querySelector(".out-11").before(div);
}

document.querySelector(".b-13").onclick = t13;

// Task 14
// Функция должна добавлять элемент div (созданный в таске 11) с помощью after в .out-11. Обратите внимание, куда добавляется элемент.

function t14() {
  document.querySelector(".out-11").after(div);
}

document.querySelector(".b-14").onclick = t14;

// Task 15
// Функция должна делать replaceWith для .out-15 заменяя его на div (созданный в таск 11). Обратите внимание, куда добавляется элемент.

function t15() {
  document.querySelector(".out-15").replaceWith(div);
}

document.querySelector(".b-15").onclick = t15;

// Task 16
// Функция должна делать remove() для элемента .out-16.

function t16() {
  document.querySelector(".out-16").remove();
}

document.querySelector(".b-16").onclick = t16;

// Тask 17
// Как видно createElement очень гибок, а вместе с after, before, append, prepend позволяет очень гибко работать с DOM, однако не стоит списывать innerHTML со счетов. Давайте заменим блок .out-17 строкой '<mark class="m-17">Thufir Hawat</mark>' с помощью outerHTML.

function t17() {
  document.querySelector(".out-17").outerHTML = '<mark class="m-17">Thufir Hawat</mark>';
}

document.querySelector(".b-17").onclick = t17;

// Тask 18
// Функция t18 должна заменять блок .out-18 строкой '<mark class="m-18">Thufir Hawat</mark>' с помощью outerText.

function t18() {
  document.querySelector(".out-18").outerText = '<mark class="m-18">Thufir Hawat</mark>';
}

document.querySelector(".b-18").onclick = t18;

// Тask 19
// Изучите работу метода insertAdjacentHTML на примере функции t19. Запустите, изучите ее работу с опцией 'beforebegin'. Замените опцию 'beforebegin' на 'afterbegin', 'beforeend', 'afterend'.

function t19() {
  document.querySelector(".out-19").insertAdjacentHTML("afterbegin", "<mark>TEST</mark>");
}

document.querySelector(".b-19").onclick = t19;

// Тask 20
// Изучите работу метода insertAdjacentText на примере функции t20. Запустите, изучите ее работу с опцией 'beforebegin'. Замените опцию 'beforebegin' на 'afterbegin', 'beforeend', 'afterend'.

function t20() {
  document.querySelector(".out-20").insertAdjacentText("afterend", "<mark>TEST</mark>");
}

document.querySelector(".b-20").onclick = t20;
