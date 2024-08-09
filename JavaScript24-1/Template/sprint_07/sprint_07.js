const goods = document.querySelector(".goods"); // Селект
const square = document.querySelector(".square"); // Площадь
const layer = document.querySelector(".layer"); // Толшина
const out1 = document.querySelector(".out-1"); // Расход
const out2 = document.querySelector(".out-2"); // Количество мешков
const out3 = document.querySelector(".out-3"); // Цена
const goodsImg = document.querySelector(".goods-img"); // Изображение

//Функция - расход
function rate() {
  let expenditure = 0;
  let k = 0;
  let price = 0;

  const value = goods.value;

  if (square.value < 1) square.value = 1; // зашита от минусового значения
  if (square.value > 100000) square.value = 1; // Зашита от экспонеонта
  if (layer.value < 1) layer.value = 1; // зашита от минусового значения
  if (layer.value > 100) layer.value = 100; // зашита от запредельной высоты

  switch (value) {
    case "budmaster":
      console.log("budmaster");
      k = 1.9;
      price = 1570;
      break;
    case "ceresit":
      console.log("ceresit");
      k = 2;
      price = 1360;
      break;
    case "siltek":
      console.log("siltek");
      k = 2;
      price = 1510;
      break;
    case "polimin":
      console.log("polimin");
      k = 1;
      price = 1100;
      break;
  }

  expenditure = square.value * layer.value * k;
  out1.textContent = expenditure + "кг";
  out2.textContent = Math.ceil(expenditure / 25) + " мешка / мешков";
  out3.textContent = price * Math.ceil(expenditure / 25) + " amd";
}
// Меняем изображение при выборе товара в Select

function changeImg() {
  const value = goods.value;
  goodsImg.src = `./images/${value}.jpg`;
  out1.textContent = "";
  out2.textContent = "";
  out3.textContent = "";
}

document.querySelector(".b-1").onclick = rate;
goods.onchange = changeImg;
