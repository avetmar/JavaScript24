const p1 = document.querySelector('.p-1');
console.log(p1);

// 1. Получать атрибуты
console.log(p1.getAttribute('class'));
console.log(p1.getAttribute('id'));
console.log(p1.id);

const catImg = document.querySelector('img');
console.log(catImg.getAttribute('src'));
console.log(catImg.src);

// 2. Изменение атрибутов
catImg.src = './images/dog.png';
catImg.setAttribute('src', './images/witch.png');

p1.id = 'two';
p1.setAttribute('id', 'three');

const checkbox = document.querySelector('[type="checkbox"]');
// checkbox.checked = true;
checkbox.setAttribute('checked', true);

const link = document.querySelector('a.link');
console.log(link);
// link.href = 'https://google.com';
link.setAttribute('href', 'https://itgid.info');

// catImg.removeAttribute('src');

const button = document.querySelector('.add-button');
console.log(button);
// console.log(button.getAttribute('data-articul'));
console.log(button.dataset);
console.log(button.dataset.articul);
console.log(button.dataset.userSession);



