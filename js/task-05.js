'use strict'

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const sayHello = (event) => 
event.currentTarget.value.trim().length === 0 ? 
nameOutput.textContent = 'незнакомец'
: nameOutput.textContent = event.currentTarget.value.trim();

nameInput.addEventListener('input', sayHello);