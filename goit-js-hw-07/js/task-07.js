'use strict'

const inputSizeText = document.querySelector(`#font-size-control`);
const text = document.querySelector("#text");

const changeSizeText = () => text.style.fontSize = `${inputSizeText.value}px`;

inputSizeText.addEventListener("input", changeSizeText);