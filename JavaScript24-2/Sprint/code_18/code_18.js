fetch(URL + 'time')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    });


(async function () {
        const response = await fetch(URL + "time");
        if (!response.ok) {
            throw new Error("error");
        }
        const result = await response.json();
        console.log(result);
})();

// Указываем метод

(async function () {
        const response = await fetch(URL + "time?y=1&h=12", {
            method : 'GET'
        });
        if (!response.ok) {
            throw new Error("error");
        }
        const result = await response.json();
        console.group('GET');
        console.log(result);
        console.groupEnd();
})();


// Указываем метод

(async function () {
    const response = await fetch(URL + "time-post?y=1&h=12", {
        method : 'POST'
    });
    if (!response.ok) {
        throw new Error("error");
    }
    const result = await response.json();
    console.group('POST');
    console.log(result);
    console.groupEnd();
})();

// Передача Headers - доп данные необходимые для запроса

(async function () {
    const requestHeaders = new Headers();
    requestHeaders.append("apikey", APIKEY);

    let response = await fetch(URL + "3618/employee/read", {
        method: 'GET', 
        headers: requestHeaders
    });

    const result = await response.json();
    console.group('GET + headers');
    console.log(result);
    console.groupEnd();

})();

// POST - передача данных в теле запроса

(async function () {
    const requestHeaders = new Headers();
    requestHeaders.append("apikey", APIKEY);

    const formData = new FormData();
    formData.append("min", 100);
    formData.append("max", 150);

    let response = await fetch(URL + "3618/random/random-number", {
        method: 'POST', 
        headers: requestHeaders,
        body: formData,
    });

    const result = await response.json();
    console.group('POST + headers + body with data');
    console.log(result);
    console.groupEnd();

})();

// POST - передача данных в теле запроса

