'use strict'

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];


const gallery = document.querySelector('#gallery');
const buttonsBox = document.querySelectorAll('.buttons-box')[0];
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');
const preview = document.querySelector('#preview');



const createPhotoMarkup = ({url, alt}) => {
 return `<li class="gallery-item"><img class="big" src=${url} alt=${alt}></li>`;
};

const createPreviewMarkup = ({url, alt}) => {
  return `<li class="preview-item"><img class="small" src=${url} alt=${alt}></li>`;
};


const createGalery = (photos) => photos.map((photo) => createPhotoMarkup(photo)).join('');
const createView = (photos) => photos.map((photo) => createPreviewMarkup(photo)).join('');

gallery.insertAdjacentHTML(`beforeend`, createGalery(images));
preview.insertAdjacentHTML(`beforeend`, createView(images));

const galleryItems = document.querySelectorAll('.gallery-item');
const bigImages = document.querySelectorAll('.gallery-item > img');
const previewItems = document.querySelectorAll('.preview-item');
const smallImages = document.querySelectorAll('.preview-item > img');

let slideIndex = 1;

const showSlides = (n) => {
  if(n < 1) {
    slideIndex = bigImages.length;
  } else if(n > bigImages.length) {
    slideIndex = 1
  }

  for (let i = 0; i < bigImages.length; i++) {
    bigImages[i].style.display = 'none';
  }

  for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].classList.remove('active');
 
  }
  bigImages[slideIndex - 1].style.display = 'block';
  smallImages[slideIndex - 1].classList.add('active')
};

const plusSlides = (n) => {
  showSlides(slideIndex += n);
};

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const toLeft = () => {
  plusSlides(-1);
};


const toRight = () => {
  plusSlides(1);
};

const toPreview = (e) => {
    for (let i = 0; i < smallImages.length + 1; i++) {
    if(e.target.classList.contains('small') && e.target === smallImages[i-1]) {
      currentSlide(i);
    }
  }
}

leftBtn.addEventListener('click', toLeft);
rightBtn.addEventListener('click', toRight);
preview.addEventListener('click', toPreview);