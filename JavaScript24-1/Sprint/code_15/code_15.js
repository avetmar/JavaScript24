function t01() {
    // event.preventDefault();
    console.log('work t01');
}
function t02() {
    console.log('function 2')
}

const b1 = document.querySelector('.b-1');

// b1.onclick = t01;
// b1.onclick = t02;
// b1.onclick = function() {
//     t01();
//     t02();
// }
// b1.onclick = '';
// b1.onclick = undefined;
// b1.onclick = null;

b1.addEventListener('click', t01);
b1.addEventListener('click', t02);
b1.removeEventListener('click', t02);

const b2 = document.querySelector('.b-2');

function multi(a, b) {
    return a * b;
}

// b2.addEventListener('click', () => {
//     console.log(multi(3,4));
// });

// b2.addEventListener('dblclick', t01);
// click = mousedown + mouseup
// b2.addEventListener('mousedown', t01);
// b2.addEventListener('mouseup', t01);
// b2.addEventListener('mouseover', t01);
// b2.addEventListener('mouseout', t01);
// b2.addEventListener('mousemove', t01);
// b2.addEventListener('contextmenu', t01);

const i1 = document.querySelector('.i-1');

function t03() {
    console.log(i1.value);
}

// i1.addEventListener('input', t03);
// i1.addEventListener('change', t03);

const t04 = () => console.log('copy');
const t05 = () => console.log('cut');
const t06 = () => console.log('paste');
const t07 = () => console.log('focus');

i1.addEventListener('copy', t04);
i1.addEventListener('cut', t05);
i1.addEventListener('paste', t06);
i1.addEventListener('focus', t07);
