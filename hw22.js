let a=10;
a=20;
alert(a);

let iPhone=2007;
alert(iPhone);

let js="Brendan Eich"
alert(js)

let q=10;
let w=2;
alert(q+w);
alert(q-w);
alert(q*w);
alert(q/w);

let e=5;
result=2**5;
alert(result);

a=9;
let b=2;
alert(a%b);

let num=1;
num+=5;
num-=3;
num*=7;
num/=3;
num+=1;
num-+1;
alert(num);

let age=prompt("Сколько вам лет?");
alert (age);

const user = {
	name: 'Николай',
	age: 34,
	isAdmin: true,
}

user["city of residence"]="Шахты";
delete user["city of residence"];
user.age=24

let info=prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


let name=prompt("Как твое имя?");
alert(`Привет, ${name}!`)