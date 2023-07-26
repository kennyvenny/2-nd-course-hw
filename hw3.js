let password = 'пароль';
let pas = prompt('Введите пароль');
if (password === pas) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

let c = 4;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("неверно")
};

let d = 33;
let e = 88;
if (d > 100 || e > 100) {
    console.log("Верно")
} else {
    console.log("неверно")
};

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log("зима");
        break;
    case '3':
    case '4':
    case '5':
        console.log("весна");
        break;
    case '6':
    case '7':
    case '8':
        console.log("лето");
        break;
    case '9':
    case '10':
    case '11':
        console.log("осень");
        break;
    default:
        console.log("ошибка");
}

