'use strict'

const input = document.querySelector(`#validation-input`);

const inpunSymbols = () => 
input.value.length === Number(input.getAttribute("data-length")) ?
(input.classList.add("valid"), input.classList.remove("invalid")) 
:(input.classList.add("invalid"), input.classList.remove("valid"))

input.addEventListener(`input`, inpunSymbols);