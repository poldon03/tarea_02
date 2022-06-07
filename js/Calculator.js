import { addValue, deleteValue, getData } from 'js/hist.js';

// global variables
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const inputRes = document.getElementById('result');
const calculate = document.getElementById('calculate-button');
const select = document.getElementById('select');

// event listeners

calculate.addEventListener('click', () => {
     let res = 0;
     let symbol = '';
     // getting the res
     let value1 = input1.value;
     let value2 = input2.value;

     switch (select.value.trim()) {
          case 'Sumar':
               res = Number(value1) + Number(value2);
               symbol = '+';
               break;
          case 'Restar':
               res = Number(value1) - Number(value2);
               symbol = '-';
               break;
          case 'Multiplicar':
               res = Number(value1) * Number(value2);
               symbol = '*';
               break;
          case 'Dividir':
               res = Number(value1) / Number(value2);
               symbol = '/';
               break;
     }

     const toSend = `${value1} ${symbol} ${value2} = ${res}`;
     addValue(toSend);
     // pinting the res on the DOM
     inputRes.value = "Result: " + res;
     refreshHistory();
});

// showing history into DOM
window.addEventListener('load', () => {
     refreshHistory();
});

function refreshHistory() {
     const container = document.getElementById('li-container');
     container.innerHTML = "";
     const data = getData();

     if (data) {
          data.forEach(t => {
               // crating elements
               const li = document.createElement('li');
               li.style = 'position: relative;';
               const span = document.createElement('span');
               span.textContent = t.value;
               const button = document.createElement('button');
               button.style = 'position:absolute; right: 2px;';
               button.textContent = 'X';
               button.addEventListener('click', () => {
                    deleteValue(t.id);
                    refreshHistory();
               });
               // adding element to the container
               li.appendChild(span);
               li.appendChild(button);
               container.appendChild(li);
          })
     }
}


