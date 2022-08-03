import {arrayField} from './field.js';

const conteiner = document.querySelector('body');
const conteinerMain = document.createElement('div');
conteinerMain.classList.add('conteinerMain');
conteiner.prepend(conteinerMain);

const zagolovok = document.createElement('div');
zagolovok.classList.add('zagolovok');
zagolovok.innerHTML = `<h1>Крестики-Нолики</h1>`;
conteinerMain.append(zagolovok);

const fieldConteiner = document.createElement('div');
fieldConteiner.classList.add('field_conteiner');
conteinerMain.append(fieldConteiner);

const stopGame = document.createElement('div');
stopGame.classList.add('result')
conteinerMain.append(stopGame);

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Новая игра';
buttonReset.classList.add('clean');
conteinerMain.append(buttonReset);

for (let i = 0; i < 3; i+=1) { 
    for (let j = 0; j < 3; j+=1) {
        fieldConteiner.append(arrayField[i][j].element);
    }
} 

// заполнение ячеек игрового поля
let butField = document.getElementsByClassName('field');
let choice;
let move = 0;
let resultGame = '';

function clickValue(choice) {
    for (let i = 0; i < butField.length; i++) {
        butField[i].addEventListener('click', () => {
            if(butField[i].innerHTML === '') {
                move % 2 === 0 ? choice = 'X' : choice = 'O';
                move++;
                butField[i].innerText = choice;
                checkGameEnd(); 
            }
        })  
    } 
}
clickValue(choice);

// проверка на выйгрыш
function checkGameEnd() {
    const arr = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

    for (let i = 0; i < arr.length-1; i++) {
        if (butField[arr[i][0]].innerText === 'X' && butField[arr[i][1]].innerText === 'X' && butField[arr[i][2]].innerText === 'X') {
            resultGame = 'Победили - крестики!!!';
            result(resultGame);
        } if (butField[arr[i][0]].innerText === 'O' && butField[arr[i][1]].innerText === 'O' && butField[arr[i][2]].innerText === 'O') {
            resultGame = 'Победили - нолики!!!';
            result(resultGame);
        } else if (resultGame !== 'Победили - крестики!!!' && resultGame !== 'Победили - нолики!!!' && move === 9) {
            resultGame = 'Ничья !!!';
            result(resultGame);
        }
    }
}

/// выведение результата игры
function result (resultGame) {
    stopGame.innerText = resultGame; 
}

/// очищение игрового поля
function clean() {
    buttonReset.addEventListener('click', () => {
        document.location.reload();
    })
}
clean();