'use strict'

const container = document.querySelector('#boxes');
const imputNumber = document.querySelector('#controls > input');

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');


const createColor = () => {
  const [r, g, b] = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  return randomColor;
};


const createSize = (size, step, i) => {
  let newSize = size;
  newSize = size + (i * step)  + 'px';

  return newSize;
};

const createBox = (i) => {
  const box =  document.createElement('div');
  box.style.display = 'inline-block';
  box.style.background = createColor();
  box.style.margin = '10px';
  box.style.width = createSize(30, 10, i);
  box.style.height = createSize(30, 10, i);

  return box;
};

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i+=1) {
    container.append(createBox(i));
  };
};

const getImputNumber = () => {
  const amount = Number(imputNumber.value);
  createBoxes(amount);
  imputNumber.value = '';
};

const destroyBoxes = () => {
  container.innerHTML = '';
};

renderBtn.addEventListener('click', getImputNumber);
destroyBtn.addEventListener('click', destroyBoxes);