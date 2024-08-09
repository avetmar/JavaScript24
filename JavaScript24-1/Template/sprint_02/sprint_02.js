// Task 1
// Самый простой вывод информации - в консоль. Для вывода напишите console.log() и в скобках напишите то, что хотите вывести. Изучите вывод команд ниже. Обратите внимание если нужно вывести строку, то она берется в кавычки.

console.log(256);
console.log("Hello");
console.log(true);

// Task 2
// Напишите вывод в консоль числа 777.
console.log(777);

// Task 3
// Напишите вывод в консоль строки 'JavaScript'.
console.log("JavaScript");

// Task 4
// Для вывода информации в элемент (HTML) на странице применяется несколько команд. Самая простая команда - textContent. Для вывода нужно получить элемент, и присвоить значение свойству textContent. Давайте научимся делать первую часть операции - получать элемент со страницы. Самый простой вариант - получение элемента у которого есть id - уникальный идентификатор. В таком случае применяется метод getElementById(). Изучите конструкцию ниже. Данная конструкция позволяет "получить" для дальнейшей работы элемент по его идентификатору.

console.log(document.getElementById("out-4"));

// Task 5
// Выше мы научились получать элемент по id, однако давайте теперь не просто получим элемент по id, но и запишем в него новую информацию. Изучите пример. В нем мы получаем элемент по id ="out-5" и записываем в него строку 'task 5 - done'. Изучите, что выводится на странице, затем снимите комментарий и обновите страницу, изучите, как изменился вывод.

document.getElementById("out-5").textContent = "task 5 - done";

// Task 6
// Напишите код, который получает элемент out-6 по id (пишут иногда #out-6) и выведите в него текст 'Task 6 - done'.
document.getElementById("out-6").textContent = "Task 6 - done";

// Task 7
// Мы получали элемент по id, однако последние годы данный метод (getElementById) применяют редко. Более используемым становится метод querySelector(), который позволяет получать элементы по селектору CSS. Изучите пример ниже. Обратите внимание - в querySelector, поскольку применяется синтаксис css, то мы пишем точку, решетку, в зависимости от вида селектора.

console.log(document.querySelector(".out-7"));
document.querySelector(".out-7").textContent = "querySelector - work";

// Task 8
// Выведите в элемент .out-8 текст 'JS 24', примените querySelector.
document.querySelector(".out-8").textContent = "JS 24";

// Task 9
// Поскольку мы применяем querySelector, то можем писать любые валидные селекторы CSS, изучите пример ниже. У нас в HTML написан класс .out-8, а в нем span. Посмотрите на пример - как мы запишем текст в данный блок (при этом элемент с классом .out-8 из 8 таска не изменится).

document.querySelector(".out-8 span").textContent = "Task 9 - done";

// Task 10
// Применяя querySelector запишите в параграф внутри .out-8 текст .out-8.
document.querySelector(".out-8 p").textContent = ".out-8";

// Task 11
// Особенностью querySelector(), является то, что если элементов на странице несколько, то метод выбирает только первый встреченный. Изучите пример ниже.

document.querySelector(".out-11").textContent = 777;

// Task 12
// Мы все время применяем свойство textContent для вывода. Выведите в .out-12 с помощью textContent следующую строку '<h4>header 4</h4>'. Как видите при таком выводе информации теги не обрабатываются, а выводятся как текст.
document.querySelector(".out-12").textContent = "<h4>header 4</h4>";
// Task 13
// Давайте изучим еще способы вывода информации в парные теги. Посмотрите на пример ниже. Свойство .innerHTML можно выводить теги и страница HTML будет их обрабатывать.

document.querySelector(".out-13").innerHTML = "<b>13</b>";

// Task 14
// Выведите в .out-14 строку '<p>The Bath Item <em>Gift</em> Hypothesis</p>' c помощью innerHTML.
document.querySelector(".out-14").innerHTML = "<p>The Bath Item <em>Gift</em> Hypothesis</p>";
// Task 15
// Простое свойство innerHTML позволяет создавать элементы на странице. В примере выше был создан параграф. Давайте создадим изображение. Выведите в .out-15 строку '<img src="./images/spaceship.png" alt="rocket">'.
document.querySelector(".out-15").innerHTML = "<img src='./images/spaceship.png' alt='rocket'></img>";
// Task 16
// Выше мы применяли команды textContent и innerHTML. Обе эти команды перезаписывали содержимое элементов. Изучите что написано в элементе .out-16. Затем снимите комментарий с первой команды. Затем и со второй команды. Посмотрите что выведено в .out-16 в итоге.

document.querySelector(".out-16").textContent = "222";
document.querySelector(".out-16").textContent = "333";
document.querySelector(".out-16").textContent = "444";

// Task 17
// Можно ли делать не перезапись, а добавление информации в элемент? Да, можно. Посмотрите на синтаксис ниже. Данная команда дописывает информации в элемент на странице.

document.querySelector(".out-17").textContent += 888;

// Task 18
// Допишите с помощью innerHTML в .out-18 строку следующего вида '<img src="./images/tree.png" alt="Tree">'.
document.querySelector(".out-18").innerHTML += "<img src='./images/tree.png' alt='Tree'>";
// Task 19
// Изучите пример ниже. В нем мы расписываем операцию += подробно. Давайте расшифруем что тут написано. Начнем с правой части: document.querySelector('.out-19').textContent + 888; Операция document.querySelector('.out-19').textContent в этом контексте применяется для получения текста из элемента document.querySelector('.out-19'). Т.е. мы извлекаем текст, затем прилепляем к нему 888 и записываем все в .out-19. Как видите свойство innerHTML может применяться как для записи, так и для получения текста из элемента.

document.querySelector(".out-19").textContent = document.querySelector(".out-19").textContent + 888;

// Task 20
// Получите с помощью textContent текст из .out-20. Выведите полученный текст в консоль.
console.log(document.querySelector(".out-20").textContent);
