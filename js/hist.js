import { generateID } from 'js/id.js';

let key = 'history';
let globalArray = new Array();

window.addEventListener("load", () => {
     let data = getData();
     globalArray = data;
});

export function getData() {
     return JSON.parse(localStorage.getItem(key));
}

export function addValue(value) {
     // inicialize the global array
     const id = generateID();
     if (!globalArray) globalArray = new Array();
     const toSend = { id, value };
     // add to virtual array
     globalArray.push(toSend);
     // add to localStorage0
     localStorage.setItem(key, JSON.stringify(globalArray));
}

export function deleteValue(id) {
     globalArray = globalArray.filter(d => d.id != id);
     localStorage.setItem(key, JSON.stringify(globalArray));
}