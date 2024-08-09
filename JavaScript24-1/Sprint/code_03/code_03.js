let str1 = 'Hello';
document.querySelector('.one span').textContent = str1;
str1 = 'Abba';
document.querySelector('.two').textContent = str1;

let a = 6;
console.log(a);
a = a + 10;
console.log(a);
let b = a + 100;
console.log(b);

const h1 = document.querySelector('.h1');
let h1Text = h1.textContent;
console.log(h1);
console.log(h1Text);
// h1.textContent = 'some text';
// h1.textContent = 22;

let t = 5;
t = t + 100;

let x = 5;
let y = 7;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
x = x + y;
console.log(x);

const s1 = 'he';
const s2 = 'llo';
// конкатенация
console.log(s1 + s1 + '   ' + s2);
// интерполяция
console.log(`${s1}${s1}   ${s2}`);
