function t01() {
    console.log(Math.round(Date.now() / 1000));
    console.log('work');
}

// t01();
console.log(Math.round(Date.now() / 1000));
// setTimeout(t01, 4000);
// setTimeout(() => {
//     console.log(Math.round(Date.now() / 1000));
//     console.log('work');
// }, 7000);

let timer;

function t02() {
    console.log(Math.round(Date.now() / 1000));
    timer = setTimeout(t01, 5500);
}

function t03() {
    clearTimeout(timer);
}


document.querySelector('.b-1').addEventListener('click', t02);
document.querySelector('.b-2').addEventListener('click', t03);

setTimeout(() => {
    // alert('Hello');
    document.querySelector('p').style.display = 'none';
}, 4500);

let count = 0;

function myCount() {
    setTimeout(function () {
        document.querySelector('.out-1').textContent = count;
        count++;
        myCount();
    }, 2000);
}

// myCount();


let interval = setInterval(function () {
    document.querySelector('.out-2').textContent = count;
    count++;
    if (count > 10) clearInterval(interval);
}, 2000);
