'use strict'

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");


let counterValue = 0;
value.textContent = counterValue;

const increment = () => value.textContent = counterValue +=1;
const decrement = () => value.textContent = counterValue -=1;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);