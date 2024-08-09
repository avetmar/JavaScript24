console.log(1);
let x = 4; // == === > >= < <= != !== !

console.log(x === 4);

if (x === 4) {
    console.log(2);
}

console.log(3);

const y = 2;

if (y % 2 === 0) {
    console.log('yes');
}
else {
    console.log('no');
}

if (y > 10) {
    console.log('>10');
}
if (y > 15) {
    console.log('>15');
}

const f = 500;

if (f >= 1 && f <= 20) console.log('p 1');
else if (f >= 21 && f <= 40) console.log('p 2');
else if (f >= 41 && f <= 60) console.log('p 3');
else console.log('error');

let foo = 88;
if (foo === 88 || foo === 99) console.log('foo');

(y % 2 === 0) ? console.log('even') : console.log('odd');

let role = 55;

switch (role) {
    case 'admin':
        console.log('welcome admin');
        console.log('111');
        role = 'moderator';
        break;

    case 'moderator':
        console.log('welcome moderator');
        console.log('222');
        break;

    case 55:
        console.log('welcome finance');
        console.log('999');
        break;

    case 'user':
        console.log('welcome admin');
        console.log('333');
        break;
    default:
        console.log('error - user not found');
}


