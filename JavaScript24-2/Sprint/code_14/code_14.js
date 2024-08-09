// // document.addEventListener('keydown', function (event){
// document.addEventListener('keyup', function (event){
//     // console.log(event);
//     console.group('==============');
//     console.log('key: ',event.key);
//     console.log('keyCode: ',event.keyCode);
//     console.log('code: ',event.code);
//     console.log('altKey: ', event.altKey);
//     console.log('shiftKey: ', event.shiftKey);
//     console.log('ctrlKey: ', event.ctrlKey);
//     console.groupEnd();
// });

// const emailSymbols = ['a', 'b', 'c', 'd', 'e', ]

// document.querySelector('.email').addEventListener('keydown', function(event) {
//     // event.preventDefault();
//     console.log(event.key);
//     console.log(/[A-Za-z0-9._%+-@]/.test(event.key));
//     if (!/[A-Za-z0-9._%+-@]/.test(event.key)) event.preventDefault();
// });

let x = 0;
let y = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = arr.sort((a, b) => 0.5 - Math.random());
console.log(arr);
let step = 1;
let error = 0;


const fieldInit = () => {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            let div = document.createElement('div');

            if (i === 0 && k === 0) div.classList.add('active');
            document.querySelector('.field').append(div);
            div.textContent = arr[i * 3 + k];
        }
    }
    setTimeout(function () {
        document.querySelectorAll('.field > div').forEach(item => item.textContent = '');
        document.addEventListener('keydown', pressKey);
    }, 5000);
}

fieldInit();



const blocks = document.querySelectorAll('.field > div');

function pressKey(event) {
    console.log(event.key);
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Enter') return false;
    event.preventDefault();
    blocks[y * 3 + x].classList.remove('active');

    switch (event.key) {
        case 'ArrowUp':
            y - 1 >= 0 ? y-- : y = 2;
            break;
        case 'ArrowDown':
            y + 1 === 3 ? y = 0 : y++;
            break;
        case 'ArrowLeft':
            x - 1 >= 0 ? x-- : x = 2;
            break;
        case 'ArrowRight':
            x + 1 === 3 ? x = 0 : x++;
            break;
        case 'Enter':
            if (blocks[y * 3 + x].textContent == '' && step === arr[y * 3 + x]) {
                blocks[y * 3 + x].textContent = arr[y * 3 + x];
                step++;
            }
            else {
                alert('error');
                error++;
            }
            break;
    }
    blocks[y * 3 + x].classList.add('active');
    if (error == 2) {
        alert('Fail');
        location.reload();
    }
    if (step == 10
    ) {
        alert('win');
        location.reload();
    }
}