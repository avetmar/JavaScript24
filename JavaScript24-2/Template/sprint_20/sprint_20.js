// iTGid.info - курс JS24/2

// !!! Описание api можно найти на сайте https://api.itgid.info
// Обратите внимание!!! К файлу HTML подключен файл config.js с двумя константами. В одной - url адрес сервера. Во вторую впишите ваш APIKEY из кабинета. При формировании запросов применяйте данные константы, не пишите ваш apikey напрямую.
// Обратите внимание!!! Я уже не пишу, что ответ нужно преобразовывать из JSON строки в объект.
const requestHeader = new Headers();
requestHeader.append("apikey", APIKEY);
// Task 01
// Напишите функцию t01, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time и выводит количество минут в .out-1. В функции создайте объект xhr. Вывод в анонимной функции реализуйте по событию onload. События onprogress и onerror не реализовывайте.

const t01 = () => {
  // добавьте сюда свой код
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "time");
  xhr.send();
  xhr.onload = () => {
    document.querySelector(".out-1").textContent = JSON.parse(xhr.response).time.m;
  };
};

document.querySelector(".b-1").addEventListener("click", t01);

// Task 02
// Напишите функцию t02, которая отправляет GET запрос на URL адрес https://api.itgid.info/api/time. Реализуйте запрос через xhr, на событие onload пропишите функцию t02_view c передачей ей аргумента xhr.response.

const t02_view = (data) => {
  console.log(data);
  data = JSON.parse(data);
  console.log(data);
  document.querySelector(".out-2").textContent = data.time.h;
  document.querySelector(".out-2").textContent += ":" + data.time.m;
};

const t02 = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "time");
  xhr.send();
  xhr.onload = () => {
    t02_view(xhr.response);
  };
};

document.querySelector(".b-2").addEventListener("click", t02);

// Task 03
// Напишите функцию t03, которая отправляет GET запрос на URL адрес  https://api.itgid.info/api/3620/gow/governor/тюр. Авторизацию реализуйте с помощью заголовка apikey (xhr.setRequestHeader("apikey", APIKEY) данная строка прописывается после xhr.open). Ответ сервера выведите в консоль и изучите. Добавьте в функцию событие onprogress, на него добавьте стрелочную функцию с аргументом event, которая запускает t03LoadedData функцию и передает в функцию аргумент event.loaded.
// Если все сделано правильно - то на страницу будет выведено количество полученных байт.

const t03LoadedData = (data) => (document.querySelector(".out-3").textContent = `get: ${data} byte`);

const t03 = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "3620/gow/governor/тюр");
  xhr.setRequestHeader("apikey", APIKEY);
  xhr.send();
  xhr.onload = () => {
    console.log(xhr.response);
  };
  xhr.onprogress = (event) => {
    t03LoadedData(event.loaded);
  };
};

document.querySelector(".b-3").addEventListener("click", t03);

// Task 04
// Напишите функцию t04, которая отправляет GET запрос на URL адрес  https://api.itgid.info/api/3620/gow/gover. Без авторизации. Для xhr пропишите событие onload, которое запускает анонимную функцию со строкой:
// document.querySelector('.out-4').textContent = xhr.status;
// Изучите код ответа.

const t04 = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "3620/gow/gover");
  xhr.send();
  xhr.onload = () => {
    // console.log(xhr.response);
    document.querySelector(".out-4").textContent = xhr.status;
  };
};

document.querySelector(".b-4").addEventListener("click", t04);

// Task 05
// Напишите функцию t05, которая отправляет GET запрос на URL адрес  https://api.itgid.info/api/3620/gow/governor/сурт. Без заголовка авторизации. Для xhr пропишите событие onload, которое запускает анонимную функцию со строкой:
// document.querySelector('.out-5').textContent = xhr.status;
// Изучите код ответа.

const t05 = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "3620/gow/governor/сурт");
  xhr.send();
  xhr.onload = () => {
    document.querySelector(".out-5").textContent = xhr.status;
  };
};

document.querySelector(".b-5").addEventListener("click", t05);

