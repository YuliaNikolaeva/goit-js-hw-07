'use strict'

// const findCategory = (id = '') => {
//   id !== '' ?
//  document.querySelectorAll(`${id} > .item`)
//  .forEach(elem => {
//   console.log(`Категория: ${elem.firstElementChild.textContent} Количество: ${elem.lastElementChild.children.length}`)
// })
//  : console.log('Категория не найдена')
// };


const findCategory = (id) => 
 document.querySelectorAll(`${id} > .item`)
 .forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent} Количество: ${elem.lastElementChild.children.length}`)
});


findCategory('#categories');