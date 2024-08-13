function t01() {
    // 1. Создаём новый XMLHttpRequest-объект
    let xhr = new XMLHttpRequest();

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open('GET', 'https://api.itgid.info/api/time');

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function () {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            console.log(`Error!!! ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            console.log(`result:  ${xhr.response.length} байт`); // response -- это ответ сервера
            console.log(xhr.response);
            console.log(JSON.parse(xhr.response));
        }
    };

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
        }

    };

    xhr.onerror = function () {
        console.log("Запрос не удался");
    };
}

// t01();

// Согласитесь довольно много возможностей, однако они не всегда нужны. Fetch выглядит красивее и практичнее. Что же делать если нужно просто послать запрос и обработать ответ? Механизм - промисов. Промисы - это способ организации асинхронного кода. Т.е. внутри промисов можно реализовывать не только запросы, но и, например, играть с таймерами.

function t02() {
    const p1 = new Promise(function (resolve, reject) {
        // pending - ожидание
        // fulfilled - выполено
        // rejected - выполнено с ошибкой
        setTimeout(() => {
            // reject(new Error("время вышло!"));
            resolve('some data 5555');
        }, 3000);

    });

    p1
        .then(
            result => {
                console.warn("Fulfilled: " + result), // сработает
                    console.log(p1);
            },
            error => console.error("Rejected: " + error) // не сработает
        );
}

// t02();


function t03() {
    const p2 = new Promise((resolve, reject) => {
        fetch('https://api.itgid.info/api/time')
            .then(response => {
                // console.log(response);
                if (response.ok) resolve(response.json());
                else reject(response);
            })
            .catch(error => reject(error));
    });

    p2
        .then(
            result => {
                console.log("Fulfilled: ");
                console.log(result), // сработает
                    console.log(p2);
            },
            error => console.error("Rejected: " + error) // не сработает
        );
}
// t03();

// промисификация
function t04(url) {
    return new Promise(function (resolve, reject) {

        // 1. Создаём новый XMLHttpRequest-объект
        let xhr = new XMLHttpRequest();
        // 2. Настраиваем его: GET-запрос по URL /article/.../load
        xhr.open('GET', url);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
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

// t04('https://api.itgid.info/api/time')
//   .then(
//     response => {
//         console.log(`Fulfilled:`);
//         console.log(JSON.parse(response));
//     },
//     error => console.log(`Rejected: ${error}`)
// );

// Ожидание нескольких промисов - параллельное выполнение

function t05() {
    const promise_3 = new Promise((resolve, reject) => {
        fetch('https://api.itgid.info/api/delay')
            .then(data => resolve(data.json()));
    });

    const promise_4 = new Promise((resolve, reject) => {
        fetch('https://api.itgid.info/api/test')
            .then(data => resolve(data.json()));
    });

    Promise.all([promise_3, promise_4]).then(f3);

    function f3(data) {
        console.log(data);
    }
}

// t05();

// Ситуация когда один промис зависит от другого - цепочка промисов
function t06() {
    fetch('https://api.itgid.info/api/time')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return fetch('https://api.itgid.info/api/test')
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

t06();