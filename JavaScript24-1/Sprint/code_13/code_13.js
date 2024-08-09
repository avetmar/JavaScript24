function t01() {
    console.log(1);
    console.log('work');
    // return
}

// document.querySelector('.b-1').onclick = function () {
//     console.log(1);
//     console.log('work');
// }

t01();

(function () {
    console.log('3');
})();


const f = function () {
    console.log('5');
};

f();

// console.log(5 * 4 * t01());

let n = 90;

function isEven(a) {
    // let a = -2
    // console.log('is even');
    return a % 2 === 0;
}

// console.log(1 && isEven());

console.log(isEven(10));
console.log(isEven(3));
console.log(isEven(-2));
console.log(isEven(n));

function max (a,b) {
    console.log('max');
    let c;
    if (a > b) c = a;
    else c = b;
    return c;
    // return a > b ? a : b;
}

console.log(max(4, 67));
document.querySelector('.out-1').textContent = max(22,33);
document.querySelector('.out-2').textContent = max(122,33);
// alert(max(-1,-10));
console.log(100 + max(-60, -55));
console.clear();

document.querySelector('.b-2').onclick = function() {
    console.log(max(100,200));
    console.log(max(300,200));
}