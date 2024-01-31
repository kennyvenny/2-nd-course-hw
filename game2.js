
function gameTwo() {
    let game = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    game = game.sort(() => Math.random() - 0.5);
    alert(game);
    let answerOne = prompt('Чему равнялся первый элемент массива ?');
    let answerTwo = prompt('Чему равнялся последний элемент массива ?');
    if (answerOne.toLowerCase() == game[0].toLowerCase() && answerTwo.toLowerCase() == game[game.length - 1].toLowerCase()) {
        alert("Поздравляю!");
    } else if (answerOne.toLowerCase() == game[0].toLowerCase() || answerTwo.toLowerCase() == game[game.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("Не верно!");
    }
}