// Task 06
// Напишите функцию t06, которая отправляет GET запрос на URL адрес  https://api.itgid.info/api/3620/gow/governor/сурт. Добавьте заголовок авторизации. Для xhr пропишите событие onload, которое запускает функцию t06Show и передает данной функции xhr объект.
// Изучите код ответа.

const t06Show = (xhr) => {
  console.log(JSON.parse(xhr.response));
  document.querySelector(".out-6").innerHTML = xhr.status + "<br>";
  document.querySelector(".out-6").innerHTML += JSON.parse(xhr.response).world.description;
};

const t06 = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + "3620/gow/governor/сурт");
  xhr.setRequestHeader("apikey", APIKEY);
  xhr.send();
  xhr.onload = () => {
    t06Show(xhr);
  };
};

document.querySelector(".b-6").addEventListener("click", t06);

// Task 07
// Напишите функцию t07, которая отправляет GET запрос на адрес https://api.itgid.info/api/time и выводит количество минут в .out-7. Запрос сделайте через Promise и fetch. Данная задача решена как пример. Изучите и запустите его.

const t07 = () => {
  const p = new Promise((resolve, reject) => {
    fetch("https://api.itgid.info/api/time")
      .then((response) => {
        // console.log(response);
        if (response.ok) resolve(response.json());
        else reject(response);
      })
      .catch((error) => reject(error));
  });

  p.then(
    (result) => {
      console.log("Fulfilled");
      console.log(result);
      // делаем вывод
      document.querySelector(".out-7").textContent = result.time.m;
    },
    (error) => console.error("Rejected: " + error)
  );
};

document.querySelector(".b-7").addEventListener("click", t07);

// Task 08
// Напишите функцию t08, которая отправляет GET запрос на адрес https://api.itgid.info/api/time и выводит количество время в формате часы:минуты .out-8. Запрос сделайте через Promise и fetch. Структура задачи - такая, же как и таске 7.

const t08 = () => {
  const p = new Promise((resolve, reject) => {
    fetch(URL + "time")
      .then((response) => {
        if (response.ok) resolve(response.json());
        else reject(response);
      })
      .catch((error) => reject(error));
  });
  p.then((result) => {
    document.querySelector(".out-8").textContent = result.time.h + ":" + result.time.m;
  });
};

document.querySelector(".b-8").addEventListener("click", t08);

// Task 09
// Напишите функцию t09, которая отправляет GET запрос на адрес https://api.itgid.info/api/time1 и выводит время в формате часы:минуты .out-9. Изучите код задачи и результат ошибки.

const t09 = () => {
  const p = new Promise((resolve, reject) => {
    fetch("https://api.itgid.info/api/time1")
      .then((response) => {
        // console.log(response);
        if (response.ok) resolve(response.json());
        else reject(response);
      })
      .catch((error) => reject(error));
  });

  p.then(
    (result) => {
      console.log("Fulfilled");
      console.log(result);
      // делаем вывод
      document.querySelector(".out-9").textContent = result.time.h + ":" + result.time.m;
    },
    (error) => {
      document.querySelector(".out-9").innerHTML = error.status + "<br>";
      document.querySelector(".out-9").innerHTML += "Rejected: Error";
    }
  );
};

document.querySelector(".b-9").addEventListener("click", t09);

// Task 10
// Напишите функцию t10, которая отправляет GET запрос на URL адрес  https://api.itgid.info/api/3620/gow/gover. Без авторизации. Синтаксис таски возьмите из 9 таски. Замените .out-9 на .out-10. Изучите ошибку.

const t10 = () => {
  const p = new Promise((resolve, reject) => {
    fetch(URL + "3620/gow/gover")
      .then((response) => {
        // console.log(response);
        if (response.ok) resolve(response.json());
        else reject(response);
      })
      .catch((error) => reject(error));
  });

  p.then(
    (result) => {
      console.log("Fulfilled");
      console.log(result);
      // делаем вывод
      document.querySelector(".out-10").textContent = result.time.h + ":" + result.time.m;
    },
    (error) => {
      document.querySelector(".out-10").innerHTML = error.status + "<br>";
      document.querySelector(".out-10").innerHTML += "Rejected: Error";
    }
  );
};

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11
// Давайте напишем функцию, которая возвращает промисы. Попробуем сделать универсальную функцию для запросов. Изучите код функции t11 и способ запуска.

