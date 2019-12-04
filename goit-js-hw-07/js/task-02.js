'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createElement = (arr = [], newElem) => {
  return arr.map(string => {
    const newNode = document.createElement(newElem);
    newNode.textContent = string;
    return newNode;
  });
};

const addElement = (arr = [], tag, newElem) => {
  const findEleminDOM = document.querySelector(tag);
  findEleminDOM.append(...createElement(arr, newElem));
};

addElement(ingredients, '#ingredients', 'li');