// iTGid.info - курс JS24/2

const LS = localStorage;

// Task 01
// Напишите функцию, которая очищает LS.

const t01 = () => {
  LS.clear();
};

document.querySelector(".b-1").addEventListener("click", t01);

// Task 02
// Напишите функцию, которая добавляет в LS значение числа из переменной m2. Значением сохраняется под ключом m2.

let m2 = 88;

const t02 = () => {
  LS.setItem("m2", m2);
};

document.querySelector(".b-2").addEventListener("click", t02);

// Task 03
// Напишите функцию, которая получает из LS запись с ключом m2. Функция должна возвращать полученное ЧИСЛО.

const t03 = () => {
  return +LS.getItem("m2");
};

document.querySelector(".b-3").addEventListener("click", () => {
  console.log(t03());
  console.log(typeof t03());
});

// Task 04
// Напишите функцию, которая проверяет, есть ли запись в LS с ключом переданным в функцию как аргумент. Если такая запись есть, то функция возвращает ЧИСЛО сохраненное под таким ключом. Если нет, функцию возвращает 0.

const t04 = (key) => {
  if (LS.getItem(key)) {
    return +LS.getItem(key);
  }
  return 0;
};

document.querySelector(".b-4").addEventListener("click", () => {
  console.log(t04("m2"));
  console.log(typeof t04("m2"));
});

// Task 05
// Напишите функцию, которая получает значение из LS с ключом k5 и если значение можно преобразовать в число - то возвращает число, если нет, то возвращаем строку. Рассматриваем вариант только целых чисел.

LS.setItem("k5", 99);
// console.log(+LS.getItem("k5"));
const t05 = () => {
  if (Number.isInteger(Math.round(+LS.getItem("k5")))) {
    return +LS.getItem("k5");
  }
  return LS.getItem("k5");
};

document.querySelector(".b-5").addEventListener("click", () => {
  console.log(t05());
  console.log(typeof t05());
});

// Task 06
// Напишите функцию, которая возвращает длину объекта LS.

const t06 = () => {
  return LS.length;
};

document.querySelector(".b-6").addEventListener("click", () => {
  document.querySelector(".out-6").textContent = t06();
});

// Task 07
// Напишите функцию, которая выводит в .out-7 ключи из LS. Разделитель пробел. Перебор LS сделайте циклом for let key in. Внимательно изучите что будет выведено. Подумайте почему.

const t07 = () => {
  let out = "";
  for (let key in LS) {
    out += key + " ";
  }
  document.querySelector(".out-7").textContent = out;
};

document.querySelector(".b-7").addEventListener("click", t07);

// Task 08
// Напишите функцию, которая выводит в консоль выводит результат работы .key(0) объекта LS. Изучите вывод.

const t08 = () => {
  console.log(LS.key(0));
};

document.querySelector(".b-8").addEventListener("click", t08);

// Task 09
// Напишите функцию, которая запускает цикл (for let i = 0) от 0 до LS.length и выводит в .out-9 значения LS.key(i). Разделитель значений - пробел.

const t09 = () => {
  let out = "";
  for (let i = 0; i < LS.length; i++) {
    out += LS.key(i) + " ";
  }
  document.querySelector(".out-9").textContent = out;
};

document.querySelector(".b-9").addEventListener("click", t09);

// Task 10
// Напишите функцию, которая возвращает объект вида {key : [], values : []} где внутри массива key лежат значения ключей из LS, а в values лежат значения из LS.

const t10 = () => {
  const obj = {
    key: [],
    values: [],
  };
  for (let i = 0; i < LS.length; i++) {
    obj.key.push(LS.key(i));
    obj.values.push(LS.getItem(LS.key(i)));
  }
  return obj;
};

document.querySelector(".b-10").addEventListener("click", () => {
  console.log(t10());
});

// Task 11
// Напишите функцию, которая сохраняет массив из arr_11 в LS с ключом arr11 в localStorage.

let arr_11 = [999, 888, "hello"];

