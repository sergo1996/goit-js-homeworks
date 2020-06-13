'use strict';

import galleryItems from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', handleClick);
galleryList.addEventListener('keydown', handlePress);

const createGalleryItem = ({
    preview,
    original,
    description
  }) =>
  `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;

const galleryMarkup = galleryItems.reduce((acc, item) => {
  return acc + createGalleryItem(item);
}, '');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

const modalBackdrop = document.querySelector('.lightbox__content');
modalBackdrop.addEventListener('click', handleBackDrop);

const closeBtn = document.querySelector('.lightbox__button');
closeBtn.addEventListener('click', closeModal);

const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox___image');

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
  modalImage.setAttribute('src', '');
}

function handleClick(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();
  openModal();

  const imageURL = e.target.getAttribute('data-source');
  const imageALT = e.target.getAttribute('alt');
  modalImage.setAttribute('src', imageURL);
  modalImage.setAttribute('alt', imageALT);
}

function handlePress(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}

function handleBackDrop(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}