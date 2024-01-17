function numbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(numbers(6, 6));

function parity(n) {
    if (n % 2 == 0) {
        return "Число четное"
    } else {
        return "Число нечетное"
    }
}
console.log(parity(6));

let square = function (a) {
    let b = a * a;
    console.log(`Квадрат числа равен ${b}`);
}

function square2(a) {
    return a * a;
}
square(4);
console.log(square2(2));

function age() {
    let answer = prompt('сколько Вам лет?')
    if (answer < 0) {
        alert('Вы ввели неправильное значение');
    } else if (answer < 13) {
        alert('привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}
age();

function num(c, z) {
    if (isNaN(c) || isNaN(z)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return c * z
    }
}
console.log(num('A', 3));

function cube(n) {
    if (!isNaN(n)) {
        let y = n ** 3;
        return `n в кубе равняется ${y}`
    } else {
        return 'Переданный параметр не является числом'
    }
}
console.log(cube("r"));


function getCircleArea() {
    return 3.14 * this.radius ** 2;
}

function getCirclPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 6,
    getArea: getCircleArea,
    getPerimeter: getCirclPerimeter,
}

const circle2 = {
    radius: 7,
    getArea: getCircleArea,
    getPerimeter: getCirclPerimeter,

}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());