const t11 = () => {
  LS.setItem("arr11", JSON.stringify(arr_11));
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Напишите функцию, которая извлекает из LS МАССИВ с ключом arr11 и возвращает его.

const t12 = () => {
  return JSON.parse(LS.getItem("arr_11"));
};

document.querySelector(".b-12").addEventListener("click", () => {
  console.log(t12());
  console.log(Array.isArray(t12()));
});

// Task 13
// Напишите функцию, которая проверяет, что в массиве, который сохранен с ключом a13 в LS есть строка 'mini'. Функция возвращает true/false.

LS.setItem("a13", JSON.stringify(["scott", "mini", "spiderman"]));

const t13 = () => {
  let arr = JSON.parse(LS.getItem("a13"));
  return arr.includes("mini");
};

document.querySelector(".b-13").addEventListener("click", () => {
  document.querySelector(".out-13").innerHTML = t13();
});

// Task 14
// Напишите функцию, которая заменяет в массиве, который сохранен в LS под ключом a13, строку 'mini' на строку 'animal'. Предполагаем, что в массиве есть строка 'mini'.

const t14 = () => {
  let arr = JSON.parse(LS.getItem("a13"));
  const index = arr.indexOf("mini");
  arr[index] = "animal";
  LS.setItem("a13", JSON.stringify(arr));
};

document.querySelector(".b-14").addEventListener("click", t14);

// Task 15
// Напишите функцию, которая перебирает объект obj_15 и добавляет в LS записи из объекта с ключами из объекта. Каждая запись из объекта - отдельная запись в LS.

let obj_15 = {
  name: "Fiat",
  model: 500,
};

const t15 = () => {
  const keys = Object.keys(obj_15);
  const values = Object.values(obj_15);

  for (let i = 0; i < keys.length; i++) {
    LS.setItem(keys[i], values[i]);
  }
};

document.querySelector(".b-15").addEventListener("click", t15);

// Task 16
// Напишите функцию, которая проверяет, что в LS есть запись с ключом prefferedmode равное 'dark'. Если есть, то получает тег link с атрибутом role="preferredmode" и заменяет его href на строку 'css/night.css'.

const t16 = () => {
  if (LS.getItem("prefferedmode") === "dark") {
    document.querySelector('[role="preferredmode"]').setAttribute("href", "css/night.css");
  }
};

document.querySelector(".b-16").addEventListener("click", t16);

// Task 17
// Напишите функцию, которая через this получает value текущего выбранного input. Если value равно 'dark', то в LS сохраните запись с ключом preferredmode со значением 'dark', в противном случае сохраняете preferredmode со значением 'light'. Проверьте работу функцию. Установите dark, а затем нажмите кнопку 16 таска.

function t17() {
  let val = this.value;
  if (val === "dark") {
    LS.setItem("prefferedmode", "dark");
  } else {
    LS.setItem("prefferedmode", "light");
  }
  t18();
}

document.querySelectorAll('[name="r-17"]').forEach((item) => item.addEventListener("input", t17));

// Task 18
// Напишите функцию, которая делает действия аналогичные функции t16, однако реализует ветку else, в которой добавляется тег link с атрибутом role="preferredmode" равное 'css/style.css'.

function t18() {
  if (LS.getItem("prefferedmode") === "dark") {
    document.querySelector('[role="preferredmode"]').setAttribute("href", "css/night.css");
  } else {
    document.querySelector('[role="preferredmode"]').setAttribute("href", "css/style.css");
  }
}

document.querySelector(".b-18").addEventListener("click", t18);

// Task 19
// Допишите в функцию t17, в конец функции, запуск t18 в виде t18(). Теперь при смене значения radio будет меняться фон.

// Task 20
// Повесьте на LS событие storage, которое проверяет, что в LS есть ключ preferredmode и запускает функцию t18. Напоминаю - чтобы наблюдать данное событие нужно открыть еще один инстанс файла html, и там изменить состояние в таске 17.
window.addEventListener("storage", (event) => {
  if (event.key === "preferredmode" && event.storageArea === LS) t18();
});
