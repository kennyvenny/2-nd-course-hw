function gameOne() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
       alert("зима");
    } else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
       alert("весна");
    } else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
       alert("лето ");
    } else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
       alert("осень");
    } else {
       alert("нет такого месяца!");
    }
}                        