const p = document.createElement('p');
p.textContent = 'hello js24';
p.classList.add('bg-orange');
p.setAttribute('data-p', 22);
console.log(p);

// document.querySelector('.out-1').append(p);
// document.querySelector('.out-1').after(p);
// document.querySelector('.out-1').before(p);
// document.querySelector('.out-2').append(p);
document.querySelector('.out-2').prepend(p);

const img = document.createElement('img');
img.src='./images/harconen.png';
img.alt ='hello';
console.log(img);

p.after(img);

const input = document.createElement('input');
input.oninput = t1;
input.setAttribute('type', 'text');
document.querySelector('.out-1').append(input);
console.log(input);
input.value = 'hello';

function t1() {
    console.log(input.value);
}
