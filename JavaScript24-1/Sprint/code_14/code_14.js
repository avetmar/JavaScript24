const t01 = function (a, b) { 
    console.log('t01 - work');
    return a + b; 
}

document.querySelector('.out-1').textContent = t01(3, 4);

const t02 = (a, b) => a + b;

document.querySelector('.out-2').textContent = t02(22, 14);

function t03 (str) {
    return +str;
}

console.log(t03('66'));

const t04 = str => {
    return +str;
}

console.log(t04('99'));
console.log(typeof t04('99'));

// анонимная
(() => console.log('work'))();

document.querySelector('.b-1').onclick = () => {
    document.querySelector('.out-1').textContent = t01(66,24);
}


const t05 = () => {
    console.log('work 05');
    console.log(this);
}
document.querySelector('.b-5').onclick = t05;
// t05();