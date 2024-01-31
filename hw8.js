
const people = [{
        name: 'Глеб',
        age: 29
    },
    {
        name: 'Анна',
        age: 17
    },
    {
        name: 'Олег',
        age: 7
    },
    {
        name: 'Оксана',
        age: 47
    }
];

console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));

/*Задание 2*/


function isPositive(a) {
    return a > 0;
}

function isMale(obj) {
    return obj.gender === 'male';
}

function filter(arr, callback) {
    let result = [];
    for (let i in arr) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [{
        name: 'Глеб',
        gender: 'male'
    },
    {
        name: 'Анна',
        gender: 'female'
    },
    {
        name: 'Олег',
        gender: 'male'
    },
    {
        name: 'Оксана',
        gender: 'female'
    }
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]




let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(function killTimer() {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, 30000);




function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});




function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));