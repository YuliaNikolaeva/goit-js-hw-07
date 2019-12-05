'use strict'

const findCategory = (id) => 
 document.querySelectorAll(`${id} > .item`)
 .forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent} Количество: ${elem.lastElementChild.children.length}`)
});


findCategory('#categories');