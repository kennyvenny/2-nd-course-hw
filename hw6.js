const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}

const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

const a = [1, 3, 5, 10, 20];
console.log(a.join([' ']));

let b = [];
for (let i = 0; i < 3; i++) {
    let c = [];
    for (let y = 0; y < 3; y++) {
        c.push(1);
    }
    b.push(c);
}
console.log(b);

const q = [1, 1, 1];
q.push(2, 2, 2);
console.log(q);

const r = [9, 8, 7, 'a', 6, 5];
console.log(r.sort());
console.log(r.pop());
console.log(r);

const f = [9, 8, 7, 6, 5];
let number = prompt('Угадай число');
let result = "Не угадал";
for (let item of f) {
    if (item == number) {
        result = "Угадал";
    }
}
alert(result);

let line = "abcdef";
let k = line.split('');
console.log(k.reverse().join(''));

const m = [
    [1, 2, 3],
    [4, 5, 6]
];
const flat = m.flat()
console.log(flat);

const h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < h.length - 1; i++) {
    console.log(h[i] + h[i + 1]);
}

const e = [1, 5, 7, 8];
let res = e.map(item => (item * item));
console.log(res);

function getLengthWords(arrWords) {
    let arrLength = new Array();
    for (let item of arrWords) {
        arrLength.push(item.length);
    }
    return arrLength;
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

function filterPositive(arrayP) {
    return arrayP.filter(item => item < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 