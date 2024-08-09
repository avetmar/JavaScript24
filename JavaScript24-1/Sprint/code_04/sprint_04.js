

function f01() {
    document.querySelector('.one').textContent = 'hello';
    const one = document.querySelector('.one');
    console.log(one);

    let a = 5;
    let b = 10;
    let c = a + b;
    console.log(c);
}

document.querySelector('.b-1').onclick = f01;

function f02 () {
    console.log('work functon 2');
}

document.querySelector('.b-2').onclick = f02;



let c = 0;

function f03 () {
    c = c + 1;
    console.log(c);
}

document.querySelector('.b-3').onclick = f03;