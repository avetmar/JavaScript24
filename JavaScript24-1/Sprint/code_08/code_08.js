for (let i = 0; i <= 5; i = i + 1) {
    // команды
    console.log(i);
}

for (let k = 22; k >= 14; k = k - 4) {
    console.log(k);
}

let out = '';

for (let i = 99; i >= 89; i = i - 1) {
    out += i + '_';
}

document.querySelector('.out-1').textContent = out;

// ==========================

let out2 = '';

for (let i = 0; i < 3; i = i + 1) {
    out2 += (i + 1) + '***********<br>';
}

console.log(out2);
document.querySelector('.out-2').innerHTML = out2;

// сумма ряда

// 1 + 2+ 3 + ..  + 10

let s = 0;

for (let i = 1; i <= 10; i++) {
    s = s + i; // s += i
}

console.log(s);

// 1 * 2 * 3 * 4 * .. * 10

let p = 1;

for (let i = 1; i <= 10; i++) {
    p = p * i;
    // console.log(p);
    // if (p >= 10000) break;
}

console.log(p);

for (let i = 0; i <= 5; i = i + 1) {
    if (i === 3 || i === 2) continue;
    console.log(i);
}

for (let i = 0; i <= 5; i = i + 1) {
    if (i === 3) break;
    console.log(i);
}

const elems = document.querySelectorAll('div > p');
console.log(elems);

for (let i = 0; i < elems.length; i = i + 1) {
    elems[i].textContent = (i + 10) +'. '+ elems[i].textContent;
}

const r1 = document.getElementsByName('r-1');
console.log(r1);
// console.clear();
function radio () {
    for (let i = 0; i < r1.length; i++) {
        console.log(i);
        if (r1[i].checked) {
            console.log(r1[i].value);
            break;
        }
    }
}

document.querySelector('.b-1').onclick = radio;