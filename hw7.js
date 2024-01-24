let str = 'привет';
console.log(str.toUpperCase());


function searchStart(a, b) {
    b = b.toLowerCase();
    let c = [];
    for (let item of a) {
        item = item.toLowerCase();
        if (item.indexOf(b) === 0) {
            c.push(item);
        }
    }
    return c;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []


let t = 32.58884;
let d = Math.floor(t);
console.log(d);
let r = Math.ceil(t);
console.log(r);
let u = Math.round(t);
console.log(u);


const number = [52, 53, 49, 77, 21, 32];
let min = Math.min(...number);
let max = Math.max(...number);
console.log(`мин значение = ${min}`);
console.log(`макс значение = ${max}`);


function any() {
    console.log(Math.round(Math.random() * (10 - 1)) + 1);
}
any();


function getRandomArrNumbers(a) {
    let c = [];
    for (let i = 0; i < Math.floor(a / 2); i++) {
        c.push(Math.round(Math.random() * a));
    }
    return c;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));


function wholeNumbers(a, b) {
    return Math.round(Math.random() * (Math.max(a, b) - Math.min(a, b))) + Math.min(a, b);
}
console.log(wholeNumbers(5, 9));


let date = new Date();
console.log(date);



let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);


function cuteDate(a) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
        "Ноябрь", "Декабрь"
    ];
    return "Дата: " + a.getDate() + " " + months[a.getMonth()] + " " + a.getFullYear() + " -это " + days[a.getDay()] +
        ". Время: " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
}
console.log(cuteDate(new Date()));