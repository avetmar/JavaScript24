console.log(localStorage);
// удобное сокращение
const LS = localStorage;

LS.setItem('a', 'hello');
LS.setItem('b', true);
LS.setItem('c', 73);
LS.setItem('d', [2, 3, 'hi']);
LS.setItem('d', JSON.stringify([2, 3, 'hi']));
LS.setItem('e', JSON.stringify({ "one": 1, "two": 2 }));

console.log(LS.getItem('a'));
console.log(LS.getItem('b'));
console.log(LS.getItem('c'));
console.log(JSON.parse(LS.getItem('d')));
console.log(JSON.parse(LS.getItem('e')));

// LS.removeItem('d');
// LS.clear();

window.addEventListener("storage", (event) => {
    console.log('work storage event');
    // console.log(event);
    changeThemes();
});

let d = 100;

const button1 = document.querySelector('.b-1');
if (button1) {
    button1.addEventListener('click', function () {
        LS.setItem('count', d);
        d++;
    });
}

const checkbox = document.querySelector('input[type="checkbox"]');
const link = document.querySelector('link[data-role="main-themes"]');

if (checkbox) {
    checkbox.addEventListener('input', function () {
        this.checked ? LS.setItem('themes', 'black') : LS.setItem('themes', 'white');
        changeThemes();
    });
}

function changeThemes() {
    if (LS.getItem('themes') === 'black') {
        if (checkbox) checkbox.checked = true;
        link.href = 'css/night.css';
    }
    else {
        if (checkbox) checkbox.checked = false;
        link.href = 'css/style.css';
    }
}

changeThemes();