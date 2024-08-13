// Task 11
// Напишите функцию, которая с помощью оператора spread добавляет в начало массива arr_11 строку считанную из input.i-11 в. Функция должна выводить массив в строку .out-11. Разделитель - пробел.

let arr_11 = ["SUSE", "Unbreakable Linux", "Yellow Dog", "Slackware"];

const t11 = () => {
    const val = document.querySelector('.i-11').value;
    // const newArr = [val, ...arr_11];
    arr_11 = [val, ...arr_11];
    // document.querySelector('.out-11').textContent = newArr.join('_')
    // document.querySelector('.out-11').textContent = newArr.join(' ')
    document.querySelector('.out-11').textContent = arr_11.join(' ')
}

document.querySelector('.b-11').addEventListener('click', t11);


// 1. Необходимо выделить в задаче подзадачи. Важно, мы будем тестировать на основе данных подзадач, поэтому они очень важны.
// Subtasks
// 1. При нажатии кнопки button.b-11 значение из input.i-11 добавляется в arr_11 под индексом 0.
// 2. При subtask 1 длина массива arr_11 увеличивается на единицу.
// 3. Добавленное в subtask 1 значение - строка.
// 4. Остальные значения в массиве не изменяются. Их порядок не меняется. Их тип не меняется.
// 5. Вывод на страницу. Значения выводятся в .out-1 через 1 пробел. В конце пробел может быть, а может и не быть.
// 6. Если в .out-11 были данные - они удаляются.

// Способ запуска. Клик по кнопке. В функции не применяется this. В функции не применятеся event. Т.е. можно запустить функцию без доп. действий - t11();

function equalArr(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false; 
    return true;
}

function test_11 (obj){
    try {
        arr_11 = obj.arr_in;
        // подготавливаем элементы
        const i11 = document.querySelector('.i-11');
        const out11 = document.querySelector('.out-11');
        const arrLength = obj.arr_in.length;
        
        // делаем первую проверку
        i11.value = obj.num;
        t11();
        // 2
        if (arr_11.length !== arrLength + 1 ) return false;
        // 1, 3
        if (arr_11[0] !== (obj.num).toString()) return false;
        // 4
        if (!equalArr(arr_11, obj.arr_out)) return false;
        // 5-6
        if (out11.textContent.trim() !== obj.arr_out.join(' ')) return false;
        return true;
    }
    catch (error){
        console.log(error);
        return false;
    }
}

let testObj = {
    arr_in :  ['22', '33'],
    num : 11,
    arr_out : ['11', '22', '33']
}

console.log(test_11(testObj));

testObj = {
    arr_in :  ['11', '22', '33'],
    num : 0,
    arr_out : ['0', '11', '22', '33']
}

console.log(test_11(testObj));


// вариант с применением эмуляции события - допустим эмуляция клика мыши.

function t12 (event) {
    console.log(event);
}

// t12();
document.querySelector('.b-12').addEventListener('click', t12);

let clickEvent = new Event("click");
// document.querySelector('.b-12').click();
document.querySelector('.b-12').dispatchEvent(clickEvent);

// применение this

function t13() {
    console.log(this);
}

document.querySelector('.b-13').addEventListener('click', t13);

let clickEvent2= new Event("click");
// document.querySelector('.b-12').click();
document.querySelector('.b-13').dispatchEvent(clickEvent2);

t13.apply(document.querySelector('.b-13'));