let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr = arr.sort((a, b) => 0.5 - Math.random());
console.log(arr);

let x = 3;
let y = 1;

let step = 1;
let error = 0;

const fieldInit = () => {
  for (let i = 0; i < 2; i++) {
    for (let k = 0; k < 4; k++) {
      let div = document.createElement("div");

      if (i === 1 && k === 3) div.classList.add("active");
      document.querySelector(".gamefield").append(div);
      div.textContent = arr[i * 4 + k];
    }
  }
  setTimeout(function () {
    document.querySelectorAll(".gamefield > div").forEach((item) => (item.textContent = ""));
    document.addEventListener("keydown", pressKey);
  }, 5000);
};

fieldInit();

const blocks = document.querySelectorAll(".gamefield > div");

function pressKey(event) {
  blocks[y * 4 + x].classList.remove("active");
  console.log(step);
  const keys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", " "];

  if (event.key === "r") location.reload();

  if (!keys.includes(event.key)) return false;

  switch (event.key) {
    case "ArrowUp":
      y - 1 >= 0 ? y-- : (y = 1);
      break;
    case "ArrowDown":
      y + 1 === 2 ? (y = 0) : y++;
      break;
    case "ArrowLeft":
      x - 1 >= 0 ? x-- : (x = 3);
      break;
    case "ArrowRight":
      x + 1 === 4 ? (x = 0) : x++;
      break;
    case "Enter":
      if (blocks[y * 4 + x].textContent == "" && step === arr[y * 4 + x]) {
        blocks[y * 4 + x].textContent = arr[y * 4 + x];
        step++;
      } else {
        alert("error");
        error++;
      }
      break;
    case " ":
      if (blocks[y * 4 + x].textContent == "" && step === arr[y * 4 + x]) {
        blocks[y * 4 + x].textContent = arr[y * 3 + x];
        step++;
      } else {
        alert("error");
        error++;
      }
      break;
  }
  console.log(x, y);
  blocks[y * 4 + x].classList.add("active");

  if (error == 2) {
    alert("Fail");
    location.reload();
  }
  if (step == 9) {
    alert("win");
    location.reload();
  }
}