function t11(url, method = "GET", auth = false) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL + url);

    if (auth) xhr.setRequestHeader("apikey", APIKEY);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

document.querySelector(".b-11").addEventListener("click", () => {
  t11("time", "get", false).then(
    (response) => {
      console.log(`Fulfilled:`);
      console.log(JSON.parse(response));
    },
    (error) => console.log(`Rejected: ${error}`)
  );
});

// Task 12
// Используя функцию t11 сделайте GET запрос на  https://api.itgid.info/api/3620/js24/test. C авторизацией. Выведите случайное число присланное в ответе сервера в .out-12.

document.querySelector(".b-12").addEventListener("click", () => {
  t11("3620/js24/test", "GET", true).then(
    (response) => {
      let result = JSON.parse(response);
      document.querySelector(".out-12").textContent = result.random;
    },
    (error) => console.log(`Rejected: ${error}`)
  );
});

// Task 13
// Используя функцию t11 сделайте POST запрос на 3620/js24/test. C авторизацией. Выведите свойство describe присланное в ответе сервера в .out-13.

document.querySelector(".b-13").addEventListener("click", () => {
  t11("3620/js24/test", "POST", true).then(
    (response) => {
      let result = JSON.parse(response);
      document.querySelector(".out-13").textContent = result.describe;
    },
    (error) => console.log(`Rejected: ${error}`)
  );
});

// Task 14
// Давайте допустим ошибку. Используя функцию t11 сделайте POST запрос на https://api.itgid.info/api/3620/js24/test. БЕЗ авторизации. Выведите свойство describe присланное в ответе сервера в .out-14. Изучите ошибку.

document.querySelector(".b-14").addEventListener("click", () => {
  t11("3620/js24/test", "POST", false).then(
    (response) => {
      let result = JSON.parse(response);
      document.querySelector(".out-14").textContent = result.describe;
    },
    (error) => console.log(`Rejected: ${error}`)
  );
});

// Task 15
// Иногда нужно выполнять два запроса, которые не зависят друг от друга. Для этого есть PromiseAll. Напишите функцию t15, которая делает запрос GET на https://api.itgid.info/api/time и выводит в .out-15 количество минут. Одновременно делайте запрос на URL https://api.itgid.info/api/3620/employee/random-email и выводит случайный емейл в .out-15. Разделитель пробел. Применяйте синтаксис PromiseAll - как в примере в коде урока (через fetch).

const t15 = () => {
  const promise_1 = new Promise((resolve, reject) => {
    fetch(URL + "time").then((data) => resolve(data.json()));
  });

  const promise_2 = new Promise((resolve, reject) => {
    fetch(URL + "3620/employee/random-email", {
      headers: requestHeader,
    }).then((data) => resolve(data.json()));
  });

  Promise.all([promise_1, promise_2]).then(f3);

  function f3(data) {
    document.querySelector(".out-15").textContent = data[0].time.m + " " + data[1].email;
  }
};

document.querySelector(".b-15").addEventListener("click", t15);

// Task 16
// Напишите функцию t16, которая делает запрос GET на https://api.itgid.info/api/3620/sr/read?race=gaal и выводит в .out-16 описание расы полученной от сервера(через innerHTML). Авторизация обязательна для двух запросов. Одновременно делайте запрос на URL https://api.itgid.info/api/3620/sr/read и выведите названия рас (race)  в .out-161. Разделитель пробел. Применяйте синтаксис PromiseAll - как в примере в коде урока (через fetch).

