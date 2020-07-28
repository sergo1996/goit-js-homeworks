import './styles.css';
import imgService from './js/apiService.js';
import galleryItemTemplate from './templates/img_card_template.hbs';
import { error, alert, success, defaults, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('#gallery'),
  loadMoreBtn: document.querySelector('#loadMore'),
};

refs.searchForm.addEventListener('submit', searchFormHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormHandler(e) {
  e.preventDefault();
  clearListItems();
  imgService.resetPage();
  const inputValue = e.currentTarget.elements.query.value;
  // set the search query to the object to fetch
  imgService.searchQuery = inputValue;
  //get array of objects and put each of them to the handlebars template
  imgService
    .fetchImages()
    .then(images => buildListItems(images))
    .catch(error => error('Something went wrong'));
}

function loadMoreBtnHandler(e) {
  imgService
    .fetchImages()
    .then(images => buildListItems(images))
    .catch(error => error('Something went wrong'));
}

function buildListItems(data) {
  const markup = galleryItemTemplate(data);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  // clear gallery HTML
  refs.gallery.innerHTML = '';
}
