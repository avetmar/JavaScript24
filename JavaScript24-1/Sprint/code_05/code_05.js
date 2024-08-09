document.querySelector('.b-1').onclick = f01;

function f01 () {
    // 1
    const i1 = document.querySelector('.i-1');
    console.log(i1.value);
    document.querySelector('.out-1').textContent = i1.value;
    // i1.value = 33;
    console.log(typeof i1.value);
}

document.querySelector('.b-2').onclick = f02;

const s2 = document.querySelector('.s-2');

function f02 () {
    console.log(s2.value);
    document.querySelector('.out-2').textContent = s2.value;
    // s2.value = 33;
}


document.querySelector('.b-3').onclick = f03;

const textArea3 = document.querySelector('.ta-3');

function f03 () {
    console.log(textArea3.value);
    document.querySelector('.out-3').textContent = textArea3.value;
    // textArea3.value = '';
}

document.querySelector('.b-4').onclick = f04;

const ch4 = document.querySelector('.ch-4');

function f04 () {
    // if (ch4.checked) {
    //     console.log('yes');
    //     console.log(ch4.value);
    // }
    // else {
    //     console.log('no');
    // }
    ch4.checked = false;
}