const t16 = () => {
  const promise_3 = new Promise((resolve, reject) => {
    fetch(URL + "3620/sr/read?race=gaal", {
      headers: requestHeader,
    }).then((data) => resolve(data.json()));
  });

  const promise_4 = new Promise((resolve, reject) => {
    fetch(URL + "3620/sr/read", {
      headers: requestHeader,
    }).then((data) => resolve(data.json()));
  });

  Promise.all([promise_3, promise_4]).then(f4);

  let out = [];

  function f4(data) {
    for (let k in data[1].result) {
      for (let key in data[1].result[k]) {
        if (key === "race") out.push(data[1].result[k][key]);
      }
    }
    document.querySelector(".out-16").innerHTML = data[0].result.description;
    document.querySelector(".out-161").textContent = out.join(" ");
  }
};

document.querySelector(".b-16").addEventListener("click", t16);

// Task 17
//  Вариант с PromiseAll удобен для параллельного получения независимых данных. Например на сайте нужно вывести товары и имя пользователя (в шапке сайта). Т.е. эти данные не зависят друг от друга и, в таком случае, PromiseAll идеален и позволяет ускорить получение данных. А если данные зависят друг от друга? Например - нужно получить данные пользователя, а затем, на основе этих данных - историю покупок. Т.е. получить покупки нельзя пока нет имени пользователя. Т.е. у нас ОЧЕРЕДЬ запросов. Давайте разберем пример цепочки промисов. Функция 17 делает запрос на сервер и получает случайный емейл. Выводит емейл на страницу. Затем делает запрос с данным емейл для получения данных о сотруднике. Выводит его должность. Изучите и разберите данную цепочку.

const t17 = () => {
  let myHeaders = new Headers();
  myHeaders.append("apikey", APIKEY);

  fetch("https://api.itgid.info/api/3620/employee/random-email", {
    headers: myHeaders,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".out-17").textContent = data.email;
      return fetch("https://api.itgid.info/api/3620/employee/email?email=" + data.email, {
        headers: myHeaders,
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".out-171").textContent = data.result.designation;
    });
};

document.querySelector(".b-17").addEventListener("click", t17);

// Task 18
// Напишите функцию t18 которая применяя цепочку промисов делает GET запрос на https://api.itgid.info/api/3620/employee/random-email и получает случайный емейл сотрудника. Емейл выведите в .out-18. Затем используя данный емейл сделайте GET запрос на https://api.itgid.info/api/3620/employee/email?email= ваш_емейл и получите описание сотрудника. Выведите имя сотрудника в .out-181.

const t18 = () => {
  fetch("https://api.itgid.info/api/3620/employee/random-email", {
    headers: requestHeader,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".out-18").textContent = data.email;
      return fetch("https://api.itgid.info/api/3620/employee/email?email=" + data.email, {
        headers: requestHeader,
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".out-181").textContent = data.result.name;
    });
};

document.querySelector(".b-18").addEventListener("click", t18);

// Task 19
// Напишите функцию t19, которая делает POST запрос на https://api.itgid.info/api/3620/gow/random-world и получает случайный мир из игры GOW. Затем применяя цепочку промисов сделайте GET запрос на https://api.itgid.info/api/3620/gow/world/ваш_мир, где ваш_мир это название мира полученное из предыдущего запроса. Выведите в .out-19 полученное имя мира, а в .out-191 с помощью innerHTML описание мира (description).

const t19 = () => {
  fetch("https://api.itgid.info/api/3620/gow/random-world", {
    headers: requestHeader,
    method: "POST",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".out-19").textContent = data.world;
      return fetch("https://api.itgid.info/api/3620/gow/world/" + data.world, {
        headers: requestHeader,
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".out-191").innerHTML = data.world.description;
    });
};

document.querySelector(".b-19").addEventListener("click", t19);

// Task 20
// Изучите пример работы промисов.

const t20 = () => {
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("some data 5555");
    }, 3000);
  });

  p1.then((result) => {
    console.log(result);
    return 1;
  })
    .then((result) => {
      console.log(result);
      return 2;
    })
    .then((result) => {
      console.log(result);
    });
};

document.querySelector(".b-20").addEventListener("click", t20);
