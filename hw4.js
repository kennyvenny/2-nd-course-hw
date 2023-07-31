let n=1;
while (n<=2) {
    alert ('Привет');
    n++
};

let a=1;
for (a=1; a<=5; a++) {
    console.log (a)
};

let b;
for (b = 7; b <= 22; b++) {
    console.log(b)
};

const obj={
   'Коля': 200,
   'Вася': 300,
   'Петя': 400
}
for (let capital in obj) { 
    alert(`${capital} -зарплата ${obj[capital]} долларов`);
}

let t= 1000;
let num = 0;
while (t > 50) {
    num++;
    t = t / 2;
}
alert(t);
alert(num);

let fr=1;
for (let d=1; d<=31; d++) {
  if ( d===fr) {
    alert(`Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.`);
    fr= fr+7;
  }
}
