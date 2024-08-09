const item = document.querySelector('.one');
console.log(item.getAttribute('class'));
console.log(item.classList);

// есть ли класс на элементе
console.log(item.classList.contains('one'));
// добавить класс элементу
item.classList.add('bg-orange');
item.classList.add('green');

// Удалять класс CSS
// item.classList.remove('bg-orange');
// item.classList.remove('green-9');

// Заменять
// item.classList.replace('bg-orange', 'cd');

// переключение класса
function t() {
    item.classList.toggle('bg-orange');
}
item.onclick = t;

const itemNav = document.querySelector('.item-nav');

itemNav.onclick = showNav;

function showNav() {
    const subNav = itemNav.querySelector('.sub-nav');
    console.log(subNav);
    subNav.classList.toggle('hide');
}