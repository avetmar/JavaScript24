const obj = {
    'name' : "Task",
    "randomNum" : [22, 'Hello', 'task'],
    "priority" : {
        "1" : "Low",
        "2" : "Middle",
        "3" : "Hight"
    }
};

console.log(obj);
console.log(obj.toString());

// JavaScript Object Notation

// JSON.stringify для преобразования объектов в JSON. сериализация
// JSON.parse для преобразования JSON обратно в объект. десериализация

let str = JSON.stringify(obj);
console.log(str);
let obj2 = JSON.parse(str);
console.log(obj2)

// JSON - независимая спецификация от языка

const obj3 = {
    prop_1 : 11,
    prop_2 : undefined,
    prop_3 : null,
    prop_4 : new Set([2, 3, 2]),
    prop_5 : new Date(),
    method : function() {
        return 100500;
    },
    method2() {
        return 200500;
    }
}

console.log(obj3.method());
console.log(obj3.method2());

let str2 = JSON.stringify(obj3);

console.log(str2);
console.log((new Date()).getFullYear());


// let obj4 = JSON.parse(str2);
let obj4 = JSON.parse(str2, function(key, value) {
    if (key == 'prop_5') {
        return new Date(value);
    }
    return value;
});
console.log(obj4);
console.log(obj4.prop_5.getFullYear());


document.addEventListener("DOMContentLoaded", function () {
    fetch('json_4.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});